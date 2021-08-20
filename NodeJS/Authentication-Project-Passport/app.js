/*

Voor deze app gaan we de passport-local strategy gebruiken. 

*/


const express = require("express");
const path = require("path");
const app = express();
const PORT= 8080;

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "/web-pages/home.html"));
   
});


app.listen(PORT);