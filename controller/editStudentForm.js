const express = require('express')
const router = express.Router();
const path = require('path')

const Student = require("../model/list_student")

const editStudentForm = (req, res) => {
    console.log('Edit Student', req.params._id);
    Student.findOne({_id : req.params._id} , async(err, result) =>{
        console.log('Edit Student Result', result);
    if (err) {
        res.redirect('/student_list')
        } else {
            res.render(path.join(__dirname,'../views/edit_student.html'), {student_details : result})
        }
    })
}

module.exports = editStudentForm