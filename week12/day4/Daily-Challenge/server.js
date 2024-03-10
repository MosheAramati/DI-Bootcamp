const express = require("express");
const bp = require("body-parser");
const router= require("./routes/router.js");

const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

// app.use("/", express.static(__dirname + "/public"));
app.use(router);

app.listen(3000, ()=>{
    console.log("listening");
});

