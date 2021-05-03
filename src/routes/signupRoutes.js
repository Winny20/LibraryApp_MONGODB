const express = require('express');
var signupRouter = express.Router();
function signup_routers(nav){
    signupRouter.get('/',function(req,res){
        res.render('signup',
        {
            title:'Sign Up',
            nav
        });
    });

    return signupRouter;
}

module.exports = signup_routers;