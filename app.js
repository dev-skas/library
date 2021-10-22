const express = require('express');
const app = new express();
const port= process.env.PORT || 1001;
const nav =[
    {
        link:'/',name:'Home'
    },{
        link:'/books',name:'Books'
    },{
        link:'/authors',name:'Authors'
    },{
        link:'/signin',name:'Log Out'
    }

];

const menu =[
    {
        link:'/admin',name:'Home',target:'_self'
    },{
        link:'/admin/books',name:'Books',target:'_self'
    },{
        link:'/admin/authors',name:'Authors',target:'_self'
    },{
        link:'/admin/addbook',name:'Add Book',target:'_self'
    },{
        link:'/admin/addauthor',name:'Add Author',target:'_self'
    },{
        link:'/books',name:'Preview',target:'_blank'
    }

];
const bookRouter =require('./src/routes/bookroutes')(nav);
const authorRouter = require('./src/routes/authorRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes');
const signinRouter = require('./src/routes/signinRoutes');
const adminRouter = require('./src/routes/adminRoutes')(menu);
const addbookRouter =require('./src/routes/addbookRoutes')(menu);
const addauthorRouter =require('./src/routes/addauthorRoutes')(menu);




app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',bookRouter);
app.use('/authors',authorRouter);
app.use('/signup',signupRouter);
app.use('/signin',signinRouter);
app.use('/admin',adminRouter);
app.use('/admin/addbook',addbookRouter);
app.use('/admin/addauthor',addauthorRouter);




app.get('/',(req,res)=>{
   res.render("index");
});


app.listen(port,()=>{console.log(`Server Ready at ${port}`)});