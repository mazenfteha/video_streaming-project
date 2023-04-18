const express =require('express');
const router =express.Router();
const User =require('../models/User')

router.post('/',(req,res,next)=>{
    console.log(req.body)
    res.status(200).json({
        message:'Message recieved from post on /api/signUp'
    })
})

module.exports =router; 