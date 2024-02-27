const express = require("express");
const bp = require("body-parser");
const post_router= require("./routes/post_routes.js");

const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

// app.use("/", express.static(__dirname + "/public"));

app.listen(3000);

app.use(post_router);