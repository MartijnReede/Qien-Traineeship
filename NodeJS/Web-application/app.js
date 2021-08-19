const express = require("express");
const databaseObj = require("./database.js");
const path = require("path");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/Public"));

// END-POINTS -----------------------------------------------------------------------------------------------------------------

//HOME

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/Web-pages/index.html"));
});

//DIG RECORDS

app.get("/digrecords", (req, res) => {
     res.sendFile(path.join(__dirname, "/Web-pages/digRecords.html"));
});

app.get("/digrecords/displayrecord/:recordId", (req, res)=> {
    res.sendFile(path.join(__dirname, "/Web-pages/displayRecord.html"));
});

app.get("/digrecords/displayrecord/getrecorddata/:recordid", (req, res) => {
    const recordId = req.params.recordid;
    databaseObj.getRecordData(recordId, res);
});

app.get ("/digrecords/displayartist/:artistid", (req, res) => {
    res.sendFile(path.join(__dirname, "/Web-pages/displayArtist.html"));
});

app.get("/digrecords/displayartist/getartistdata/:artistid", (req, res) => {
    const artistId = req.params.artistid;
    databaseObj.getArtistData(artistId, res);
});

app.get("/digrecords/displaylabel/:labelid", (req, res) => {
    res.sendFile(path.join(__dirname, "/Web-pages/displayLabel.html"));
});

app.get("/digrecords/displaylabel/getlabeldata/:labelid", (req, res) => {
    const labelId = req.params.labelid;
    databaseObj.getLabelData(labelId, res);
});

//ADD RECORDS

app.get("/addrecord",(req, res) => {
    res.sendFile(path.join(__dirname, "/Web-pages/addRecord.html"));
});

app.post("/addrecord/addRecordToDatabase", (req, res) => {
    
    const artistName = req.body.artistName;
    const releaseTitle = req.body.releaseTitle;
    const recordLabel = req.body.recordLabel;
    const releaseDate = req.body.releaseDate;
    const tracks = req.body.track;

    databaseObj.addRecord(artistName, recordLabel, releaseTitle, releaseDate, tracks);

   res.redirect("/addrecord");
});

//SEARCH RECORDS

app.get("/searchrecords/:searchinput/:category", (req, res) => {
    const searchInput = req.params.searchinput;
    const category = req.params.category;
    databaseObj.searchForData(searchInput,category, res);
});

//RUNNING SERVER

app.listen(port, () => {
    console.log("Server is running!");
});

//CLI voor DEV ------------------------------------------------------------------------------------------------------------
 
let args = process.argv.slice(2)[0];

switch (args) {
    case "printall": 
        databaseObj.printArtists();
        databaseObj.printLabels();
        databaseObj.printReleases();
        databaseObj.printTracks();
        break;
    case "printartists":
        databaseObj.printArtists();
        break;
    case "printlabels":
        databaseObj.printLabels();
        break;
    case "printreleases":
        databaseObj.printReleases();
        break;
    case "printtracks":
        databaseObj.printTracks();
        break;
    case undefined:
        break;    
    default:
        console.log(`'${args}' is not a command, please try again!`);        
}






