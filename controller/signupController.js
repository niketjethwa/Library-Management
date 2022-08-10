const express = require('express')
const router = express.Router();
const path = require('path')
const joi = require("joi");
const errorFunction = require('../utils/errorFunction')
const defaultController = require('./defualtController')
const addUser = require('./add_user')

const validation = joi.object({
  username: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: joi.string().min(6).trim(true).required()
    .default([]),
  confirm_password: joi.string().min(6).trim(true).equal(joi.ref('password'))
  .required()
  .messages({ 'any.only': 'Password does not match' })
    .default([]),
  is_active: joi.boolean().default(true),
});



const signupController = async (req, res) => {
  // console.log('UN', req.body.username);

  const payload = {
    username: req.body.username,
    password: req.body.password,
    confirm_password: req.body.confirm_password
  }

  const error = validation.validate(payload);
  console.log('Validate', error);
  if (!error.hasOwnProperty('error')) {
    const user_present = await addUser(payload.username, payload.password)
    console.log('USER-PRESENT', user_present);

    if(user_present)
      res.sendFile(path.join(__dirname, '../views/login_page.html'))
    else
    res.sendFile(path.join(__dirname, '../views/login_page.html'))
  }
  else
  {
    res.sendFile(path.join(__dirname, '../views/login_page.html'))
  }
}

module.exports = signupController;