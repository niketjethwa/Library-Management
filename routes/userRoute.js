const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router()

const defaultController = require("./../controller/defualtController");
const signupController = require('./../controller/signupController')
const displayinsertForm = require('./../controller/displayinsertForm')
const insertstudentController = require('./../controller/insertstudentController')
const displaystudentController = require('./../controller/displaystudentController')
const login_user = require('../controller/login_user')
const deleteStudentController = require('./../controller/deleteStudentController')
const editStudentForm = require('./../controller/editStudentForm')
const displaybookController = require('./../controller/displaybookController')
const issuebookForm = require('../controller/issuebookForm')
const logoutController = require('../controller/logoutController')
const fileformController = require('../controller/fileformController')
const fileuploadController = require('../controller/fileuploadController');
const updateStudentDetails = require('../controller/updateStudentDetails')
const issueBookController = require('../controller/issueBookController');
const displayIssuedBook = require("../controller/displayIssuedBook");


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        // cb(null, new Date().toISOString().replace(/:/g, '-')+'-'+ file.originalname)
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })


router.get("/", defaultController)

router.post("/login", login_user)
router.post('/sign_up', signupController)
router.get('/logout', logoutController)

router.get('/student_list', displaystudentController)
router.get('/student_form', displayinsertForm)
router.post('/insert_student', insertstudentController)

router.post('/delete_student/:_id', deleteStudentController)
router.post('/edit_student/:_id', editStudentForm)
router.post('/update_details/:_id', updateStudentDetails)

router.get('/books', displaybookController)
router.post('/issuebook_form/:title', issuebookForm)
router.post('/issuedbooks', issueBookController)
router.get('/issuedbook_display', displayIssuedBook)

router.get('/files', fileformController)
router.post('/uploadfile', upload.single('file'), fileuploadController)


module.exports = router;