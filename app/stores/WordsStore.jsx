//libraries
var dispatcher = require('./../dispatcher.js');
var helper = require('./../helpers/RestHelper.js');
var listeners = [];

function WordsStore(){
    var items = [];
    var word = [];

    helper.get("/api/getWords")
    .then(function(data){
      items = data;
      triggerListeners();
    });

    //function - get all words
    function getItems(lowerLimit,upperLimit){
      helper.get("/api/getWords")
      .then(function(data){
        //console.log('data: '+JSON.stringify(data));
        items = data.slice(lowerLimit,upperLimit);
        triggerListeners();
      });
      return items;
    }

    //function - add a Word
    function addWord(item){
      word.push(item);
      triggerListenersNew();
      helper.post("/api/addWords",item,function(){
        console.log('inside addWord (wordsstore)');
      });
    }

    //function  delete a word
    function deleteWord(name){
      var url = '/removeWordByName/'+name;
      console.log(url);
      //call api
      helper.del(url,name);
    }

    //function  delete a word
    function deleteWordById(id){
      var url = '/removeWordById/'+id;
      console.log(url);
      //call api
      helper.del(url,id);
    }

    //function onChange
    function onChange(listener){
      listeners.push(listener);
    }

    //function triggerListeners
    function triggerListeners(){
      listeners.forEach(function(listener){
        listener(items);
      });
    }

    //function triggerListeners
    function triggerListenersNew(){
      listeners.forEach(function(listener){
        listener(word);
      });
    }

    //dispatcher  -- called for
    dispatcher.register(function (event) {
      var split = event.type.split(':');
      if(split[0]==='post-item'){
        switch(split[1]){
          case "addWord": addGame(event.payload);
          break;

          case "deleteWord": deleteWord(event.payload);
          break;

          case "deleteWordById": deleteWordById(event.payload);
          break;
        }
      }
    })

    //return
    return {
      getItems:getItems,
      addWord:addWord,
      deleteWord:deleteWord,
      deleteWordById:deleteWordById,
      onChange:onChange
    }

}//WordsStore

module.exports = new WordsStore();
