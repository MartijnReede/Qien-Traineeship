
const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/Web-pages/index.html"));
});

app.post("/newUser", (req, res) => {
    const userName = req.body.userName;
    const favAnimal = req.body.favAnimal;

});

app.listen(port, () => {
    console.log("Server is running!");
});








