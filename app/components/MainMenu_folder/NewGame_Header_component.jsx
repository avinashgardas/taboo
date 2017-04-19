//libraries
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Modal = require('react-modal');

const customStyles = {
  content : {
    top                   : '50%',
     left                  : '50%',
     right                 : 'auto',
     bottom                : 'auto',
     marginRight           : '-50%',
     transform             : 'translate(-50%, -50%)',
     backgroundColor   : 'rgba(192, 192, 192, 1)',
     padding                    : '50px',
     borderRadius               : '4px'
  },
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.75)'
  }
};

var NewGame_Header_component = React.createClass({
  getInitialState:function(){
    return{
      modalIsOpen:false
    }
  },

  pauseGame:function(){
    console.log('GAME is PAUSED');
  },

  openModal: function() {
     this.setState({modalIsOpen: true});
   },

   closeModal: function() {
     this.setState({modalIsOpen: false});
   },

  render:function(){
    return(
      <div>

      <div className="newGame_header_container">
        <div className="" >
          <div className="w3-col s4" >
            <Link className="link" to="/">
              <a><i className="fa fa-arrow-left fa-2x position-vertical-center back-button" onClick={this.props.clearTimer}></i></a>
            </Link>
          </div>
          <div className="w3-col s4">
            <h1 className="newGame_header_title">{this.props.data}</h1>
          </div>
          <div className="w3-col s4">
            <a><i className="fa fa-pause fa-2x position-vertical-center pause-button visibility-hidden" onClick={this.openModal}></i></a>
          </div>
        </div>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles} >

          <div className="w3-center">
            <div><a><i className="fa fa-play fa-2x position-vertical-center pause-button" onClick={this.closeModal}></i></a></div>
            <br/>
            <h2 className="word_font">ReSuMe</h2>
          </div>

        </Modal>

        </div>
    );
  }
});

module.exports = NewGame_Header_component;
