var React = require('react');

module.exports = React.createClass({
  getInitialState:function(){
    return{
      visibility:show
    }
  },

  closeModal:function(){
    this.setState({
      visibility:hide
    });
  },

  render:function(){
    return(
      <div>

      <div className={this.state.visibility}>
      <div id="pause-modal" class="w3-modal">
        <div class="w3-modal-content w3-animate-top w3-card-8">
          <header class="w3-container w3-black">
            <span onClick={this.closeModal} class="w3-closebtn" >&times;</span>
            <h2 class="modal-title">Game Paused</h2>
          </header>
          <div class="w3-container">
            <h5 class="modal-message">ReSuMe</h5>
          </div>

          </div>
        </div>
        </div>

      </div>
    );
  }
});
