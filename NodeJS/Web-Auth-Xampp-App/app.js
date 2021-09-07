const express = require("express");
const databaseObj = require("./database.js");
const path = require("path");
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
            res.redirect("/addrecord/recordalreadyexists");
            return;
        }

        const artistExistsInDatabase = await databaseObj.checkIfArtistExists(artistName);
        if (!artistExistsInDatabase) {
            await databaseObj.addArtist(artistName);
        }
        const artistId = await databaseObj.getArtistId(artistName);

        const labelExistsInDatabase = await databaseObj.checkIfRecordLabelExists(labelName);
        if (!labelExistsInDatabase){
            await databaseObj.addRecordLabel(labelName);
        }
        const labelId = await databaseObj.getRecordLabelId(labelName);

        await databaseObj.addRecord(recordTitle, releaseDate, labelId, artistId);
        const recordId = await databaseObj.getRecordId(recordTitle);

        try {
            tracks.forEach((trackTitle) => {
                databaseObj.addTrack(trackTitle, recordId);
            });
        } catch {
                databaseObj.addTrack(tracks, recordId);
        }
        res.redirect("/addrecord/recordaddedtodatabase");
    })();
});

app.get("/addrecord/recordaddedtodatabase", (req, res) => {
    res.sendFile(path.join(__dirname, "/Web-pages/recordAddedToDatabase.html"));
});

app.get("/addrecord/recordalreadyexists", (req, res) => {
    res.sendFile(path.join(__dirname, "/Web-pages/recordalreadyexists.html"))
});

app.get("/digrecords", (req, res) => {
    res.sendFile(path.join(__dirname, "/Web-pages/digRecords.html"));
});

app.get("/digrecords/displayrecord/:recordId", (req, res)=> {
    res.sendFile(path.join(__dirname, "/Web-pages/displayRecord.html"));
});

app.get("/digrecords/displayrecord/getrecorddata/:recordid", (req, res) => {
    const recordId = req.params.recordid;
    
    (async () => { 
        const jsonData = await databaseObj.getRecordById(recordId);
        res.send(jsonData);
    })();
});

app.get("/searchrecords/:searchinput/:category", (req, res) => {
    const searchInput = req.params.searchinput;
    const category = req.params.category;
    let jsonData = [{searchType: category}]; 
    let data;

    (async () => {
        switch(category){
            case "records":
                data = await databaseObj.searchRecords(searchInput);
                break;
            case "artists":
                data = await databaseObj.searchArtists(searchInput);
                break;
            case "recordLabels":
                data = await databaseObj.searchRecordLabels(searchInput);
                break;
            case "tracks":
                data = await databaseObj.searchTracks(searchInput);
                break;        
        }

        data.forEach(row => {
            jsonData.push(row);
        })
        res.send(jsonData);
    })();
});

app.listen(port);

/*
//DIG RECORDS




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

//RUNNING SERVER

app.listen(port, () => {
    console.log("Server is running!");
});
*/