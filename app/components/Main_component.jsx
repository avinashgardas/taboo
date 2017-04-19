//libraries
var React = require('react');

//components
var Main_Menu_component = require('./MainMenu_folder/MainMenu_component.jsx');
var Header_component = require('./MainMenu_folder/Header_component.jsx');

var Main_component = React.createClass({
    render:function(){
      return(
        <div>
          {/* Header component*/}
          <Header_component data={'Taboo'}/>
          <br/>

          {/* Menu Component */}
          <Main_Menu_component />
        </div>
      )
    }
});

module.exports = Main_component;
