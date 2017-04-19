var React = require('react');
var Draggable = require('react-draggable');

var Admin_Header_component = require('./../MainMenu_folder/Admin_Header_component.jsx');

var button1 = "button1";
var button2 = "button2";
var button3 = "button3";
var button4 = "button4";
var button5 = "button5";
var button6 = "button6";
var button7 = "button7";
var button8 = "button8";
var button9 = "button9";
var button10 = "button10";
var button11 = "button11";

module.exports = React.createClass({

  getInitialState:function(){
    return{
      wordsData: this.props.route.data,
      min:0,
      max:100,
      button1Style: "btn btn-primary",
      button2Style: "btn btn-default",
      button3Style: "btn btn-default",
      button4Style: "btn btn-default",
      button5Style: "btn btn-default",
      button6Style: "btn btn-default",
      button7Style: "btn btn-default",
      button8Style: "btn btn-default",
      button9Style: "btn btn-default",
      button10Style: "btn btn-default",
      button11Style: "btn btn-default",
    }
  },

  deleteWord:function(){
    console.log('inside deleteWord');
    alert("delete function called");
  },

  buttonFunction:function(value){
    switch(value){
      case "button1": this.setState({
                        min:0,
                        max:100,
                        button1Style: "btn btn-primary",
                        button2Style: "btn btn-default",
                        button3Style: "btn btn-default",
                        button4Style: "btn btn-default",
                        button5Style: "btn btn-default",
                        button6Style: "btn btn-default",
                        button7Style: "btn btn-default",
                        button8Style: "btn btn-default",
                        button9Style: "btn btn-default",
                        button10Style: "btn btn-default",
                        button11Style: "btn btn-default",
                      });
                      break;

      case "button2": this.setState({
                        min:101,
                        max:200,
                        button1Style: "btn btn-default",
                        button2Style: "btn btn-primary",
                        button3Style: "btn btn-default",
                        button4Style: "btn btn-default",
                        button5Style: "btn btn-default",
                        button6Style: "btn btn-default",
                        button7Style: "btn btn-default",
                        button8Style: "btn btn-default",
                        button9Style: "btn btn-default",
                        button10Style: "btn btn-default",
                        button11Style: "btn btn-default",
                      });
                      break;

      case "button3":   this.setState({
                        min:201,
                        max:300,
                        button1Style: "btn btn-default",
                        button3Style: "btn btn-primary",
                        button2Style: "btn btn-default",
                        button4Style: "btn btn-default",
                        button5Style: "btn btn-default",
                        button6Style: "btn btn-default",
                        button7Style: "btn btn-default",
                        button8Style: "btn btn-default",
                        button9Style: "btn btn-default",
                        button10Style: "btn btn-default",
                        button11Style: "btn btn-default",
                      });
                      break;

        case "button4":   this.setState({
                          min:301,
                          max:400,
                          button1Style: "btn btn-default",
                          button4Style: "btn btn-primary",
                          button3Style: "btn btn-default",
                          button2Style: "btn btn-default",
                          button5Style: "btn btn-default",
                          button6Style: "btn btn-default",
                          button7Style: "btn btn-default",
                          button8Style: "btn btn-default",
                          button9Style: "btn btn-default",
                          button10Style: "btn btn-default",
                          button11Style: "btn btn-default",
                        });
                        break;

        case "button5": this.setState({
                        min:401,
                        max:500,
                        button1Style: "btn btn-default",
                        button5Style: "btn btn-primary",
                        button3Style: "btn btn-default",
                        button2Style: "btn btn-default",
                        button4Style: "btn btn-default",
                        button6Style: "btn btn-default",
                        button7Style: "btn btn-default",
                        button8Style: "btn btn-default",
                        button9Style: "btn btn-default",
                        button10Style: "btn btn-default",
                        button11Style: "btn btn-default",
                      });
                      break;

        case "button6": this.setState({
                        min:501,
                        max:600,
                        button1Style: "btn btn-default",
                        button6Style: "btn btn-primary",
                        button3Style: "btn btn-default",
                        button4Style: "btn btn-default",
                        button5Style: "btn btn-default",
                        button2Style: "btn btn-default",
                        button7Style: "btn btn-default",
                        button8Style: "btn btn-default",
                        button9Style: "btn btn-default",
                        button10Style: "btn btn-default",
                        button11Style: "btn btn-default",
                      });
                      break;

        case "button7": this.setState({
                        min:601,
                        max:700,
                        button1Style: "btn btn-default",
                        button7Style: "btn btn-primary",
                        button3Style: "btn btn-default",
                        button2Style: "btn btn-default",
                        button5Style: "btn btn-default",
                        button6Style: "btn btn-default",
                        button4Style: "btn btn-default",
                        button8Style: "btn btn-default",
                        button9Style: "btn btn-default",
                        button10Style: "btn btn-default",
                        button11Style: "btn btn-default",
                      });
                      break;

        case "button8": this.setState({
                        min:701,
                        max:800,
                        button1Style: "btn btn-default",
                        button8Style: "btn btn-primary",
                        button3Style: "btn btn-default",
                        button2Style: "btn btn-default",
                        button5Style: "btn btn-default",
                        button6Style: "btn btn-default",
                        button7Style: "btn btn-default",
                        button4Style: "btn btn-default",
                        button9Style: "btn btn-default",
                        button10Style: "btn btn-default",
                        button11Style: "btn btn-default",
                      });
                      break;

          case "button9": this.setState({
                            min:801,
                            max:900,
                            button1Style: "btn btn-default",
                            button9Style: "btn btn-primary",
                            button3Style: "btn btn-default",
                            button2Style: "btn btn-default",
                            button5Style: "btn btn-default",
                            button6Style: "btn btn-default",
                            button7Style: "btn btn-default",
                            button8Style: "btn btn-default",
                            button2Style: "btn btn-default",
                            button10Style: "btn btn-default",
                            button11Style: "btn btn-default",
                          });
                          break;

          case "button10": this.setState({
                            min:901,
                            max:964,
                            button1Style: "btn btn-default",
                            button10Style: "btn btn-primary",
                            button3Style: "btn btn-default",
                            button2Style: "btn btn-default",
                            button5Style: "btn btn-default",
                            button6Style: "btn btn-default",
                            button7Style: "btn btn-default",
                            button8Style: "btn btn-default",
                            button9Style: "btn btn-default",
                            button4Style: "btn btn-default",
                            button11Style: "btn btn-default",
                          });
                          break;

          case "button11": this.setState({
                                min:964,
                                max:this.props.route.wordsLength+1000,
                                button1Style: "btn btn-default",
                                button11Style: "btn btn-primary",
                                button3Style: "btn btn-default",
                                button2Style: "btn btn-default",
                                button5Style: "btn btn-default",
                                button6Style: "btn btn-default",
                                button7Style: "btn btn-default",
                                button8Style: "btn btn-default",
                                button9Style: "btn btn-default",
                                button4Style: "btn btn-default",
                                button10Style: "btn btn-default",
                              });
                              break;
    }
  },

  render:function(){
    return(
      <div>
      <nav className="fixed-nav-bar">
        <div className="w3-row">
          {/* Header component*/}
          <Admin_Header_component data={'Taboo Admin'}/>
        </div>
        <br/>

        <div className="w3-row">
          <div className="w3-col s1"><p type="button" style={{visbility:'hidden'}}></p></div>
          <div className="w3-col s1"><button type="button" className={this.state.button1Style} onClick={this.buttonFunction.bind(null,button1)}>1-100</button></div>
          <div className="w3-col s1"><button type="button" className={this.state.button2Style} onClick={this.buttonFunction.bind(null,button2)}>101-200</button></div>
          <div className="w3-col s1"><button type="button" className={this.state.button3Style} onClick={this.buttonFunction.bind(null,button3)}>201-300</button></div>
          <div className="w3-col s1"><button type="button" className={this.state.button4Style} onClick={this.buttonFunction.bind(null,button4)}>301-400</button></div>
          <div className="w3-col s1"><button type="button" className={this.state.button5Style} onClick={this.buttonFunction.bind(null,button5)}>401-500</button></div>
          <div className="w3-col s1"><button type="button" className={this.state.button6Style} onClick={this.buttonFunction.bind(null,button6)}>501-600</button></div>
          <div className="w3-col s1"><button type="button" className={this.state.button7Style} onClick={this.buttonFunction.bind(null,button7)}>601-700</button></div>
          <div className="w3-col s1"><button type="button" className={this.state.button8Style} onClick={this.buttonFunction.bind(null,button8)}>701-800</button></div>
          <div className="w3-col s1"><button type="button" className={this.state.button9Style} onClick={this.buttonFunction.bind(null,button9)}>801-900</button></div>
          <div className="w3-col s1"><button type="button" className={this.state.button10Style} onClick={this.buttonFunction.bind(null,button10)}>901-1000</button></div>
          <div className="w3-col s1"><button type="button" className={this.state.button11Style} onClick={this.buttonFunction.bind(null,button11)}>New</button></div>
        </div>
      </nav>

      <div className="header-blur"></div>



        <div className="w3-row content">
          {
            this.state.wordsData.slice(this.state.min,this.state.max).map(function(object,i){
              return(
                <div className="w3-col s4 w3-center">

                <div className="admin-view-words-margin">
                  <ul className="w3-ul w3-hoverable w3-card-2 w3-white" key={i}>
                  <li className="word_font word_heading_admin_viewWords" value={object.id} id="word">
                    <span>{object.word}</span>
                  </li>
                   <li className="word_font w3-white word_prohibited_admin_viewWords">_id: {object._id}</li>
                  {
                    object.prohibited.slice(0,5).map(function(pw,i){
                      return(
                        <li className="word_font w3-white word_prohibited_admin_viewWords" key={i}>{pw}</li>
                      )

                    })
                  }
                  </ul>
                  </div>

                </div>
              )
            })
          }
        </div>

      </div>
    )
  },

  componentDidMount:function(){

  }
});
