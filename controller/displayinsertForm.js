const User = require("../model/admin_login");
const path = require('path')
const express = require('express')

const displayinsertForm = async (req, res) => {
    res.sendFile(path.join(__dirname, '../views/insert_student.html'))
}   

module.exports = displayinsertForm