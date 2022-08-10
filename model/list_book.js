const mongoose = require('mongoose')

var BookSchema = mongoose.Schema({
    _id: { type: Number },
    author: { type: String },
    country: { type: String },
    imageLink: { type: String },
    language: { type: String },
    link: { type: String },
    pages: { type: Number },
    title: { type: String },
    year: { type: Number }
})


const Book = mongoose.model('Book', BookSchema, 'books');

module.exports = Book