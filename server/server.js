const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
dotenv.config()
const port=process.env.PORT || 3000;
const app=express();
const bookRoute=require('./routes/bookRoute');

const connectDb=require('./config/database')

connectDb();
app.use(cors());
app.use(express.json());
app.use("/book",bookRoute)
app.get("/",(req,res)=>{
    console.log("I am her Sahil Omanwar ");
})
app.listen(port,function(){
    console.log(`LIstening at port ${port}`)
})

