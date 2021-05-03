const express = require('express');
var addauthorRouter = express.Router();
function author_routers(nav){

    addauthorRouter.get('/',function(req,res){
        res.render('add_author',
        {
            title:'Add New Author',
            nav
        });
    });

    return addauthorRouter;
}

module.exports = author_routers;