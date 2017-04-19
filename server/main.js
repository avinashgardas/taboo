//libraries
var express = require('express');
var mongoose = require('mongoose'); //DEPRICATED use promise
mongoose.Promise = global.Promise; //using mongoose promise
var parser = require('body-parser');
var path = require('path');
//init
var app = new express();

app.use(parser.json())
app.use(parser.urlencoded({
    extended:true
}));

app.use(express.static(__dirname + '/../.tmp'));
app.set('views', __dirname + '/../.tmp');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//root - main page
app.get('/',function(req,res){
  res.render('./../app/index.html');
});

//settings page
app.get('/settings',function(req,res){
  res.render('./../app/settings.html');
});

//db
require('./database.js');
//model
var Game = require('./models/Game_model.js');
var Word = require('./models/Word_Model.js');

//--------------------------------------- Game ----------------------------------------------------------//
//getGames
app.route('/api/getGames')
  .get(function(req,res){
    Game.find()
    .exec(function(err,results){
      if(err){
        res.send('ERROR : /api/getGames');
      } else{
        res.json(results);
      }
    });
});

//addGame
app.post('/api/addGame',function(req,res){
  Game.create(req.body,function(err,result){
    if(err){
      res.send('error saving GAME via POST --> body');
    }
    else{
      console.log(result);
      res.send(result);
    }
  });
});

//add a round
app.put('/api/addRound/:gameId',function(req,res){
  var query = {gameId: req.params.gameId};

  Game.findOneAndUpdate(query, {$push: {rounds: req.body} }, function(err,result){
    console.log(JSON.stringify(req.body));
    if(err){
      res.send('ERROR adding round');
    }else{
      res.send('round added!');
    }
  });
});

//update team1_score
app.put('/api/updateEachTeamScore/:gameId',function (req,res) {
    //find and update
    var query = {gameId:req.params.gameId};
    Game.findOneAndUpdate(query,{team1_score: req.body.team1_score,team2_score: req.body.team2_score} , function (err,result) {
       if(err){

       }
        else{
           console.log('updated team scores'+result);
          res.send('updated team scores');
       }
    });
});

//get words
app.route('/api/getWords')
.get(function(req,res){
  Word.find()
  .exec(function(err, results){
    if(err) {
      res.send('error getting all Words')
    }
    else{
      res.json(results);
    }
  });
});

//post word or words
app.post('/api/addWords',function(req,res){
  console.log('adding new record: '+JSON.stringify(req.body));

  Word.create(req.body,function(err,result){
    if(err){
      console.log('Error inserting word(s)!');
    }
    else{
      res.send(result);
    }
  });
});

//remove word By Id
app.delete('/removeWordById/:id',function(req,res) {
    Word.findOneAndRemove({_id: req.params.id}, function (err, result) {
        if (err) {
            console.log('error removing word by id:' + _id);
        } else {
            console.log('deleted word:' + result);
            res.send("Word with id:"+req.params.id+" is deleted!");
        }
    });
});

//remove word By Number
app.delete('/removeWordByNumber/:id',function(req,res) {
    Word.findOneAndRemove({id: req.params.id}, function (err, result) {
        if (err) {
            console.log('error removing word by number:' + id);
        } else {
            console.log('deleted word:' + result);
            res.send("Number: "+req.params.id+" word is deleted!");
        }
    });
});

//remove word By Name
app.delete('/removeWordByName/:name',function(req,res) {
    Word.findOneAndRemove({word: req.params.name}, function (err, result) {
        if (err) {
            console.log('error removing word by name:' + word);
        } else {
            console.log('deleted word:' + result);
            res.send("Number: "+req.params.name+" word is deleted!");
        }
    });
});

//add single prohibited word (SINGULAR)        ---   $push
app.put('/addProhibitedWord/:id',function(req,res){
    var query = {_id: req.params.id};

    Word.findOneAndUpdate(query,{$push: {prohibited: req.body.prohibited} } , function(err,result){
        if(err){
            res.send('error updating PROHIBITED word');
        }
        else{
            res.send("PROHIBITED word added: "+req.body.prohibited);
        }
    });
});


//add prohibited words   (PLURAL)     ----            $push --> push one object only to array;    $pushAll --> push more than one object
app.put('/addProhibitedWords/:id',function(req,res){
    var query = {_id: req.params.id};

    Word.findOneAndUpdate(query,{$pushAll: {prohibited: req.body.prohibited} } , function(err,result){
            if(err){
                res.send('error updating PROHIBITED word(s)');
            }
        else{
                res.send("PROHIBITED word(s) added: "+req.body.prohibited);
            }
    });
});

// DELETE/empty words in prohibited-word-array
    app.put('/emptyProhibitedWords/:id',function(req,res){

        console.log('empty prohibited word: '+JSON.stringify((req.body)));
        var query = {_id: req.params.id};

        Word.findOneAndUpdate(query, {prohibited: [] }, function(err,result){
            if(err){
                res.send('error making array empty!');
            }
            else{
                res.send("PROHIBITED array emptied!");
            }
        });
    });

    // Delete a word in Prohibited-words-array
    app.put('/deleteProhibitedWord/:id/:prohibitedWord',function(req,res){

        var query = {_id: req.params.id};

        Word.update(query, {$pull: {prohibited: req.params.prohibitedWord} }, function(err,result){
            if(err){
                res.send('error removing word: '+req.params.prohibitedWord+' from PROHIBITED array');
            }
            else{
                res.send(req.params.prohibitedWord+' deleted from array!');
            }
        });

    });
//--------------------------------------------------------------------------------------//

app.listen(7779,function(){
  console.log('7779 listening');
});
