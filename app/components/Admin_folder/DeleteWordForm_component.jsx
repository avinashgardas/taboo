var React = require('react');

var  TextInput = require('./TextInput_component.jsx');

module.exports = React.createClass({

  render:function(){
    return(
      <div className="word-container w3-card-4 w3-white addWords-container">
        <div className="w3-container w3-center admin-addWords-form-header">
          <h2 className="word_font">DeLeTe a WoRd by NaMe</h2>
        </div>
        <br/>
        <form className="admin-addWords-form">
          <TextInput
          name="word"
          placeholder="Type word"
          value={this.props.word.word}
          onChange={this.props.onChange}
          error={this.props.errors.word}/>

          <div className="w3-row w3-center">
            <input type="submit"
            value="DeLeTe"
            className="btn btn-default btn-lg word_font"
            onClick={this.props.onDelete}
            />
          </div>
        </form>
      </div>
    );
  }
});
