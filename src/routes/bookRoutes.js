const express = require("express");
const booksRouter = express.Router();
function router(nav){
    var books = [
        {
            title: "Tom and Jerry",
            author: "Joseph Barbara",
            genre : "Cartoon",
            image: "T.jpg",
            description: "Tom and Jerry is an American animated media franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera. The series centers on the rivalry between the titular characters of a cat named Tom and a mouse named Jerry."
        },
        {
            title: "Harry potter",
            author: "J K Rowling",
            genre : "Fantasy",
            image: "harry.jpg",
            description:"Harry Potter is a series of seven fantasy novels written by British author, J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people) "
        },
        {
            title: "Half Girlfriend",
            author: "Chetan Bhagat",
            genre : "Romance",
            image: "712HEn9SNwL.jpg",
            description:"Half Girlfriend is an Indian English coming of age, young adult romance novel by Indian author Chetan Bhagat. The novel, set in rural Bihar, New Delhi, Patna, and New York, is the story of a Bihari boy in quest of winning over the girl he loves. This is Bhagat's sixth novel which was released on 1 October 2014 by Rupa Publications. The novel has also been published in Hindi and Gujarati."
        }
    ];
    
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            nav,
            title:'Library',
            books
        });
    })
    
    booksRouter.get('/:i',function(req,res){
        var i = req.params.i;
        res.render('book.ejs',
        {
            nav,
            title:'Library',
            book:books[i]
        });
    });

    return booksRouter;
}


module.exports = router;