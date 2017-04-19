var mongoose = require('mongoose');

var db = 'mongodb://localhost/taboodb';

mongoose.connect(db);

mongoose.connection.on('error',function(){
    console.log('unable to connect to :'+db);
});

mongoose.connection.once('open',function(){
    console.log('inside: '+db+' operations can now be performed!');
});
