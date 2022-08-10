const mongoose = require('mongoose')

var FileSchema = mongoose.Schema({
    name: {type : String},
    desc: {type : String},
    file:
    {
        data: Buffer,
        contentType: String
    }
})


const File = mongoose.model('File', FileSchema,'files');

module.exports = File