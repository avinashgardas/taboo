//libraries
var React = require('react');

module.exports = React.createClass({
  sum:function(a,b){
    return a+b;
  },

  render:function(){
    return(
      <div>
          <h1>:( + music = :)</h1>
      </div>
    );
  }
});
