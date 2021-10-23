const express = require('express');
const adminRouter = express.Router();
const bookdata = require('../model/bookdata');
const userdata = require('../model/userdata')
const authordata = require('../model/authordata');







function router(menu){
    


    adminRouter.get('/',(req,res)=>{  

     
           
        
         bookdata.find({},(error,data)=>{
         var  books = data; 
           authordata.find({},(error,data)=>{
           var authors = data
            userdata.find({},(error,data)=>{
               var users = data
               
               res.render("admin",{
                menu,
                books,
                authors,
                users,
              
            })
             }) 
         }) 
         })
        
      
        
        

   
            

          
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

adminRouter.get('/users',(req,res)=>{       
   userdata.find().then((users)=>{
        res.render("users",{
            menu,
           users
          
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

adminRouter.get('/users/delete/:id',(req,res)=>{       
    
    const id = req.params.id
    
    userdata.deleteOne({_id:id},(err,result)=>{
      res.redirect('/admin/users');
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