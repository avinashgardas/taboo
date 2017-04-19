//libraries
var $ = require('jquery');
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

//comonents
var Header_component = require('./../MainMenu_folder/Other_Header_component.jsx');
var AllResults_component = require('./AllResults_component.jsx');

var OldScores_component = React.createClass({
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
  },

  //function
  getInitialState:function(){
    return {
      gameData:[]
    }
  },

  //function
  componentWillMount:function(){
    this.getGames();
  },

  //function
  componentDidMount:function(){

  },

  //function
  render:function(){
      console.log(this.state.gameData);

      return(
        <div>

            <Header_component data={'Taboo'}/>
          
          {/* All Results component*/}
          <AllResults_component games={this.state.gameData}/>
        </div>
      );
    }
});

module.exports = OldScores_component;
