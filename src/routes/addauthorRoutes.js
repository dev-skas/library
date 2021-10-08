const express = require('express');
const addauthorRouter = express.Router();
function router(menu){
    
    addauthorRouter.get('/',(req,res)=>{
    res.render('addauthor',{
        menu
    });
})
return addauthorRouter
}
module.exports = router