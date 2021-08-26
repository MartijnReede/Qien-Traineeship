const express = require("express");
const databaseObj = require("./database.js");
const path = require("path");
const app = express();
const port = 8080;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/web-pages/index.html"));
});

app.get("/getallusers", (req, res) => {
    (async () => {
        let data = await databaseObj.getAllUsers();
        res.send(data[0]);
    })()
        .catch(err => console.log(err.message));
});

app.listen(port);