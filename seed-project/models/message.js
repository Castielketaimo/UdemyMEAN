var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scgema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'} //PK
});

module.exports = mongoose.model('Message', Schema);