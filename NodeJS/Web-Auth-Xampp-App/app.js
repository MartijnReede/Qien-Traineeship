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
    const recordLabel = req.body.recordLabel;
    const releaseDate = req.body.releaseDate;
    const tracks = req.body.track;

    (async () => {

        const recordData = await databaseObj.searchRecord(recordTitle);
        console.log(recordData);
        if (recordData){   
            console.log(`Found an existing record with the title: ${recordTitle}, ` + 
                        `only unique records can be added. Adding record is canceled`);
            res.sendFile(path.join(__dirname, "/Web-pages/recordAlreadyExists.html"));
            return; 
        }

        /*
        console.log("Record does not exist yet. Adding record is continued.");

        const artistId = await databaseObj.addArtist(artistName);
        console.log("artistId: ", artistId);

        //const labelId = await databaseObj.addRecordLabel(recordLabel);
        */
    })();

    //databaseObj.addRecord(artistName, recordLabel, releaseTitle, releaseDate, tracks);
    
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





