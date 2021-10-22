const express = require('express');
const addauthorRouter = express.Router();
const authordata = require('../model/authordata');
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
}).single('file')





function router(menu){
    
    addauthorRouter.get('/',(req,res)=>{
    res.render('addauthor',{
        menu
    });
    
})

addauthorRouter.post('/add',upload,(req,res)=>{
    var item = {
        name: req.body.authorName,
        image: req.file.filename,
        year:req.body.DOB,
        country:req.body.Country,
        short:req.body.about  
    }
    var author = authordata(item);
    author.save();
    res.redirect('/admin/authors');

});

return addauthorRouter
}
module.exports = router