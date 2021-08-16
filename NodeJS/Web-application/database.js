const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("db.db");

db.run("CREATE TABLE IF NOT EXISTS record_labels (label_id INTEGER PRIMARY KEY AUTOINCREMENT, label_name TEXT)");
db.run("CREATE TABLE IF NOT EXISTS artists (artist_id INTEGER PRIMARY KEY AUTOINCREMENT, artist_name TEXT)");
db.run("CREATE TABLE IF NOT EXISTS releases (release_id INTEGER PRIMARY KEY AUTOINCREMENT, release_title TEXT, release_date TEXT, label_id INTEGER, artist_id INTEGER, FOREIGN KEY(label_id) REFERENCES record_labels(label_id) ON UPDATE CASCADE ON DELETE SET NULL, FOREIGN KEY(artist_id) REFERENCES artists(artist_id) ON UPDATE CASCADE ON DELETE SET NULL )");
db.run("CREATE TABLE IF NOT EXISTS tracks (track_id INTEGER PRIMARY KEY AUTOINCREMENT, track_name TEXT, release_id INTEGER, FOREIGN KEY(release_id) REFERENCES releases(release_id) ON UPDATE CASCADE ON DELETE CASCADE)");

//GOED ONTHOUDEN: Wanneer we this.lastID willen gebruiken, moeten we geen arrowfunctie gebruiken maar een function (err) {}.

//Web application functions --------------------------------------------------------------------------------------------

function addRecord(artistName, labelName, releaseTitle, releaseDate, tracks) {

    //Bestaat de artiest al?
    const artistSQL1 = "SELECT artist_id, artist_name FROM artists WHERE artist_name = ? COLLATE NOCASE";
    const artistParams = [artistName];
    let artistId;
    
    db.all(artistSQL1, artistParams, (err, rows) => {
        if (err){
            console.log(err.message);
        } else {
            
            //Als de artiest niet bestaat, voeg deze dan toe.
            if (rows.length === 0) {
                console.log("DATABASE MESSAGE: Artist doesn't exist in database.");
                
                const artistSQL2 = "INSERT INTO artists (artist_name) VALUES (?)";
                db.run(artistSQL2, artistParams, function(err){
                    if (err) {
                        console.log(err.message);
                    } else {
                        //We hebben hier de artist_id nodig van de artiest die we zojuist hebben toegevoegd!
                        artistId = this.lastID;
                        console.log("DATABASE MESSAGE: New artist added to the database with id: ", this.lastID, ".");
                        addRecordStep2(artistId, labelName, releaseTitle, releaseDate, tracks);
                    }
                });
            //Als de artiest wel bestaat, dan hebben we alsnog de artist_id nodig.    
            } else {
                artistId = rows[0].artist_id;
                console.log("DATABASE MESSAGE: Artist with id: ", rows[0].artist_id, " already exists in the database.");
                addRecordStep2(artistId, labelName, releaseTitle, releaseDate, tracks);
            }
        }
    });
}

function addRecordStep2(artistId, labelName, releaseTitle, releaseDate, tracks) {

    //Bestaat het label al?
    const labelSQL1 = "SELECT label_id, label_name FROM record_labels WHERE label_name = ?";
    const labelParams = [labelName];
    let labelId;

    db.all(labelSQL1, labelParams, (err, rows) => {
        if (err) {
            console.log(err.message);
        } else {

            //Als het label nog niet bestaat, voeg deze dan toe. 
            if (rows.length === 0) {
                console.log("DATABASE MESSAGE: Label doesn't exist in the database.")
                const labelSQL2 = "INSERT INTO record_labels (label_name) values (?)";
                
                db.run(labelSQL2, labelParams, function(err){
                    if (err) {
                        console.log(err.message);
                    } else {
                        labelId = this.lastID;
                        console.log("DATABASE MESSAGE: New label added to the database with id: ", this.lastID, ".");
                        addRecordStep3(artistId, labelId, releaseTitle, releaseDate, tracks);
                    }
                });

            //Als het label al wel bestaat, dan hebben we alsnog het label_id nodig.     
            } else {
                labelId = rows[0].label_id;
                console.log("DATABASE MESSAGE: Label with id: ", rows[0].label_id, " already exist in the database.");
                addRecordStep3(artistId, labelId, releaseTitle, releaseDate, tracks);
            }

        }
    });
}
    
