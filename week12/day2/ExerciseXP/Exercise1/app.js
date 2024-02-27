const express = require("express")

const app = express()

const indexRouter = require('./routes/index.js');

app.use(indexRouter)

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`run on ${process.env.PORT || 3000}`);
});

