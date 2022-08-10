const express = require('express')
const router = express.Router();
const path = require('path')

const Student = require("../model/list_student")

const updateStudentDetails = (req, res) => {
    console.log('Update user', req.body)
    console.log('Updated data', res.body);
    Student.findByIdAndUpdate({_id: req.body.roll_no}, req.body, (err, upres) => {
    if (err) {    
        res.redirect('/student_list')
        } else {
            res.redirect('/student_list')
        }
    })
}

module.exports = updateStudentDetails