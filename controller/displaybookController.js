const express = require('express')
const router = express.Router();
const path = require('path')

const Book = require("../model/list_book")

const displaybookController = (req, res) => {
    console.log('Display');
    Book.find({}, function (err, result) {
        if(err)
            console.log("error",err);
        // console.log(typeof result);
        // console.log('result', result)
        res.render(path.join(__dirname, '../views/books_list.html'), { details: result })
    })
}

module.exports = displaybookController