function addRecordStep3(artistId, labelId, releaseTitle, releaseDate, tracks){

    //Release toevoegen als nog niet bestaat met label_id en artist_id.
    const releaseSQL1 = "SELECT release_id, release_title FROM releases WHERE release_title = ?";
    const releaseParams1 = [releaseTitle];
    let releaseId;

    db.all(releaseSQL1, releaseParams1, (err, rows) => {
        if (err) {
            console.log(err.message);
        } else {
            //Als de release nog niet bestaat, voeg deze dan toe. 
            if (rows.length === 0) {
                console.log("DATABASE MESSAGE: Release doesn't exist in the database.");
                const releaseSQL1 = "INSERT INTO releases (release_title, release_date, label_id, artist_id) VALUES (?, ?, ?, ?)";
                const releaseParams2 = [releaseTitle, releaseDate, labelId, artistId];
                db.run(releaseSQL1, releaseParams2, function(err){
                    if (err){
                        console.log(err.message);
                    } else {
                        releaseId = this.lastID;
                        console.log("DATABASE MESSAGE: New release added to the database with id: ", this.lastID, ".");
                        addRecordStep4(releaseId, tracks);
                    }
                });
            
            //Als de release al wel bestaat.
            } else {
                console.log("DATABASE MESSAGE: Release with id: ", rows[0].release_id, " already exist in the database.");
                /*
                Wanneer er geen release aangemaakt zal worden, maar er wel een nieuwe artiest of label is toegevoegd. Dan moeten
                deze weer worden weggehaald mits er geen andere releases op hun naam staan. We willen geen artiesten of labels
                in de database zonder release.
                */
                removeUnnecessaryData(); //////////////////////////////////////////////////////////////////////////////////////////////////////
            }
        }
    });
}

function addRecordStep4(releaseId, tracks){
    //Tracks toevoegen met release_id.

    const trackSQL = "INSERT INTO tracks (track_name, realease_id) VALUES (?, ?)";

    try {
        //Multiple tracks (array).
        tracks.forEach((track)=> {
            const trackParams = [track, releaseId];
            db.run(trackSQL, trackParams, function(err) {
                if (err){
                    console.log(err.message);
                } else {
                    console.log("DATABASE MESSAGE: New track added to the database with id: ", this.lastID, ".");
                }
            });
        });

    } catch {
        //Single track (string).
        const trackParams = [tracks, releaseId];
        db.run(trackSQL, trackParams, function(err){
            if (err){
                console.log(err.message);
            } else {
                console.log("DATABASE MESSAGE: New track added to the database with id: ", this.lastID, ".");
            }
        });
    }
}

function removeUnnecessaryData(){

}

    //Check voor artiesten en labels zonder releases.

// CLI Functions ---------------------------------------------------------------------------------------------------------

function printArtists(){
    const sql = "SELECT * FROM artists"
    const params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            console.log(`ERROR: ${err.message}`);
        } else {
            console.log("\n\nARTISTS:\n");
            rows.forEach((row) => {
                console.log(row);
            });
        }
    });
}

function printLabels(){
    const sql= "SELECT * FROM record_labels";
    const params = [];
    db.all(sql, params, (err, rows) => {
        if (err){
            console.log(err.message);
        } else {
            console.log("\n\nRECORD LABELS:\n");
            rows.forEach((row)=>{
                console.log(row);
            });
        }
    });
}

function printReleases(){
    const sql = "SELECT * FROM releases";
    const params = [];
    db.all(sql, params, (err, rows) => {
        if (err){
            console.log(err.message);
        } else {
            console.log("\n\nRELEASES: \n");
            rows.forEach((row) => {
                console.log(row);
            });
        }
    });
}

function printTracks(){
    const sql = "SELECT * FROM tracks";
    const params = [];
    db.all(sql, params, (err, rows) => {
        if (err){
            console.log(err.message);
        } else {
            console.log("\n\nTRACKS:\n");
            rows.forEach((row) => {
                console.log(row);
            });
        }
    });
}

// Exports ----------------------------------------------------------------------------------------------------------------

const databaseObj = {
    addRecord: addRecord,
    printArtists: printArtists,
    printLabels: printLabels,
    printReleases: printReleases
}

module.exports = databaseObj;