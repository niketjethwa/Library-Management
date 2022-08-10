const express = require('express')
const router = express.Router();
const path = require('path')

const IssuedBook = require("../model/issued_book")

const displayIssuedBook = (req, res) => {
    console.log('Display');
    IssuedBook.find({}, function (err, result) {
        if(err)
            console.log("error",err);
        // console.log(typeof result);
        // console.log('result', result)
        res.render(path.join(__dirname, '../views/issuedbook_list.html'), { data: result })
    })
}

module.exports = displayIssuedBook