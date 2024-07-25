const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const connectDb=async(req,res)=>{
    try{
         await mongoose.connect(process.env.DATABASE_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
         })

         console.log("Connection to database successfull");
    }catch(err){
        console.log("Cannot connect to database ");
    }
}

module.exports=connectDb;