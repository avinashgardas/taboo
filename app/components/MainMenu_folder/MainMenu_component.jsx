//libraries
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var MyLink = React.createClass({
    //function
    changeURL: function() {
        window.location.replace(this.props.href)
    },
    //function
    render: function() {
        return (
            <div>
                <span onClick={this.changeURL}>
                    {this.props.children}
                </span>
            </div>
        )
    }
});

var MainMenu_component = React.createClass({
    render: function() {
        return (
            <div>

                <div className="main_menu_container">{/* container starts */}
                    <div className="w3-row">{/* Row starts */}

                      <div className="w3-col s6 w3-center">
                        <Link to='/newGame' className="link">
                          <div className="w3-blue w3-hover-shadow w3-center main_menu_card_1">
                            <div>
                              <i className="fa fa-gamepad fa-5x main_menu_card_content_icon" aria-hidden="true"></i>
                              <h3 className="main_menu_card_content_title">NeW GaMe</h3>
                            </div>
                          </div>
                        </Link>
                      </div>

                        <div className="w3-col s6 w3-center">
                          <Link to='/oldScore' className="link">
                            <div className="w3-green w3-hover-shadow w3-center main_menu_card_2">
                              <div>
                                <i className="fa fa-trophy fa-5x main_menu_card_content_icon" aria-hidden="true"></i>
                                <h3 className="main_menu_card_content_title">OLD SCoRes</h3>
                              </div>
                            </div>
                          </Link>
                        </div>

                        <div className="w3-col s6 w3-center">
                          <MyLink className="link cursor-pointer" href='http://localhost:8001/settings'>
                            <div className="w3-orange w3-hover-shadow w3-center main_menu_card_3">
                              <div>
                                <i className="fa fa-wrench fa-5x main_menu_card_content_icon icon_white" aria-hidden="true"></i>
                                <h3 className="main_menu_card_content_title title_white">SettiNGs</h3>
                              </div>
                            </div>
                          </MyLink>
                        </div>

                        <div className="w3-col s6 w3-center">
                          <Link to='/howToPlay' className="link">
                            <div className="w3-pink w3-hover-shadow w3-center main_menu_card_4">
                              <div>
                                <i className="fa fa-question fa-5x main_menu_card_content_icon" aria-hidden="true"></i>
                                <h3 className="main_menu_card_content_title">HoW To</h3>
                              </div>
                            </div>
                          </Link>
                        </div>

                        <div className="w3-col s12 w3-center">
                          <Link to='/admin' className="link">
                            <div className="w3-indigo w3-hover-shadow w3-center main_menu_card_5">
                              <div>
                                <i className="fa fa-lock fa-5x main_menu_card_content_icon_admin" aria-hidden="true"></i>
                                <h3 className="main_menu_card_content_title_admin">AdMin</h3>
                              </div>
                            </div>
                          </Link>
                        </div>

                    </div>{/* Row ends */}
                </div>{/* container ends */}

            </div>
        )
    }
});

module.exports = MainMenu_component;
