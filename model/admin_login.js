const mongoose = require('mongoose')

var UserSchema = mongoose.Schema({
    username: { type: String },
    password: { type: String },
    token : { type : String}
})


const User = mongoose.model('users', UserSchema);

module.exports = User