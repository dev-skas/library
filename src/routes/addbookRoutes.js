
const express = require('express');
const addbookRouter = express.Router();
function router(menu){
    
addbookRouter.get('/',(req,res)=>{
    res.render('addbook',{
        menu
    });
})
return addbookRouter
}
module.exports = router