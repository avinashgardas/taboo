//libraries
var React = require('react');

var Header_component = React.createClass({
  render:function(){
    return(
      <div>

      <div className="w3-row">
        <div className="w3-col s12">
        <div className="taboo_header_container">
          <h1 className="taboo_header">{this.props.data}</h1>
        </div>
        </div>
      </div>

      </div>
    );
  }
});

module.exports = Header_component;
