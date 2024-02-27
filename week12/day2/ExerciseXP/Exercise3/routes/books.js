const express = require('express')
const router = express.Router()

const books = [
{
    id: 1,
    title: 'harry potter',
    author: 'jk rolling',

}
]

// get all books items
router.get('/books', (req, res) => {
  res.json(books);
});

// add new book
router.post('/books', (req, res) => {
    const { title, author } = req.body;
    const newBook = { id: books.length + 1, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
    res.json(books)
});

//update book item by ID
router.put('/books/:id',(req,res)=>{
    const { id } = req.params;
    const { title, author } = req.body;
    const bookToUpdate = books.find(book => book.id === parseInt(id));
    if (!bookToUpdate) {
      return res.status(404).json({ message: 'Book not found' });
    }
    bookToUpdate.title = title;
    bookToUpdate.author = author;
    res.json(bookToUpdate);
    res.json(books)
})

// Delete a book item by ID
router.delete('/books/:id', (req, res) => {
    const { id } = req.params;
  const index = books.findIndex(book => book.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }
  books.splice(index, 1);
  res.json({ message: 'Book deleted successfully' });
  });

module.exports = router