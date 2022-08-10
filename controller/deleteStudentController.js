const express = require('express')
const router = express.Router();
const path = require('path')

const Student = require("../model/list_student")

const deleteStudentController = (req, res) => {
    console.log('Delete user', req.params.name)

    Student.findOneAndDelete({ _id: req.params._id }, (err, result) => {

        if (!err) {

            res.redirect('/student_list')
            // res.redirect(path.join(__dirname, '../views/student_list.html'))
        } else {
            console.log('Failed to Delete user Details: ' + err);
        }
    })
}

module.exports = deleteStudentController