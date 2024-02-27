const { db } = require ('../config/pgconnect.js');
const{
    _getAllArticles,
    _getArticleById,
    _createArticle,
    _updateArticle,
    _deleteArticle
}= require('../models/models.js')

const getAllArticles = (req, res) => {
    _getAllArticles()
    .then(data =>{
        res.json(data)
    })
    .catch(err=>{
        console.log(err)
        res.status(404).json({message: 'not found'})
    })

    // db.select().from('articles')
    // .then(articles =>
    //         res.send(articles)
    // )
}

const getArticleById = (req,res)=>{
    const {id}= req.params;
    _getArticleById(id)
    .then(data =>{
        res.json(data)
    })
    .catch(err=>{
        console.log(err)
        res.status(404).json({message: 'not found'})
    })
    // db('articles')
    // .where({id: id})
    // .then(article =>
    //         res.send(article)
    // )
}


const createArticle = (req, res) => {
    const { title, content } = req.body;
  // Insert the new article into the database using Knex
//   db('articles')
//     .insert({ title: title, content: content })
    _createArticle(title, content)
    .then(() => {
      // Successful insertion
      res.status(201).json({ message: 'Article created successfully' });
    })
    .catch((error) => {
      // Error handling
      console.error('Error creating article:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
}

const updateArticle = (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    // db('articles')
    //     .where({ id: id })
    //     .update({
    //         title: title,
    //         content: content
    //     })
    _updateArticle(id, title, content)
    .then(() => {
        // Successful insertion
        res.status(201).json({ message: 'Article updated successfully' });
      })
      .catch((error) => {
        // Error handling
        console.error('Error updating article:', error);
        res.status(500).json({ error: 'Internal server error' });
      });
        // .then(() => {
        //     // After updating the post, fetch the updated post from the database
        //     return db('articles').where({ id: id }).first();
        // })
        // .then(updatedPost => {
        //     // Send the updated post as the response
        //     res.json(updatedPost);
        // })
        // .catch(error => {
        //     // Handle errors
        //     console.error('Error updating post:', error);
        //     res.status(500).json({ error: 'Internal server error' });
        // });
}

const deleteArticle = (req, res) => {
    const { id } = req.params;

   // Delete the post from the database using Knex
//    db('articles')
//    .where({ id: id })
//    .del()
    _deleteArticle(id)
   .then(() => {
       // Successful deletion
       res.status(204).end(); // No content to send back
   })
   .catch((error) => {
       // Error handling
       console.error('Error deleting post:', error);
       res.status(500).json({ error: 'Internal server error' });
   });
}

module.exports ={
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
}