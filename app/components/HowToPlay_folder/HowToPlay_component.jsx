//libraries
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

//components
var Header_component = require('./../MainMenu_folder/Other_Header_component.jsx');

var HowToPlay_component = React.createClass({
    render: function() {
        return (
            <div>
                <center>

                        <Header_component data={'Taboo'}/>

                        <br/><br/>

                        <div className="word-container">
                          <div className="w3-row">
                            <i className="fa fa-life-ring fa-5x icon_white"></i>
                            <h2 className="word_font title_white old_score">HeLP</h2>
                          </div>
                  

                          <div className="w3-row w3-card-4 round-card">
                            <div className="w3-center">
                              <h3 className="word_font title_white"><i className="fa fa-star icon_white"></i> 3 easy steps for FrioLo!</h3>
                            </div>

                          <div className="w3-center">
                            <h3 className="word_font title_white">1. Select New game From Main menu</h3>
                          </div>

                          <div className="w3-center">
                            <h3 className="word_font title_white">2. Write down your team names</h3>
                          </div>

                          <div className="w3-center">
                            <h3 className="word_font title_white">3. Let's start FroLio!</h3>
                          </div>
                        </div>

                        </div>
                </center>
            </div>
        );
    }
});

module.exports = HowToPlay_component;
