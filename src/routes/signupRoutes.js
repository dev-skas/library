const express = require('express');
const signupRouter = express.Router();
const userdata = require('../model/userdata')


    signupRouter.get('/',(req,res)=>{
        res.render('signup');
    });


    signupRouter.post('/adduser',(req,res)=>{

       


        userdata.findOne({uname: req.body.uname},(err,user)=>{
         if(user == null){
            var item = {
                uname:req.body.uname,
                pwd:req.body.pwd,
    
            }
              var user = userdata(item);
              user.save();
              res.redirect('/signin');
         }else{

            msg = "User Alreday Exist";
            return res.render('signup', { err_msg:msg,type:'danger'} )
         }

        })
       
    });



module.exports = signupRouter