var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    pnr: Number,
    birthday: { type: Date }

});

var User = mongoose.model('User', userSchema);

module.exports = User;
