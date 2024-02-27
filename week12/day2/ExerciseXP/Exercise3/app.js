const express = require("express")
const bodyParser = require('body-parser')
const app = express()

const indexRouter = require('./routes/books.js');

app.use(bodyParser.json());

app.use(indexRouter)

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`run on ${process.env.PORT || 3000}`);
});