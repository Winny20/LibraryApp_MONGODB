                                                                                    //mongoosejs.com website can be refered for more !!!!   

//Accessing Mongoose package
const mongoose = require('mongoose');    

//Database connection
mongoose.connect('mongodb://localhost:27017/library');              //library is the db we gonna create.

//Schema definition
const Schema = mongoose.Schema;                         //accessing schema which is a package of mongoose using Constructor Schema.

const BookSchema = new Schema({                     //things 
    title: String,
    author: String,
    genre: String,
    image: String                                      //image will be saved corresp to its image name, hence came string here.
});

//Model creation
var Bookdata = mongoose.model('bookdata',BookSchema);  // here we pass 2 arguments: collection name and schema that we created above
                                                      // using these two a model named BOOKDATA is created(can give anyname)             
                                                      //instead of bookdata, the db will contain as bookdatas
                                                      // ie...database automatically convert names to plural forms.
module.exports = Bookdata;