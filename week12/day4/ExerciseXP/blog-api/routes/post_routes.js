const express = require("express");
const {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
} =require('../controllers/controller.js')


const router = express.Router();

// all articles
router.get('/posts', getAllArticles);

// article by id
router.get('/posts/:id',getArticleById);

// create article
router.post('/posts', createArticle);

//update article
router.put('/posts/:id', updateArticle);

//delete article
router.delete('/posts/:id', deleteArticle);




module.exports = router;