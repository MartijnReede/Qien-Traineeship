const express = require("express");
const databaseObj = require("./database.js");
const path = require("path");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/Web-pages/index.html"));
});

app.get("/digrecords", (req, res) => {
    res.sendFile(path.join(__dirname, "/Web-pages/digRecords.html"));
});

app.get("/addrecord",(req, res) => {
    res.sendFile(path.join(__dirname, "/Web-pages/addRecord.html"));
});

app.post("/addrecord/addRecordToDatabase", (req, res) => {
    
    const artistName = req.body.artistName;
    //const recordTitle = req.body.recordTitle;
    //const recordLabel = req.body.recordLabel;
    //const releaseDate = req.body.releaseDate;
    //const tracks = req.body.track; // = een array bij meerdere tracks! = een string bij een enkele track.

    databaseObj.addRecord(artistName);

   res.redirect("/addrecord");
});


app.listen(port, () => {
    console.log("Server is running!");
});








