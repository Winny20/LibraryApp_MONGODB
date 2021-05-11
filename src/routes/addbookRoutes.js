const express = require('express');
var addbookRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function book_routers(nav){
    addbookRouter.get('/',function(req,res){
        res.render('add_book',
        {
            title:'Add New Book',
            nav
        });
    });
    addbookRouter.post('/add',function(req,res){
        var item = {                         // this is gone to bookdata.js [to have a structure and create model and then will be exported back]...so pass as obj
                                             // objects need key : value pairs and , atlast
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image,
        }

        var book = Bookdata(item)       // exported back model is saved inside book
        book.save();                    // save the whole things entered into the form to the database
        res.redirect('/books');         // after saving the form to database..return to books page.
    });

    return addbookRouter;
}

module.exports = book_routers;
