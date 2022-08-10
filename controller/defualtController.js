const express = require('express')
const errorFunction = require('.././utils/errorFunction')
const path = require('path')

const defaultController =  (err, res) => {
    // res.status(200)
    if(err)
        res.send(JSON.stringify(err))
        // errorFunction(err, "Something wrong")
    // res.sendFile(path.join(__dirname, '../views/login_page.html'))
}
module.exports = defaultController;
