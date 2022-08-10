
const express = require('express')

const path = require('path')
const session = require('express-session')
const userRoute = require('../routes/userRoute')

const logoutController =  (req, res) => {

    // req.session.destroy()
    delete req.session
    console.log('Session destroy')
    res.redirect('/')
    // res.sendFile(path.join(__dirname, '../views/login_page.html'))
}
module.exports = logoutController;
