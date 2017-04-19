//libraries
var React = require('react');

module.exports = React.createClass({
  //function
  render:function(){
    return(
      <div>

      <div className={this.props.roundScoreVisibility}>{/* parent container */}


      {/* container */}
      <div className="word-container round-position">
      <div className="w3-row w3-card-4 round-card ">
        {/* summary 1 */}
          <h2 className="round_font summary_title title_white">Total Score</h2>

          <div className="score-card">
            <ul className="w3-ul s3-hoverable">
              {/* row 1*/}
              <div className="w3-row round-row-1-border">
                <div className="w3-col s6 title_white">
                  <li>Team A</li>
                </div>

                <div className="w3-col s6 round-row-1-col-2-border title_white">
                  <li>Team B</li>
                </div>
              </div>

            {/* row2 */}
              <div className="w3-row">
                <div className="w3-col s6 title_white">
                  <li>{this.props.teamA_score}</li>
                </div>

                <div className="w3-col s6 round-row-2-col-2-border title_white">
                  <li>{this.props.teamB_score}</li>
                </div>
              </div>

            </ul>
          </div>
        {/* summary 1*/}

        {/* summary 2*/}
          <h2 className="word_font summary_title title_white">Round {this.props.round}</h2>

          <div className="score-card">
            <ul className="w3-ul">
              {/* row1*/}
              <div className="w3-row round-row-1-border">
                <div className="w3-col s6 title_white">
                  <li>CoRREcT:</li>
                </div>

                <div className="w3-col s6 round-row-1-col-2-border title_white">
                  <li>{this.props.correct}</li>
                </div>
              </div>

            {/* row2*/}
              <div className="w3-row round-row-1-border title_white">
                <div className="w3-col s6">
                  <li>taBoO:</li>
                </div>

                <div className="w3-col s6 round-row-2-col-2-border title_white">
                  <li>{this.props.wrong}</li>
                </div>
              </div>

              {/* row2*/}
                <div className="w3-row round-row-1-border title_white">
                  <div className="w3-col s6">
                    <li>pasSs:</li>
                  </div>

                  <div className="w3-col s6 round-row-2-col-2-border title_white">
                    <li>{this.props.pass}</li>
                  </div>
                </div>

              {/* row3 */}
                <div className="w3-row">
                  <div className="w3-col s6 title_white">
                    <li>ToTAL PoiNTs:</li>
                  </div>

                  <div className="w3-col s6 round-row-2-col-2-border title_white">
                    <li>{this.props.totalScore}</li>
                  </div>
                </div>
            </ul>
          </div>
        {/* summary two */}


        </div>

      </div>{/* container */}

      {/* continue button */}
      <br/>
      <div className="word-container w3-center">
        <button className="w3-btn continue-button-props w3-padding-16 w3-border w3-round" onClick={this.props.nextRound}><span className="round_font button-font-size">CoNtiNUe</span></button>
      </div>

    </div>{/* parent container */}

   </div>
   );
  }
});
