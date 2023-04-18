const express = require('express')
const app =express();

const signup = require('./routes/signUp')
const signin = require('./routes/signin')

const morgan =require('morgan')
const cors =require('cors')
const bodyParser = require('body-parser')
const mongoose =require('mongoose')

//connect to db
mongoose.connect('mongodb://127.0.0.1:27017/videoStreaming')
mongoose.Promise =global.Promise;

app.use(morgan('dev'))
app.use(cors());
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

//Routes
app.use('/api/signup',signup);
app.use('/api/signin', signin);

module.exports = app;