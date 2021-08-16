const express = require("express");
const databaseObj = require("./database.js");
const path = require("path");
const { printArtists, printLabels, printReleases } = require("./database.js");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// END-POINTS -----------------------------------------------------------------------------------------------------------------

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
    const releaseTitle = req.body.releaseTitle;
    const recordLabel = req.body.recordLabel;
    const releaseDate = req.body.releaseDate;
    //const tracks = req.body.track; // = een array bij meerdere tracks! = een string bij een enkele track.

    databaseObj.addRecord(artistName, recordLabel, releaseTitle, releaseDate);

   res.redirect("/addrecord");
});


app.listen(port, () => {
    console.log("Server is running!");
});

// CLI voor DEV ------------------------------------------------------------------------------------------------------------
 
let args = process.argv.slice(2)[0];

switch (args) {
    case "printall": 
        databaseObj.printArtists();
        databaseObj.printLabels();
        databaseObj.printReleases();
        databaseObj.printTracks();
        break;
    case "printartists":
        printArtists();
        break;
    case "printlabels":
        printLabels();
        break;
    case "printreleases":
        printReleases();
        break;
    case "printtracks":
        printTracks();
        break;
    default:
        console.log(`'${args}' is not a command, please try again!`);        
}






