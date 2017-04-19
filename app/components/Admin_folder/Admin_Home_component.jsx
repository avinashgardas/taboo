var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Other_Header_component = require('./../MainMenu_folder/Other_Header_component.jsx');

module.exports = React.createClass({
  render:function(){
    return(
      <div>

      {/* Header component*/}
      <Other_Header_component data={'Taboo Admin'}/>
      <br/><br/>

      <div className="main_menu_container">{/* container starts */}
          <div className="w3-row">{/* Row starts */}

          <div className="w3-col s12 w3-center">
            <Link to='/admin_addWords' className="link">
              <div className="w3-dark-grey w3-hover-shadow w3-center main_menu_card_5">
                <div>
                  <i className="fa fa-plus fa-5x main_menu_card_content_icon_admin" aria-hidden="true"></i>
                  <h3 className="main_menu_card_content_title_admin">Add WoRdS</h3>
                </div>
              </div>
            </Link>
          </div>

          <div className="w3-col s12 w3-center">
            <Link to='/admin_viewWords' className="link">
              <div className="w3-brown w3-hover-shadow w3-center main_menu_card_5">
                <div>
                  <i className="fa fa-th-list fa-5x main_menu_card_content_icon_admin" aria-hidden="true"></i>
                  <h3 className="main_menu_card_content_title_admin">ViEw WoRDs</h3>
                </div>
              </div>
            </Link>
          </div>

          <div className="w3-col s12 w3-center">
            <Link to='/admin_deleteWords' className="link">
              <div className="w3-teal w3-hover-shadow w3-center main_menu_card_5">
                <div>
                  <i className="fa fa-trash fa-5x main_menu_card_content_icon_admin" aria-hidden="true"></i>
                  <h3 className="main_menu_card_content_title_admin">DeLeTe a WoRD</h3>
                </div>
              </div>
            </Link>
          </div>

          </div>{/* Row ends */}
        </div>{/* container ends */}

      </div>
    );
  }
});
