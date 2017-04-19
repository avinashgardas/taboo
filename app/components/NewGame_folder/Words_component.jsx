//libraries
var React = require('react');

var Words_component = React.createClass({
  //function
  render:function(){
    return(
      <div>

       <div className={this.props.wordsVisibility}>{/* container */}
        <div className="w3-row words-card w3-white">{/* card */}
          <div className="w3-col s12">
            <ul className="w3-ul w3-hoverable w3-card-4">
              <li className="w3-padding-16 word_heading word_font">{this.props.wordData[this.props.wordIndex].word}</li>
              {
                this.props.wordData[this.props.wordIndex].prohibited.slice(0,5).map(function(prohibited_word,i){
                    return(
                      <li className="w3-padding-16 word_prohibited word_font" key={i}>{prohibited_word}</li>
                    )
                })
              }
          </ul>
          </div>
        </div>{/* card */}
       </div>{/* parent container */}

      </div>
    );
  }
});

module.exports = Words_component;
