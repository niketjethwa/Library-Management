const express = require('express')
const path = require('path')
const bodyParser = require("body-parser");
const fs = require("fs");
const multer = require("multer");
const mongoose = require("mongoose");
const File = require('../model/files')


// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// })


// const upload = (req, res) => {multer({ storage: storage })}


const fileuploadController = (req, res) => {
    try {
        var file = fs.readFileSync(req.file.path)
        var enc_file = file.toString('base64')
        var final_file = {
            contentType: req.file.mimetype,
            files: new Buffer.from(enc_file, 'base64')
        }

        File.insertMany({ name: 'Trial', desc: 'Trial', file: final_file }, (err, result) => {
            // console.log('Final_file', final_file)
            // console.log('REsult', result);
            console.log('Saved Success');
        })
        res.redirect('/files')
    } catch (error) {
        throw error
    }
}


module.exports = fileuploadController