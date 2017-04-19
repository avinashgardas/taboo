var React = require('react');
var toastr = require('toastr');

var DeleteWordForm_component = require('./DeleteWordForm_component.jsx');
var DeleteWordByIdForm_component = require('./DeleteWordByIdForm_component.jsx');
var Admin_Header_component = require('./../MainMenu_folder/Admin_Header_component.jsx');
var actions = require('./../../stores/WordsStore.jsx');

module.exports = React.createClass({
  getInitialState:function(){
    return{
      wordObject:{word:''},
      wordObject2:{word:''},
      errors:{},
      errors2:{}
    }
  },

  setWordsState: function(event){
    var field = event.target.name;
    var value = event.target.value;
    this.state.wordObject[field] = value;
    this.setState({
      wordObject:this.state.wordObject
    });
    console.log('wordObject: '+JSON.stringify(this.state.wordObject));

    return {wordObject:this.state.wordObject};
  },

  setWordsStateForDeleteWordById: function(event){
    var field = event.target.name;
    var value = event.target.value;
    this.state.wordObject2[field] = value;
    this.setState({
      wordObject2:this.state.wordObject2
    });
    console.log('wordObject2: '+JSON.stringify(this.state.wordObject2));

    return {wordObject2:this.state.wordObject2};
  },

  wordFormIsValid:function(){
    var formIsValid = true;
    this.state.errors = {}; //clear any previous errors

    if(this.state.wordObject.word.length < 1){
      //console.log('word length: '+this.state.wordObject.word.length);
      this.state.errors.word = 'Word can\'t be empty';
      formIsValid=false;
    }
    return formIsValid;
  },

  wordFormIsValidForDeleteWordById:function(){
    var formIsValid = true;
    this.state.errors2 = {}; //clear any previous errors

    if(this.state.wordObject2.word.length < 1){
      //console.log('word length: '+this.state.wordObject.word.length);
      this.state.errors2.word = 'Word can\'t be empty';
      formIsValid=false;
    }
    return formIsValid;
  },

  deleteWord: function(event){
    event.preventDefault();

    if(this.wordFormIsValid()){
      //actions deleteWord
      actions.deleteWord(this.state.wordObject.word);
      //save
      toastr.success('Word Deleted!');
    }
    else{
      toastr.error('Error Deleting!');
    }
  },

  deleteWordById: function(event){
    event.preventDefault();

    if(this.wordFormIsValidForDeleteWordById()){
      //actions deleteWord
      actions.deleteWordById(this.state.wordObject2.word);
      //save
      toastr.success('Word Deleted!');
    }
    else{
      toastr.error('Error Deleting!');
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
      <br/><br/>

      {/* Form component */}
        <DeleteWordForm_component
        word={this.state.wordObject}
        onChange={this.setWordsState}
        onDelete={this.deleteWord}
        errors={this.state.errors}/>

        <br/>

        <DeleteWordByIdForm_component
        word={this.state.wordObject2}
        onChange={this.setWordsStateForDeleteWordById}
        onDelete={this.deleteWordById}
        errors={this.state.errors2}/>

      </div>
    );
  },

  componentDidMount:function(){
    this.toastrOptions();
  }

});
