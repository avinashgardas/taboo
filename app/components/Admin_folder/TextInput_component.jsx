var React = require('react');

module.exports = React.createClass({
  propTypes:{
    name: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string,
    error: React.PropTypes.string
  },

  render:function(){
    //logic for errors
    var wrapperClass= 'form-group';
    if(this.props.error && this.props.error.length>0){
        wrapperClass = wrapperClass+' has-error';
    }

    return(
      <div className={wrapperClass}>

        <div className="field">
          <input type="text"
          className="form-control word_font admin-addWords-form-textInput"
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
          ref={this.props.name}/>
          {/* error field*/}
          <div className="input error_font word_font">{this.props.error}</div>
        </div>

      </div>
    );
  }
});
