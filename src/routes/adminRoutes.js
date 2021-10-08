const express = require('express');
const adminRouter = express.Router();

function router(menu){
    adminRouter.get('/',(req,res)=>{
        res.render("admin",{
            menu
        });
    });
    
    return adminRouter
}
module.exports = router