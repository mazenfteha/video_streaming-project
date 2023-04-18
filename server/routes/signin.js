const express = require('express');
const router = express.Router();
const User =require('../models/User')
const bcrypt = require('bcrypt')

router.post('/', (req ,res , next)=>{
    User.find({ email: req.body.email })
    .exec()
    .then(user =>{
        if (user.length < 1){
        //no user foung
        return res.status(401).json({
            message: 'Auth Failed'
        });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result)=>{
            if(err){
                return res.status(401).json({
                    message: 'Auth Failed'
                });
            }
            if(result){
                //Generate token
                return res.status(200).json({
                    message: 'Auth Successful'
                });
            }
            res.status(401).json({
                message: 'Auth Failed'
            });
        })
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
});

module.exports = router;