/**
 * Created by gardasa on 7/29/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//game-schema
var WordSchema = new Schema(
    {
        prohibited:[String],
        word: String,
        id: Number
    }
);



//return Game model
module.exports = mongoose.model('Word',WordSchema);
