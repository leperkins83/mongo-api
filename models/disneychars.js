var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DisneySchema = new Schema({
    name: String,
    movieList: Array,
    type: String,
    famousQuote: String,
    yearOfAppearance: Date
});

module.exports = mongoose.model('DisneySchema', DisneySchema);
