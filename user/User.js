var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    pnr: Number,
    birthday: { type: Date },
    googleid: String,
    picture: String,
    developmentGoals: String,

});

var User = mongoose.model('User', userSchema);

module.exports = User;
