const express = require('express')
const fs = require('fs')
const path = require('path')


const fileformController =  (req, res) => {
    fs.readdir(path.join(__dirname, '../uploads'), (err, files) => {
        if (err) throw err;
        console.log('File:', files)   
        res.render(path.join(__dirname, '../views/files_upload.html'), { all_files: files })
    })
}

module.exports = fileformController;
