//libraries
var React = require('react');

module.exports = React.createClass({
  //function
  componentWillMount: function() {
    console.log('all results ' + JSON.stringify(this.props.games));
  },

  //function
  componentDidMount: function() {
    console.log('all results ' + JSON.stringify(this.props.games));
  },

  //function
  render: function() {
    return (
      <div>

        <div className="old-container">{/* parent container */}
          <div className="old-winner">
            <i className="fa fa-trophy fa-5x"></i>
            <h1 className="old_font old_summary_title ">ALL ReSuLts</h1>
          </div>

          <div className="w3-row w3-card-4 old-card ">{/* score card */}
            <div className="old-card-props">
              <div className="w3-center"><h3 className="word_font scores_title">ScORes</h3></div>
              {
                this.props.games.map(function(data, i){
                {
                  return(
                    <ul className="w3-ul old-li-row" key={i}>
                      <li >
                        <span className="old-li-row-span1">Team A</span>
                        <span className="old-li-row-span2">{data.team1_score}</span>
                        <span className="old-li-row-span3">{data.team2_score}</span>
                        <span className="old-li-row-span4">Team B</span>
                      </li>
                    </ul>
                  )
                }
              })
            }
          </div>
        </div>{/* score card */}

      </div>{/* parent container */}

    </div>
  );
}
});
