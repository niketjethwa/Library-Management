const express = require('express')
const router = express.Router();
const path = require('path')

const Book = require("../model/list_book")

const issuebookForm = (req, res) => {
    console.log('Edit Student', req.params._id);
    Book.findOne({title : req.params.title} , async(err, result) =>{
        console.log('Book details', result);
    if (err) {
        res.redirect('/books')
        } else {
            res.render(path.join(__dirname,'../views/book_issue.html'), {book_details : result})
        }
    })
}

module.exports = issuebookForm