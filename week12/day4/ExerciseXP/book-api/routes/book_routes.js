const express = require("express");
const {
    readAll,
    read,
    create
} =require('../controllers/books.controller.js')


const router = express.Router();

// all books
router.get('/api/books', readAll);

// book by id
router.get('/api/books/:bookId',read);

// create 
router.post('/api/books', create);



module.exports = router;