const mongoose = require('mongoose');
const Book = require('../models/bookModel.js'); // Import the Book model once

const createBook = async (req, res) => {
    try {
        const { name, author, description, genre, imageUrl, bookPdfUrl } = req.body;
        const response = await Book.create({ name, author, description, genre, imageUrl, bookPdfUrl });
        res.status(200).json({
            message: "Successfully uploaded Book",
            success: true,
            data: response
        });
    } catch (err) {
        res.status(400).json({
            message: "Error uploading Book",
            success: false
        });
        console.error(err);
    }
};

const updateBook = async (req, res) => {
    const { id } = req.params;
    const { name, author, imageUrl, bookPdfUrl } = req.body;
    
    try {
        let book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        if (name) book.name = name;
        if (author) book.author = author;
        if (imageUrl) book.imageUrl = imageUrl;
        if (bookPdfUrl) book.bookPdfUrl = bookPdfUrl;

        await book.save();

        res.status(200).json(book);
    } catch (err) {
        console.error('Error updating book:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

const getBook = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findById(id); // Use `findById` for clarity

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({ book }); 
    } catch (err) {
        console.error('Error finding book:', err); // Improved error logging
        res.status(500).json({ // Changed from 400 to 500 for server error
            message: "Error finding book",
            success: false
        });
    }
};

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
        
    } catch (err) {
        res.status(400).json({
            message: "Error in finding books",
            success: false
        });
        console.error(err);
    }
};

const deleteBook = async (req, res) => {
    try {
        const id = req.params.id; // Use `id` instead of `name`
        const result = await Book.deleteOne({ _id: id });

        if (result.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Book not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Successfully deleted book",
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Unable to delete book",
        });
        console.error(err);
    }
};

module.exports = {
    createBook,
    deleteBook,
    getBook,
    updateBook,
    getAllBooks
};
