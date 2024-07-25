const express=require('express');
const router=express.Router();


const {  createBook, deleteBook,getBook, updateBook, getAllBooks} =require('../controller/bookController');


router.post('/createBook',createBook);
router.get('/getBook/:id', getBook);
router.put('/updateBook/:id',updateBook)
router.delete('/deleteBook/:id',deleteBook);
router.get('/all-books',getAllBooks)



module.exports=router;