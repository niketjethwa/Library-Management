require('dotenv').config();
require('./db/conn');
const express = require("express");
const cookieParser = require("cookie-parser")
const session = require('express-session')
const path = require('path')

const userRoutes = require('././routes/userRoute');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('views'));
app.engine('html', require('ejs').renderFile);
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/', userRoutes)

const oneDay = 1000 * 60 * 60 * 24;

app.use(session({
    secret: 'SomeSuperLongHardToGuessSecretString',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge : oneDay}
}));

app.listen(port, () => {
console.log(`Server is running at ${port}`);
});
