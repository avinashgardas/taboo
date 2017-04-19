var dispatcher = require('./../dispatcher.js');

module.exports = {
  //action helpers will call dispatch mehtod of dispatcher
    getWords:function(item){
        //data & context (type)
        dispatcher.dispatch({
            payload: item,
            type:"get-item:getWords"
        })
    },
    addWord:function(item){
        //data & context (type)
      dispatcher.dispatch({
        payload: item,
        type:"post-item:addWord"
      })
    },
    addGame:function(item){
        //data & context (type)
      dispatcher.dispatch({
        payload: item,
        type:"post-item:addGame"
      })
    },
    deleteWord:function(item){
        //data & context (type)
      dispatcher.dispatch({
        payload: item,
        type:"post-item:deleteWord"
      })
    },
    deleteWordById:function(item){
        //data & context (type)
      dispatcher.dispatch({
        payload: item,
        type:"post-item:deleteWordById"
      })
    }
}
