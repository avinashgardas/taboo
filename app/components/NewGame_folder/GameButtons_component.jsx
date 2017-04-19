//libraries
var React = require('react');

var GameButtons_component = React.createClass({
  //function
  render:function(){
    return(
      <div>

      <div className="w3-row buttons-container">{/* container starts */}
        <div className="w3-quarter" >
          <button className="w3-btn w3-large correct" onClick={this.wrongButton}><span className="button_font">YeAH!</span></button>
        </div>

        <div className="w3-half" >
          <button className="w3-btn w3-large wrong" onClick={this.correctButton}><span className="button_font">taBoo</span></button>
        </div>

        <div className="w3-quarter" >
          <button className="w3-btn w3-large pass" onClick={this.passButton}><span className="button_font">PaSs</span></button>
        </div>
      </div>{/* container ends */}

      </div>
    );
  }
});

module.exports = GameButtons_component;
