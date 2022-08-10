const path = require('path')
const jwt = require('jsonwebtoken')
const config = process.env;

const User = require("../model/admin_login");
const securePassword = require("../utils/securePassword");
const checkPassword = require("../utils/securePassword");
const errorFunction = require('../utils/errorFunction')
const defaultController = require('./defualtController')
const bcrypt = require('bcryptjs')
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const login_user = async function (req, res) {

  const userPassword = req.body.password;
  const token = req.body.token;
  
  const user = await User.findOne({ username: req.body.username });
  if (user) {
    console.log("USER:", userPassword);
    console.log("DB PASS", user.password);

    const decode = jwt.verify(token, config.TOKEN_KEY)
    const validPassword = await bcrypt.compare(userPassword, user.password);
    console.log("Validate Password", validPassword);
    if (validPassword) {
      session = req.session;
      // session.name = req.body.username;
      // console.log(req.session.name)
      console.log('Session Started')
      res.sendFile(path.join(__dirname, '../views/home.html'))
    } else {
      res.sendFile(path.join(__dirname, '../views/login_page.html'))
    }
  } else {
    res.sendFile(path.join(__dirname, '../views/login_page.html'))
  }
}


module.exports = login_user