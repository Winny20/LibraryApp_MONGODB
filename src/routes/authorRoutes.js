const express = require('express');
const authorsRouter = express.Router();
function routers(nav){
    var authors = [
        {
            name:"Joseph Barbera",
            novel:"Tom and Jerry",
            image:"3de1f41c7132e12b923d2d0c17bbf813.jpg",
            description:"Joseph Roland Barbera (March 24, 1911 – December 18, 2006) was an American animator, director, producer, storyboard artist, and cartoon artist, whose film and television cartoon characters entertained millions of fans worldwide for much of the 20th century."
        },
        {
            name:"J K Rowling",
            novel:"Harry Potter",
            image:"jk.jpg",
            description:"Joanne Rowling (born 31 July 1965), better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history. The books are the basis of a popular film series, over which Rowling had overall approval on the scripts and was a producer on the final films. She also writes crime fiction under the pen name Robert Galbraith."
        },
        {
            name:"Chetan Bhagat",
            novel:"Half Girlfriend",
            image:"1451400853-7826.jpg",
            description:"Chetan Bhagat (born 22 April 1974) is an Indian author and columnist. He was included in Time magazine's list of World's 100 Most Influential People in 2010. He has written nine novels and three non-fiction books. His first novel, Five Point Someone, was published in 2004. His novels have been listed as bestsellers."
        }
    ];

    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav,
            title:'Authors',
            authors
        });
    })


    authorsRouter.get('/:i',function(req,res){
        var i = req.params.i;
        res.render('author.ejs',
        {
            nav,
            title:'Authors',
            author:authors[i]
        });
    });


    return authorsRouter;
}

module.exports = routers;