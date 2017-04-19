//libraries
var React = require('react');

var TeamAndScore_component = React.createClass({
    //function
    render:function(){
      return(
        <div>

          <div className={this.props.teamAndScoreVisibility}>{/* container */}
          <div className="w3-row">
            <div className="w3-col s6 w3-center">
              <h1 className="word_present_team title_white word_font">Team: {this.props.presentPlayingTeam}</h1>
            </div>

            <div className="w3-col s6 w3-center">
              <h1 className="word_score title_white word_font">ScoRe: {this.props.presentTotal}</h1>
            </div>
          </div>
          </div>{/* container */}

        </div>
      );
    }
});

module.exports = TeamAndScore_component;
