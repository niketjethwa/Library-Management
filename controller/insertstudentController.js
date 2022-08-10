const Student = require("../model/list_student");
const path = require('path')
const express = require('express')
const number_id = require('generate-serial-number')

const router = express.Router()
const insertstudentController = async (req, res) => {
    var generator = require('generate-serial-number');
    var serialNumber = generator.generate(6);
    
    try {
        
        payload = {
            _id : serialNumber,
            name : req.body.studname,
            phone : req.body.phone,
            email : req.body.email,
            address : req.body.address,
            geneder : req.body.gender,
        }   

        // console.log('Insert student', payload);
        Student.insertMany({
            _id : payload._id,
            name: payload.name,
            phone : payload.phone,
            email : payload.email,
            address : payload.address,
            geneder : payload.geneder
        }, (err, result) => {
            console.log('Insert_Student', result)
            
            res.redirect('/student_list')
            // res.render(path.join(__dirname, '../views/student_list.html'))
        })


    } catch (error) {
        console.log("Insert student error", error);
    }
}   

module.exports = insertstudentController