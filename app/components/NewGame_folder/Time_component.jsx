var React = require('react');




var Time_component = React.createClass({

    render:function(){
      return(
        <div>

        <div className={this.props.timeVisibility}>
          <div className="w3-row">
            <div className="w3-col s12 w3-center">
              <h1 className="word_time title_white word_font">{this.props.time}</h1>
            </div>
          </div>
        </div>

        </div>
      );
    }
});

module.exports = Time_component;
