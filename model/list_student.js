const mongoose = require('mongoose')

var StudentSchema = mongoose.Schema({
    _id : {type : Number},
    name: { type: String },
    phone: { type: Number },
    email : {type : String},
    address : { type : String},
    geneder : {type : String}
})


const Student = mongoose.model('Student', StudentSchema,'list_of_student');

module.exports = Student