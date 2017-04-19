//libraries
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var toastr = require('toastr');

//components
var NewGame_Header_component = require('./../MainMenu_folder/NewGame_Header_component.jsx');
var Words_component = require('./Words_component.jsx');
var TeamAndScore_component = require('./TeamAndScore_component.jsx');
var Time_component = require('./Time_component.jsx');
var RoundScore_component = require('./RoundScore_component.jsx');
var FinalScore_component = require('./FinalScore_component.jsx');

var tick_audio = new Audio('./../../raw/tick.mp3');
var wrong_audio = new Audio('./../../raw/pass.mp3');
var correct_audio = new Audio('./../../raw/continue.mp3');
var pass_audio = new Audio('./../../raw/wrong.mp3');
var continue_audio = new Audio('./../../raw/correct.mp3');
var cheer_audio = new Audio('./../../raw/cheer.mp3');
var woosh_audio = new Audio('./../../raw/woosh.mp3');

var NewGame_component = React.createClass({

//function - timer
timer:function(){
  var time = this.state.seconds;
  var wrong = this.state.wrong;
  var correct = this.state.correct;
  var pass = this.state.pass;

  var total = (correct * this.props.route.correctScore) - (wrong * this.props.route.wrongScore);
  var equation = "("+correct+"*"+this.props.route.correctScore+") - ("+wrong+"*"+this.props.route.wrongScore+")";
  var teamA_temp_score = this.state.teamA_score+total;//add present TOTAL to team-A, if presentPlayingTeam is 'team-A'
  var teamB_temp_score = this.state.teamB_score+total;//add present TOTAL to team-B, if presentPlayingTeam is 'team-B'
  var presentTotal = total;

  this.setState({
    presentTotal:presentTotal
  });

  //holding teamA and teamB score values
  if(this.state.presentPlayingTeam==="A"){
    this.setState({
      teamA_taboo:wrong,
      teamA_correct:correct,
      teamA_pass:pass
    });
  }
  else{
    if(this.state.presentPlayingTeam==="B"){
      this.setState({
        teamB_taboo:wrong,
        teamB_correct:correct,
        teamB_pass:pass
      })
    }
  }

  if(time>1){//OUTER-IF starts
    //play normal tick sound
    tick_audio.play();
    if(time<=5){
      //play intense tick sound (when time is < 5 seconds)
      woosh_audio.play();
    }
    else{

    }

    this.setState({
      seconds: this.state.seconds-1
    });
  }//OUTER-IF ends

  else{//OUTER-ELSE starts
    this.setState({
      seconds: 0,
      status: "Times up!"
    });

    clearInterval(this.interval);
    this.exitGame();
    //console.log('Times up!');

    this.setState({
      wordsVisibility: "hide",
      timeVisibility:"hide",
      teamAndScoreVisibility:"hide",
      buttonsVisibility:"hide",
      roundScoreVisibility:"show",
      totalScore: total,
      equation: equation,
      teamA_score: this.state.presentPlayingTeam === "A" ? teamA_temp_score : this.state.teamA_score,
      teamB_score: this.state.presentPlayingTeam === "B" ? teamB_temp_score : this.state.teamB_score
    });

    //checking which team is winner
    if(this.state.teamA_score >= this.props.route.maximumTarget){
      console.log('WINNER is A');
      this.setState({
        winner:"A",
        wordsVisibility: "hide",
        timeVisibility:"hide",
        teamAndScoreVisibility:"hide",
        buttonsVisibility:"hide"
      });
      //ADDING ROUND
      if(this.state.presentPlayingTeam==="A"){
        var roundObject = {
          round:this.state.round,
          team1:{correct:this.state.teamA_correct,taboo:this.state.teamA_taboo,pass:this.state.teamA_pass,total:this.state.teamA_score},
          team2:{correct:this.state.teamB_correct,taboo:this.state.teamB_taboo,pass:this.state.teamB_pass,total:this.state.teamB_score}
        }
        console.log(JSON.stringify(roundObject));
        //addRound
        this.addRound(roundObject);

        //UPDATE TEAMSCORES
        var teamScoresObject = {
          team1_score:this.state.teamA_score,
          team2_score:this.state.teamB_score
        }
        //update teamscores
        this.updateEachTeamScore(teamScoresObject);
      }
    }
    else if(this.state.teamB_score >= this.props.route.maximumTarget){
      console.log('WINNER is B');
      this.setState({
        winner:"B",
        wordsVisibility: "hide",
        timeVisibility:"hide",
        teamAndScoreVisibility:"hide",
        buttonsVisibility:"hide"
      });
      //ADDING ROUND
      if(this.state.presentPlayingTeam==="B"){
        var roundObject = {
          round:this.state.round,
          team1:{correct:this.state.teamA_correct,taboo:this.state.teamA_taboo,pass:this.state.teamA_pass,total:this.state.teamA_score},
          team2:{correct:this.state.teamB_correct,taboo:this.state.teamB_taboo,pass:this.state.teamB_pass,total:this.state.teamB_score}
        }
        console.log(JSON.stringify(roundObject));
        //addRound
        this.addRound(roundObject);

        //UPDATE TEAMSCORES
        var teamScoresObject = {
          team1_score:this.state.teamA_score,
          team2_score:this.state.teamB_score
        }
        //update teamscores
        this.updateEachTeamScore(teamScoresObject);
      }
    }

  }//OUTER-ELSE ends
},

//function - gameLogic
gameLogic:function(){
    var random = Math.floor(Math.random()*(this.props.route.wordsLength));
    this.setState({
      number:random
    });

    // random word logic
    var checkArrayClone = this.state.checkArray.slice();
    var count = this.state.count;
    var index = random;

      if(checkArrayClone[index]===true){
        this.gameLogic();
      }
      else {
        if(index !== -1){
          checkArrayClone[index]=true;
          //increment count && reference duplicate array to original array
          this.setState({checkArray:checkArrayClone,count:this.state.count+1});
        }
      }
  },

  //function nextRound
  nextRound:function(){
    //playsound
    continue_audio.play();

    //check for winner
    if(this.state.winner==="A" || this.state.winner==="B"){
      this.setState({
        roundScoreVisibility:"hide",
        finalScoreVisibility:"show"
      });

    }
    else{
      var random = Math.floor(Math.random()*(this.props.route.wordsLength));
      this.setState({
        number:random,
        checkArray:[],
        count:0,
        wrong:0,
        correct:0,
        pass:this.props.route.passNumber,
        seconds:this.props.route.timeLimit,
        correctScore:this.props.route.correctScore,
        wrongScore:this.props.route.wrongScore,
        maximumTarget:this.props.route.maximumTarget,
        passNumber:this.props.route.passNumber,
        wrong_button_type:"w3-btn w3-large w3-disabled wrong",
        correct_button_type:"w3-btn w3-large w3-disabled correct",
        pass_button_type:"w3-btn w3-large w3-disabled pass",
        status: "Status",
        wordsVisibility: "show",
        timeVisibility:"show",
        teamAndScoreVisibility:"show",
        buttonsVisibility:"show",
        roundScoreVisibility:"hide",
        finalScoreVisibility:"hide",
        totalScore: 0,
        presentTotal: 0,
        equation: " ",
        teamA_score:this.state.teamA_score,
        teamB_score:this.state.teamB_score,
        round: this.state.presentPlayingTeam === "B" ? this.state.round+1 : this.state.round,
        presentPlayingTeam:this.state.presentPlayingTeam,
        presentPlayingTeam: this.state.presentPlayingTeam === "A" ? "B" : "A",
        teamA_status_indicator: this.state.presentPlayingTeam === "B" ? "fa fa-circle teamA-status-on" : "",
        teamB_status_indicator: this.state.presentPlayingTeam === "A" ? "fa fa-circle teamB-status-on" : "",
        winner: "empty"
      });
      //add round
      if(this.state.presentPlayingTeam==="B"){
        console.log('ADDING ROUND JSON');
        var roundObject = {
          round:this.state.round,
          team1:{correct:this.state.teamA_correct,taboo:this.state.teamA_taboo,pass:this.state.teamA_pass,total:this.state.teamA_score},
          team2:{correct:this.state.teamB_correct,taboo:this.state.teamB_taboo,pass:this.state.teamB_pass,total:this.state.teamB_score}
        }
        console.log(JSON.stringify(roundObject));
        //addRound
        this.addRound(roundObject);

        //UPDATE TEAMSCORES
        var teamScoresObject = {
          team1_score:this.state.teamA_score,
          team2_score:this.state.teamB_score
        }
        //update teamscores
        this.updateEachTeamScore(teamScoresObject);
      }

      //call start Game
      this.startGame();
    }

  },

//function startGame
startGame:function(){
    //set these things - enable other buttons & disable startButton
    this.setState(
      {
        wrong_button_type:"w3-btn w3-large wrong",
        correct_button_type:"w3-btn w3-large correct",
        pass_button_type:"w3-btn w3-large pass",
        roundScoreVisibility:"hide",
        finalScoreVisibility:"hide"
      }
    );
    //start gameLogic
    this.gameLogic();
    //start timer
    this.interval = setInterval(this.timer,1000); //call timer method every 1 second
},

//function exitGame
exitGame:function(){
    //disable all buttons (wrong,taboo,correct)
    this.setState({
      wrong_button_type:"w3-btn w3-large w3-disabled wrong",
      correct_button_type:"w3-btn w3-large w3-disabled correct",
      pass_button_type:"w3-btn w3-large w3-disabled pass"
    });
},

//function getInitialState
getInitialState:function(){
    //get random number
    var random = Math.floor(Math.random()*(this.props.route.wordsLength));
    return {
      number: random,
      checkArray:[],
      count:0,
      wrong:0,
      correct:0,
      pass:this.props.route.passNumber,
      passCount:0,
      wrong_button_type:"w3-btn w3-large w3-disabled wrong",
      correct_button_type:"w3-btn w3-large w3-disabled correct",
      pass_button_type:"w3-btn w3-large w3-disabled pass",
      seconds:this.props.route.timeLimit,
      correctScore:this.props.route.correctScore,
      wrongScore:this.props.route.wrongScore,
      maximumTarget:this.props.route.maximumTarget,
      passNumber:this.props.route.passNumber,
      wordsVisibility: "show",
      timeVisibility:"show",
      teamAndScoreVisibility:"show",
      buttonsVisibility:"show",
      roundScoreVisibility:"hide",
      finalScoreVisibility:"hide",
      totalScore:0,
      presentTotal: 0,
      equation: " ",
      teamA_score:0,
      teamB_score:0,
      round:1,
      presentPlayingTeam:"A",
      teamA_status_indicator:"fa fa-circle teamA-status-on",
      teamB_status_indicator:"",
      winnner:"empty",
      nextGameId: this.props.route.nextGameId+1,
      teamA_taboo:0,
      teamA_correct:0,
      teamA_pass:0,
      teamB_taboo:0,
      teamB_correct:0,
      teamB_pass:0,
    }
  },

//function addGame
addGame:function(){
   //create game object
    var gameObject = {
      gameId:this.state.nextGameId,
      team1_score:0,
      team2_score:0,
      rounds:[]
    }
  //ajax request to call API - /api/addGame
    $.ajax(
      {
        url: 'http://localhost:8001/api/addGame',
        type: "POST",
        data: JSON.stringify(gameObject),
        contentType: "application/json",
        success: function(data){
            console.log('successfully added new game',data);
          }.bind(this),
        error: function(xhr, status, err){
            console.log("error posting game");
        }.bind(this)
      }
    );
    //call actions
    //actions.addGame(gameObject);
  },

  //function addRound
  addRound:function(roundObject){
    //ajax request to call API - '/api/addRound/:gameId'
    var url='http://localhost:8001/api/addRound/';
    var param = String(this.state.nextGameId);
      $.ajax(
        {
          url: 'http://localhost:8001/api/addRound/'+param,
          type: "PUT",
          data: JSON.stringify(roundObject),
          contentType: "application/json",
          success: function(data){
              console.log('successfully added Round: '+this.state.round,data);
            }.bind(this),
          error: function(xhr, status, err){
              console.log("error adding round");
          }.bind(this)
        }
      );
      //call actions
      //actions.addGame(gameObject);
    },

    //function
    updateEachTeamScore:function(teamScoresObject){
      //ajax request to call API - '/api/updateEachTeamScore/:gameId'
      var url='http://localhost:8001/api/updateEachTeamScore/';
      var param = String(this.state.nextGameId);
      $.ajax(
        {
          url: 'http://localhost:8001/api/updateEachTeamScore/'+param,
          type: "PUT",
          data: JSON.stringify(teamScoresObject),
          contentType: "application/json",
          success: function(data){
              console.log('successfully updated team scores: ',data);
            }.bind(this),
          error: function(xhr, status, err){
              console.log("error updating team scores");
          }.bind(this)
        }
      );
    },

//function componentWillMount
componentWillMount:function(){
  console.log('inside componentWillMount');
  //call addGame to add gameJson to db collection
  this.addGame();
  //toast 'Game Started'
  toastr.success('Keep calm & Enjoy the game!');
  //start game
  this.startGame();
  },

//function wrongButton
wrongButton:function(){


    var count = this.state.count;
    var seconds = this.state.seconds;

    //if button is not disabled, then only run GAMELOGIC && increment WRONG_SCORE
    if(this.state.wrong_button_type === "w3-btn w3-large wrong" && seconds > 1 && count<this.props.route.wordsLength){
      //playsound
      wrong_audio.play();
      this.gameLogic();
      //wrong score
      this.setState({wrong:this.state.wrong+1});
    }
    else{
      if(count === this.props.wordsLength){//out of words
        //disable button
        this.setState({
          wrong_button_type:"w3-btn w3-large w3-disabled wrong",
          correct_button_type:"w3-btn w3-large w3-disabled wrong",
          taboo_button_type:"w3-btn w3-large w3-disabled taboo",
          pass_button_type:"w3-btn w3-large w3-disabled pass",
          status: "No more words!"
        });
      }//inner-if
    }

  },

//function correctButton
correctButton:function(){


    var count = this.state.count;
    var seconds = this.state.seconds;

    //if button is not disabled, then only run GAMELOGIC && increment WRONG_SCORE
    if(this.state.correct_button_type === "w3-btn w3-large correct" && seconds > 1 && count<this.props.route.wordsLength){
      //playsound
      correct_audio.play();
      this.gameLogic();
      //correct score
      this.setState({correct:this.state.correct+1});
    }
    else{
      if(count===this.props.wordsLength){//out of words
        //disable button
        this.setState({
          correct_button_type:"w3-btn w3-large w3-disabled correct",
          wrong_button_type:"w3-btn w3-large w3-disabled wrong",
          taboo_button_type:"w3-btn w3-large w3-disabled taboo",
          pass_button_type:"w3-btn w3-large w3-disabled pass",
          status: "Out of words!"
        });
      }//inner-if
    }

  },

//function passButton
passButton:function(){


    var count = this.state.count;
    var seconds = this.state.seconds;

    if(this.state.pass_button_type === "w3-btn w3-large pass" && this.state.pass > 0 && seconds > 1 && count<this.props.route.wordsLength){
      //playsound
      pass_audio.play();
      this.setState({pass:this.state.pass-1});
      this.gameLogic();
      //passCount
      if(this.state.passCount<3){
        this.setState({passCount:this.state.passCount+1})
      }
    }
    else{
      this.setState({pass_button_type:"w3-btn w3-large w3-disabled pass"})
    }
  },

//function clearTimer
clearTimer:function(){
    clearInterval(this.interval);
  },

//function toastrOptions
toastrOptions:function(){
          toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "2500",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
  },

//function render
render:function(){
  //console.log('wordIndex: '+this.state.number);
    return(
      <div>


          <NewGame_Header_component data={'Taboo'} clearTimer={this.clearTimer}/>


        <div className="word-container">{/*wordcontainer starts */}

          {/*time*/}
          <Time_component time={this.state.seconds} timeVisibility={this.state.timeVisibility}/>

          {/*team & score*/}
          <TeamAndScore_component teamAndScoreVisibility={this.state.teamAndScoreVisibility} presentTotal={this.state.presentTotal} presentPlayingTeam={this.state.presentPlayingTeam}/>

          {/*words*/}
          <Words_component wordData={this.props.route.data} wordIndex={this.state.number} wordsVisibility={this.state.wordsVisibility}/>

          {/*buttons start*/}
          <div className={this.state.buttonsVisibility}>
            <div className="w3-row buttons-container">{/*container*/}
              <div className="w3-quarter" >
              <button className={this.state.correct_button_type} onClick={this.correctButton}><span className="button_font">YeAH!</span></button>
              </div>

              <div className="w3-half" >
                <button className={this.state.wrong_button_type} onClick={this.wrongButton}><span className="button_font">taBoo</span></button>
              </div>

              <div className="w3-quarter" >
                <button className={this.state.pass_button_type} onClick={this.passButton}><span className="button_font">PaSs { (this.state.pass === 0) ? "": this.state.pass }</span></button>
              </div>
            </div>{/*container*/}
          </div>
          {/* buttons end*/}

        </div> {/* wordconatiner ends */}

        {/* Round score */}
        <div className="round-container">
          <RoundScore_component roundScoreVisibility={this.state.roundScoreVisibility} nextRound={this.nextRound} teamA_score={this.state.teamA_score} teamB_score={this.state.teamB_score} correct={this.state.correct} wrong={this.state.wrong} pass={this.state.passCount} totalScore={this.state.totalScore} round={this.state.round}/>
        </div>

        {/* Final score */}
        <div className="final-container">
          <FinalScore_component finalScoreVisibility={this.state.finalScoreVisibility} winner={this.state.winner} teamA_score={this.state.teamA_score} teamB_score={this.state.teamB_score} round={this.state.round}/>
        </div>

      </div>
    )
  },

//function componentDidMount
componentDidMount:function(){
    console.log('inside componentDidMount');
    this.toastrOptions();
  }
});

module.exports = NewGame_component;
