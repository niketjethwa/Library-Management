const express = require('express')
const router = express.Router();
const path = require('path')

const IssuedBook = require("../model/issued_book")

const issueBookController = (req, res) => {
    console.log('issue book details', req.body);

    IssuedBook.insertMany({title : req.body.book_title, roll_no : req.body.student_rollno}, (err, response) => {
        if (err)
            res.redirect('/books')
        else
        {
            console.log('Issued Book Added in Database')
            // res.render(path.join(__dirname,'../views/issuedbook_list.html'), {data : response})
            res.redirect('/books')
        }
    })
}

module.exports = issueBookController