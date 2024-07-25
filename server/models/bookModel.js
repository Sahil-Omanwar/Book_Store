const mongoose=require("mongoose");

const BookSchema=new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    author:{
      type:String,
      required:true
    },
    description:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    imageUrl: {
        type: String,
        required: true// You can set this to true if the imageUrl is mandatory
    },
    bookPdfUrl: {
        type: String,
        required: true // You can set this to true if the bookPdfUrl is mandatory
    }

})

const Book=mongoose.model('Book',BookSchema);
module.exports=Book;