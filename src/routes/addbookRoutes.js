const express = require('express');
var addbookRouter = express.Router();
function book_routers(nav){

    addbookRouter.get('/',function(req,res){
        res.render('add_book',
        {
            title:'Add New Book',
            nav
        });
    });

    return addbookRouter;
}

module.exports = book_routers;