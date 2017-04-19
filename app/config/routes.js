var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

//main page
var Main_component = require('../components/Main_component.jsx');
//other pages
var NewGame_component = require('../components/NewGame_folder/NewGame_component.jsx');
var OldScore_component = require('../components/OldScore_folder/OldScore_component.jsx');
var Settings_component = require('../components/Settings_folder/Settings_component.jsx');
var HowToPlay_component = require('../components/HowToPlay_folder/HowToPlay_component.jsx');

//getWords from DB via stores
//store
var wordsStore = require('./../stores/WordsStore.jsx');

var wordsRange = [{lower:0,upper:1000}];
var min=0, max=wordsRange.length;

var random_wordsRange_index = Math.floor(Math.random()*(max));//random index for wordsRange
console.log('random index:'+random_wordsRange_index);

//use index and get LL & UL
var lowerLimit = wordsRange[random_wordsRange_index].lower;
var upperLimit = wordsRange[random_wordsRange_index].upper;
console.log('LL:'+lowerLimit+'\tUL:'+upperLimit);

var wordsFromDB = wordsStore.getItems(lowerLimit,upperLimit);
var words;
function loadWordsFromServer(){

  $.ajax({
    url: 'http://localhost:8001/api/getWords',
    dataType: 'json',
    cache: false,
    success: function(data) {
      //this.setState({data: data});
      words = data;
      console.log('words: '+words.length);
      log('inside ajax success');
    }.bind(this),
    error: function(xhr, status, err) {
      console.error('/api/getWords', status, err.toString());
    }.bind(this)
  });

}

//call
loadWordsFromServer();



wordsStore.onChange(function(data){
    wordsFromDB = data;
    console.log("words from db (on change): "+wordsFromDB.length);
    console.log('inside onChange');
});


//ROUTES
var routes = (
    <Router history={hashHistory}>

      <Route path='/' component={Main_component}></Route>

      <Route path='/newGame' data={wordsFromDB} wordsLength={wordsFromDB.length} component={NewGame_component}/>
      <Route path='/oldScore' component={OldScore_component}/>

      <Route path='/howToPlay' component={HowToPlay_component}/>
    </Router>
);


module.exports = routes;
