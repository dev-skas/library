
const express = require('express');
const addbookRouter = express.Router();
const authordata = require('../model/authordata');
const bookdata = require('../model/bookdata');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images');
    },
    filename: (req,file,cb)=>{
        cb(null,file.originalname);
    },

});


const upload = multer({
    storage :storage,
}).single('image')




function router(menu){
  
    addbookRouter.get('/',(req,res)=>{

        authordata.find()
        .then((authors)=>{
            res.render('addbook',{
                menu,
                authors
            });
        })
       
        
        })
        

addbookRouter.post('/add',upload,(req,res)=>{
    
  
    var item ={
       name:  req.body.name,
       author: req.body.authorName,
       gener:  req.body.Category,
       year:req.body.year,
       short: req.body.about,
       image: req.file.filename
    }

    var book = bookdata(item);
    book.save();
        res.redirect('/admin/books');

   });

   addbookRouter.post('/edit/:id',upload,(req,res)=>{
    
    const id = req.params.id
  console.log(id)

    bookdata.findByIdAndUpdate(id,{
        name:  req.body.name,
        author: req.body.authorName,
        gener:  req.body.Category,
        year:req.body.year,
        short: req.body.about,
        image: req.file.filename
    },(err,result)=>{
        res.redirect('/admin/books');
      })

   });
   
return addbookRouter
}
module.exports = router

