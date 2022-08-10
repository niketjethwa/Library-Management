const mongoose = require('mongoose')

var IssuedBookSchema = mongoose.Schema({
    title: { type: String },
    roll_no: { type: Number }
})


const IssuedBook = mongoose.model('IssuedBook', IssuedBookSchema, 'books_issued');

module.exports = IssuedBook