const express = require("express")
const bodyParser = require('body-parser')
const app = express()

const router = require('./routes/quiz.js');

app.use(bodyParser.json());

app.use(router)

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`run on ${process.env.PORT || 3000}`);
});