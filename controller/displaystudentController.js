const express = require('express')
const router = express.Router();
const path = require('path')

const Student = require("../model/list_student")

const displaystudentController = (req, res) => {
    console.log('Display');
    Student.find({}, function (err, result) {
        if(err)
            console.log("error",err);
        // console.log(typeof result);
        // console.log('result', result)
        res.render(path.join(__dirname, '../views/student_list.html'), { details: result })
    })
}

module.exports = displaystudentController