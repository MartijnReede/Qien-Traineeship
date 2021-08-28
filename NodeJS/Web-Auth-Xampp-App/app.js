const express = require("express");
const databaseObj = require("./database.js");
const path = require("path");
const { db } = require("./database.js");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/Public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/Web-pages/index.html"));
});

app.get("/addrecord",(req, res) => {
    res.sendFile(path.join(__dirname, "/Web-pages/addRecord.html"));
});

app.post("/addrecord/addRecordToDatabase", (req, res) => {
    
    const artistName = req.body.artistName;
    const recordTitle = req.body.recordTitle;
    const labelName = req.body.recordLabel;
    const releaseDate = req.body.releaseDate;
    const tracks = req.body.track;

    (async () => {
        
        const recordExistsInDatabase = await databaseObj.checkIfRecordExists(recordTitle);
        if (recordExistsInDatabase){
            res.send(path.join(__dirname, "/Web-pages/recordAlreadyExists.html"));
            return;
        }

        const artistExistsInDatabase = await databaseObj.checkIfArtistExists(artistName);
        if (!artistExistsInDatabase) {
            await databaseObj.addArtist(artistName);
        }

        const artistId = databaseObj.getArtistId(artistName);

        const labelExistsInDatabase = await databaseObj.checkIfRecordLabelExists(labelName);
        if (!labelExistsInDatabase){
            await databaseObj.addRecordLabel(labelName);
        }

        const labelId = await databaseObj.getRecordLabelId(labelName);

        await databaseObj.addRecord(recordTitle, releaseDate, labelId, artistId);
        const recordId = await databaseObj.getRecordId(recordTitle);

        try {
            tracks.forEach((trackTitle) => {
                await databaseObj.addTrack(trackTitle, recordId);
            });
        } catch {
            await databaseObj.addTrack(tracks, recordId);
        }

        res.send(path.join(__dirname, "/Web-pages/recordAddedToDatabase.html"));
    })();


    
   res.redirect("/addrecord");
});


app.listen(port);


/*
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
*/





