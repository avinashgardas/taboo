var React = require('react');
var toastr = require('toastr');

var WordForm_component = require('./WordForm_component.jsx');
var Admin_Header_component = require('./../MainMenu_folder/Admin_Header_component.jsx');
var actions = require('./../../stores/WordsStore.jsx');

module.exports = React.createClass({

  getInitialState:function(){
    return{
      wordObject:{word:'',prohibitedWord1:'',prohibitedWord2:'',prohibitedWord3:'',prohibitedWord4:'',prohibitedWord5:''},
      errors:{},
      nextWordId:this.props.route.nextWordId
    }
  },

  setWordsState: function(event){

    var field = event.target.name;
    var value = event.target.value;
    this.state.wordObject[field] = value;
    this.setState({
      wordObject:this.state.wordObject
    });
    //console.log('wordObject: '+JSON.stringify(this.state.wordObject));

    return {wordObject:this.state.wordObject};
  },

  wordFormIsValid:function(){
    var formIsValid = true;
    this.state.errors = {}; //clear any previous errors

    if(this.state.wordObject.word.length < 1){
      //console.log('word length: '+this.state.wordObject.word.length);
      this.state.errors.word = 'Word can\'t be empty';
      formIsValid=false;
    }

    if(this.state.wordObject.prohibitedWord1.length < 1){
      //console.log('empty prohibited word');
      this.state.errors.prohibitedWord1 = 'This field can\'t be empty';
      formIsValid=false;
    }

    if(this.state.wordObject.prohibitedWord2.length < 1){
      //console.log('empty prohibited word');
      this.state.errors.prohibitedWord2 = 'This field can\'t be empty';
      formIsValid=false;
    }

    if(this.state.wordObject.prohibitedWord3.length < 1){
      //console.log('empty prohibited word');
      this.state.errors.prohibitedWord3 = 'This field can\'t be empty';
      formIsValid=false;
    }

    if(this.state.wordObject.prohibitedWord4.length < 1){
      //console.log('empty prohibited word');
      this.state.errors.prohibitedWord4 = 'This field can\'t be empty';
      formIsValid=false;
    }

    if(this.state.wordObject.prohibitedWord5.length < 1){
      //console.log('empty prohibited word');
      this.state.errors.prohibitedWord5 = 'This field can\'t be empty';
      formIsValid=false;
    }

    this.setState({
      errors:this.state.errors
    });
    console.log('errorsObject: '+JSON.stringify(this.state.errors));
    return formIsValid;
  },

  saveWords: function(event){
    event.preventDefault();

    if(this.wordFormIsValid()){
      //save
      toastr.success('Word Saved');
      console.log('word JSON: '+JSON.stringify(this.state.wordObject));
      //create prohibitedWords array
      var prohibitedWordsArray = new Array();
      prohibitedWordsArray.push(this.state.wordObject.prohibitedWord1);
      prohibitedWordsArray.push(this.state.wordObject.prohibitedWord2);
      prohibitedWordsArray.push(this.state.wordObject.prohibitedWord3);
      prohibitedWordsArray.push(this.state.wordObject.prohibitedWord4);
      prohibitedWordsArray.push(this.state.wordObject.prohibitedWord5);

      var wordJSON = {
        word: this.state.wordObject.word,
        id: this.state.nextWordId+1,
        prohibited:prohibitedWordsArray
      };
      console.log('JSON: '+JSON.stringify(wordJSON));
      //addGame action`
      actions.addWord(wordJSON);
    }
    else{
      //error
      toastr.error('Something went wrong!');
    }
  },

  toastrOptions:function(){
          toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "2500",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
  },

  render:function(){
    return(
      <div>

      {/* Header component*/}
      <Admin_Header_component data={'Taboo Admin'}/>
      <br/>

      {/* Form component */}
        <WordForm_component
        word={this.state.wordObject}
        onChange={this.setWordsState}
        onSave={this.saveWords}
        errors={this.state.errors}/>


      </div>
    );
  },

  componentDidMount:function(){
    this.toastrOptions();
    //get last word's id
    console.log('Admin_addWords/nextWordId: '+this.props.route.nextWordId);
  }

});
