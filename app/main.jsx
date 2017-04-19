//libraries
var $ = require('jquery');
var ReactDOM = require('react-dom');
var React = require('react');
var ReactRouter = require('react-router');


//components
var Main_component = require('./components/Main_component.jsx');
var NewGame_component = require('./components/NewGame_folder/NewGame_component.jsx');
var Settings_component = require('./components/Settings_folder/Settings_component.jsx');
var HowToPlay_component = require('./components/HowToPlay_folder/HowToPlay_component.jsx');
var OldScores_component = require('./components/OldScore_folder/OldScores_component.jsx');
var Admin_Home_component = require('./components/Admin_folder/Admin_Home_component.jsx');
var Admin_addWords_component = require('./components/Admin_folder/Admin_addWords_component.jsx');
var Admin_viewWords_component = require('./components/Admin_folder/Admin_viewWords_component.jsx');
var Admin_deleteWord_component = require('./components/Admin_folder/Admin_deleteWord_component.jsx');
//store
var wordsStore = require('./stores/WordsStore.jsx');

//init
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var DefaultRoute = ReactRouter.DefaultRoute;
var NotFoundRoute = ReactRouter.NotFoundRoute;
var Redirect = Router.Redirect;
//init settings
var settings_maximumTime = Number(localStorage.getItem("maximum_time") );
var settings_correctScore = Number(localStorage.getItem("correct_points") );
var settings_wrongScore = Number(localStorage.getItem("taboo_points") );
var settings_passNumber = Number(localStorage.getItem("pass_number") );
var settings_maximumTarget = Number(localStorage.getItem("maximum_target") );
//declarations
var wordsRange = {lower:0,upper:1001};
var min=0, games, nextGameId, nextWordId, length;
var max=wordsRange.upper;

var wordsFromDB = wordsStore.getItems(min,max);
getGames();

wordsStore.onChange(function(data){
    console.log('calling getGames');
    getGames();

    wordsFromDB = data;
    console.log("words from db (on change): "+wordsFromDB.length);
    console.log('inside words onChange');

    nextWordId = wordsFromDB[wordsFromDB.length-1].id;
    console.log('nextWordId: '+nextWordId);

    render(true);
});

//render();
function render(booleanFlag){
  if(booleanFlag===true){
    ReactDOM.render(
      <Router history={hashHistory}>
        <Route path='/' component={Main_component}></Route>
        <Route path='/newGame' component={NewGame_component} data={wordsFromDB} wordsLength={wordsFromDB.length} timeLimit={settings_maximumTime} correctScore={settings_correctScore} wrongScore={settings_wrongScore} passNumber={settings_passNumber} maximumTarget={settings_maximumTarget} nextGameId={games.length}/>
        <Route path='/oldScore' component={OldScores_component} />
        <Route path='/howToPlay' component={HowToPlay_component}/>
        <Route path='/admin' component={Admin_Home_component}/>
        <Route path='/admin_addWords' component={Admin_addWords_component} nextWordId={nextWordId}/>
        <Route path='/admin_viewWords' component={Admin_viewWords_component} data={wordsFromDB} wordsLength={wordsFromDB.length}/>
        <Route path='/admin_deleteWords' component={Admin_deleteWord_component}/>
      </Router>,document.getElementById('app'));
  }
}

function getGames(){
  $.ajax(
    {
      url: 'http://localhost:8001/api/getGames',
      dataType: 'json',
      success: function(data) {
            //console.log(data);
            games=data;
         },
      error: function(xhr, status, err) {
            console.log("error getting games");
          }
    }
  );
}
