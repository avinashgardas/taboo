var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//game-schema
var GameSchema = new Schema(
    {
        gameId: Number,
        team1_score: {type:Number, default:0},
        team2_score: {type:Number, default:0},
        rounds: [
                    {
                        round:Number,
                        team1:{correct:Number,taboo:Number,pass:Number,total:Number},
                        team2:{correct:Number,taboo:Number,pass:Number,total:Number}
                    }
        ]
    }
);



//return Game model
module.exports = mongoose.model('Game',GameSchema);
