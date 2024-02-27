const express = require ("express")
const bodyParser = require ("body-parser")


const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const books = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedYear: 1960
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949
    },
    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishedYear: 1925
    }
];

//Read all
app.get('/book-api/books',(req, res)=>{
    res.send(books)
    res.json(books)

})

//Read
app.get('/book-api/books/:bookId',(req, res)=>{
    console.log(req.params);
    const { bookId } = req.params;
    const book = books.find((book)=> book.id == bookId);

    if(!book){
        res.status(404).json({msg:"product not found"})
    }
    res.send(book)
    res.status(200).json(book)
})

//Create
app.post('/book-api/books',(req, res)=>{
    console.log(req.body);
    
        const {title, author, publishedYear}= req.body
    
        const newBook ={
            id : books.length +1,
            title,
            author,
            publishedYear
        } ;    
        books.push(newBook);
        res.status(201).json(books)
    
    })

app.listen(5001, () => {
    console.log(`Server is running on port 5001`);
  });
