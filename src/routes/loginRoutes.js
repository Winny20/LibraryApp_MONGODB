const express = require('express');
var loginRouter = express.Router();
function login_routers(nav){

    loginRouter.get('/',function(req,res){
        res.render('login',
        {
            title:'Log In',
            nav
        });
    });

    return loginRouter;
}

module.exports = login_routers;