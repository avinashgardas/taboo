//libraries
var React = require('react');

var cheer_audio = new Audio('./../../raw/cheer.mp3');

module.exports = React.createClass({
/*
  //function
  getGames:function(){
    $.ajax(
      {
        url: 'http://localhost:8001/api/getGames',
        dataType: 'json',
        success: function(data) {
              console.log(data);
              this.setState({gameData:data});
           }.bind(this),
        error: function(xhr, status, err) {
              console.log("error getting games");
            }.bind(this)
      }
    );
  },*/

  /*displayTeamScores: function() {
    var rounds = this.state.gameData && this.state.gameData[this.props.gameIndex];
    var list = [];
    if (rounds && rounds.length) {
      console.log('TRUE');
      console.log('data.round: '+rounds[0].data.round);
      rounds.map(function(data,index){
        {
          list.push((

              <ul className="w3-ul">
                <li className="final-row-2-col-0-border">
                  {data.round}
                </li>

                <li className="final-row-2-col-1-border">
                  <li>{data.team1.total}</li>
                </li>

                <li className="final-row-2-col-2-border">
                  <li>{data.team2.total}</li>
                </li>
              </ul>


          ));
        }
      })
    }else{
      console.log('false');
    }
    return list;
  },*/

  //function
  getInitialState:function(){
    return{
      gameData:[]
    }
  },

  //function
  componentWillMount:function(){

    },

  //function
  componentDidMount:function(){

    },

  //function
  render:function(){
    if(this.props.finalScoreVisibility==="show"){
      cheer_audio.play();
    }

    return(
      <div>

        <div className={this.props.finalScoreVisibility}>{/* container starts */}
          <div className="final-winner">
            <h1 className="final_font final_summary_title">WiNNer</h1>
            <i className="fa fa-trophy fa-5x"></i>
            <h1 className="final_font final_summary_title">Team {this.props.winner}</h1>
          </div>

          <div className="w3-row w3-card-4 final-card">{/* card starts */}
            <div className="final-score-card">
              <ul className="w3-ul">{/* ul start*/}

                <div className="w3-row final-row-1-border">{/* row 1 */}
                  <div className="w3-col s4">
                    <li>Rounds</li>
                  </div>

                  <div className="w3-col s4 final-row-1-col-1-border">
                    <li>Team A</li>
                  </div>

                  <div className="w3-col s4 final-row-1-col-2-border">
                    <li>Team B</li>
                  </div>
                </div>{/* row 1 ends*/}

                <div className="w3-row final-row-1-border">{/* row 2 */}
                  <div className="w3-col s4">
                    <li>{this.props.round}</li>
                  </div>

                  <div className="w3-col s4 final-row-1-col-1-border">
                    <li>{this.props.teamA_score}</li>
                  </div>

                  <div className="w3-col s4 final-row-1-col-2-border">
                    <li>{this.props.teamB_score}</li>
                  </div>
                </div>{/* row 2 ends*/}




              </ul>{/* ul ends*/}
            </div>
          </div>{/* card ends*/}

        </div>{/* container starts */}

      </div>
    );
  }

});
