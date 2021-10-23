const express = require('express');
const signinRouter = express.Router();
const userdata = require('../model/userdata')


signinRouter.get('/',(req,res)=>{
    res.render('signin');
})

signinRouter.post('/check',(req,res)=>{
     const username = req.body.uname
     const  password = req.body.pwd
     if(username =="admin" && password=="12345"){
        res.redirect('/admin')
     }else{

        userdata.findOne({uname: username},(err,user)=>{
         if(user == null){
            msg = "invalid User";
            return res.render('signin', { err_msg:msg,type:'danger'} )
         }else{
            if(password == user.pwd){
               res.redirect('/books')

             }else{
                   msg = "Incorrect Password";
                   return res.render('signin', { err_msg: msg, type:'warning' } )
              }
         }
        })
 
     }
   

 });


module.exports = signinRouter