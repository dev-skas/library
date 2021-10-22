const express = require('express');
const adminRouter = express.Router();
const bookdata = require('../model/bookdata');
const authordata = require('../model/authordata');



function router(menu){
    
   

    adminRouter.get('/',(req,res)=>{   

        
        let books =[];
        var authors =[];
        var users =[];

        
        
        bookdata.find({},(error,data)=>{
            books = data
        })

        authordata.find({},(error,data)=>{
            authors = data
        }) 

        
            res.render("admin",{
                menu,
                books,
                authors,
              
            });
          
    });



    adminRouter.get('/books',(req,res)=>{       
       
        bookdata.find().then((books)=>{
            res.render("adminbook",{
                menu,
                books,
              
              
        })
   
        });

});

adminRouter.get('/authors',(req,res)=>{       
    authordata.find().then((authors)=>{
        res.render("adminauthor",{
            menu,
            authors
          
        });
    })
   

});

adminRouter.get('/books/delete/:id',(req,res)=>{       
    
      const id = req.params.id
      
      bookdata.deleteOne({_id:id},(err,result)=>{
        res.redirect('/admin/books')
        
      })
  
});

adminRouter.get('/authors/delete/:id',(req,res)=>{       
    
    const id = req.params.id
    
    authordata.deleteOne({_id:id},(err,result)=>{
      res.redirect('/admin/authors');
    })
  
});

adminRouter.get('/authors/edit/:id',(req,res)=>{       
    
    const id = req.params.id
    
    authordata.findOne({_id:id}).then((authors)=>{

        res.render("editauthor",{
            menu,
            authors
        });

    })
  
  
});

adminRouter.get('/books/edit/:id',(req,res)=>{       
    
    const id = req.params.id
    
    bookdata.findOne({_id:id}).then((books)=>{

        res.render("editbook",{
            menu,
            books
        });

    })
  
  
});

    return adminRouter
}

module.exports = router