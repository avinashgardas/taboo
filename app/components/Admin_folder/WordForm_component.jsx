var React = require('react');

var  TextInput = require('./TextInput_component.jsx');

module.exports = React.createClass({

  render:function(){
    return(
      <div className="word-container w3-card-4 w3-white addWords-container">
        <div className="w3-container w3-center admin-addWords-form-header">
          <h2 className="word_font">Add a WoRd</h2>
        </div>
        <br/>
        <form className="admin-addWords-form">
          <TextInput
          name="word"
          placeholder="Type word"
          value={this.props.word.word}
          onChange={this.props.onChange}
          error={this.props.errors.word}/>

          <TextInput
          name="prohibitedWord1"
          placeholder="Type taboo word"
          value={this.props.word.prohibitedWord1}
          onChange={this.props.onChange}
          error={this.props.errors.prohibitedWord1}/>

          <TextInput
          name="prohibitedWord2"
          placeholder="Type taboo word"
          value={this.props.word.prohibitedWord2}
          onChange={this.props.onChange}
          error={this.props.errors.prohibitedWord3}/>

          <TextInput
          name="prohibitedWord3"
          placeholder="Type taboo word"
          value={this.props.word.prohibitedWord3}
          onChange={this.props.onChange}
          error={this.props.errors.prohibitedWord3}/>

          <TextInput
          name="prohibitedWord4"
          placeholder="Type taboo word"
          value={this.props.word.prohibitedWord4}
          onChange={this.props.onChange}
          error={this.props.errors.prohibitedWord4}/>

          <TextInput
          name="prohibitedWord5"
          placeholder="Type taboo word"
          value={this.props.word.prohibitedWord5}
          onChange={this.props.onChange}
          error={this.props.errors.prohibitedWord5}/>

          <div className="w3-row w3-center">
            <input type="submit"
            value="Save"
            className="btn btn-default btn-lg word_font"
            onClick={this.props.onSave}
            />
          </div>
        </form>
      </div>
    );
  }
});
