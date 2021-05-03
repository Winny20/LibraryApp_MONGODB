var chalk = require("chalk");
const express = require("express");
const port = process.env.PORT || 5000;

var app = new express();
const nav = [
    {
        link:'/books',
        name:'Books'
    },
    {
        link:'/authors',
        name:'Author'
    },
];

const nav_books = [
    {
        link:'/books',
        name:'Books'
    },
    {
        link:'/authors',
        name:'Author'
    },
    {
        link:'/add_book',
        name: 'Add Book'
    }
];

const nav_authors = [
    {
        link:'/books',
        name:'Books'
    },
    {
        link:'/authors',
        name:'Author'
    },
    {
        link:'/add_author',
        name: 'Add Author'
    }
];


var booksRouter = require('./src/routes/bookRoutes')(nav_books);
var authorsRouter = require('./src/routes/authorRoutes')(nav_authors);
var loginRouter = require('./src/routes/loginRoutes')(nav);
var signupRouter = require('./src/routes/signupRoutes')(nav);
var addbookRouter = require('./src/routes/addbookRoutes')(nav);
var addauthorRouter = require('./src/routes/addauthorRoutes')(nav);

app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static('./public'));
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/add_book',addbookRouter);
app.use('/add_author',addauthorRouter);


app.get('/',function(req,res){
    res.render('index.ejs',
    {
        title:'Library App',
        nav,
    });
});


app.listen(port,()=>{console.log("Server Ready at" + port)});