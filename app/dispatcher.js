//libraries
var guid = require('guid');

var listeners = {};

module.exports = {
  //interested ones register here && actions call dispatch mthod
    register:function(callback){
        var id = guid.raw();
        listeners[id] = callback;
        return id;
    },
    dispatch:function(payload){
        console.log("Dispatching...",payload);

        for(var id in listeners){
          console.log('inside listeners');
            var listeners = listeners[id];
            listeners(payload);
        }
    }
}
