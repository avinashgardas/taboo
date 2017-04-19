//libraries
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Other_Header_component = React.createClass({

  render:function(){
    return(
      <div>

      <div className="newGame_header_container">
        <div className="" >
          <div className="w3-col s4" >
            <Link className="link" to="/admin">
              <a><i className="fa fa-arrow-left fa-2x position-vertical-center back-button" onClick={this.props.clearTimer}></i></a>
            </Link>
          </div>
          <div className="w3-col s4">
            <h1 className="newGame_header_title">{this.props.data}</h1>
          </div>
          <div className="w3-col s4">
            <a><span className="hide">hidden</span></a>
          </div>
        </div>
        </div>

        </div>
    );
  }
});

module.exports = Other_Header_component;
