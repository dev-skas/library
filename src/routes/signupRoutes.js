const express = require('express');
const signupRouter = express.Router();
const userdata = require('../model/userdata')


    signupRouter.get('/',(req,res)=>{
        res.render('signup');
    });


    signupRouter.post('/adduser',(req,res)=>{
        var item = {
            uname:req.body.uname,
            pwd:req.body.pwd,

        }
        var user = userdata(item);
        user.save();
        res.redirect('/signin');
    });



module.exports = signupRouter