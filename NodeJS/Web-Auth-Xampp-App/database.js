const mysql = require("mysql2/promise");

let db;

(async () => {

    const dbConfig = {
        host: "localhost",
        port: 3000,
        user: "root",
        password: "",
        database: "vinyl_records_authenticated_app"
    }

    const database = await mysql.createConnection(dbConfig);
    
    //Create database
    await database.execute("CREATE DATABASE IF NOT EXISTS vinyl_records_authenticated_app")
                  .then(console.log("Database created or it already exists."))
                  .catch(err => console.log(err.message));
    
    //Create users table              
    await database.execute("CREATE TABLE IF NOT EXISTS users (user_id INTEGER AUTO_INCREMENT, user_name TEXT, user_email TEXT" +
                          ", user_hash TEXT, user_salt TEXT, PRIMARY KEY(user_id))")
                  .then(console.log("Users table created or it already exists."))
                  .catch(err => console.log(err.message));

    //Create record labels table
    await database.execute("CREATE TABLE IF NOT EXISTS record_labels (label_id INTEGER AUTO_INCREMENT, label_name TEXT, PRIMARY " +
                           "KEY(label_id))")
                  .then(console.log("Record labels table created or it already exists."))
                  .catch(err => console.log(err.message));  
    
    //Create artists table
    await database.execute("CREATE TABLE IF NOT EXISTS artists (artist_id INTEGER AUTO_INCREMENT, artist_name TEXT, PRIMARY " +
                           "KEY(artist_id))")
                  .then(console.log("Artists table created or it already exists."))
                  .catch(err => console.log(err.message));

    //Create records table
    await database.execute("CREATE TABLE IF NOT EXISTS records (record_id INTEGER AUTO_INCREMENT, record_title TEXT, release_date " +
                           "TEXT, label_id INTEGER, artist_id INTEGER, PRIMARY KEY(record_id), CONSTRAINT fk_record_labelid FOREIGN " +
                           "KEY(label_id) REFERENCES record_labels(label_id) ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT " + 
                           "fk_record_artistid FOREIGN KEY(artist_id) REFERENCES artists(artist_id) ON DELETE CASCADE ON UPDATE CASCADE)")
                   .then(console.log("Records table created or it already exists."))
                   .catch(err => console.log(err.message));        

    //Create tracks table
    await database.execute("CREATE TABLE IF NOT EXISTS tracks (track_id INTEGER AUTO_INCREMENT, track_title TEXT, record_id INTEGER, " +
                           "PRIMARY KEY(track_id), CONSTRAINT fk_track_recordid FOREIGN KEY(record_id) REFERENCES records(record_id) " +
                           "ON DELETE CASCADE ON UPDATE CASCADE)")
                           .then(console.log("Tracks table created or it already exists."))
                           .catch(err => console.log(err));

    //Create record collections table (many to many)
    await database.execute("CREATE TABLE IF NOT EXISTS record_collections (collection_item_id INTEGER AUTO_INCREMENT, user_id INTEGER, " +
                           "record_id INTEGER, PRIMARY KEY(collection_item_id), CONSTRAINT fk_userid_userid FOREIGN KEY(user_id) REFERENCES " +
                           "users (user_id) ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT fk_recordid_recordid FOREIGN KEY(record_id) " +
                           "REFERENCES records(record_id) ON DELETE CASCADE ON UPDATE CASCADE)")
                  .then(console.log("Record collection table created or it already exists."))
                  .catch(err => console.log(err.message));

    db = database;
})();

// Check functions -----------------------------------------------------------------------------------------------------

async function checkIfRecordExists(recordTitle){
    const sql = "SELECT record_title FROM records WHERE record_title = ?";
    const params = [recordTitle];
    const data = await db.execute(sql, params).catch(err => console.log(err.message));
      
    if (data[0].length > 0){
        return true;
    }
    return false;         
}

async function checkIfArtistExists(artistName){
    
    const sql = "SELECT artist_name FROM artists WHERE artist_name = ?";
    const params = [artistName];
    const data = await db.execute(sql, params).catch(err => console.log(err.message));
    
    if (data[0].length > 0){
        return true;
    }
    return false;
}

async function checkIfRecordLabelExists(labelName){
    const sql = "SELECT label_name FROM record_labels WHERE label_name = ?";
    const params = [label_name];
    const data = await db.execute(sql, params).catch(err => console.log(err.message));

    if (data[0].length > 0){
        return true;
    }
    return false;
}

async function checkIfUserExists(userName){
    const sql = "SELECT user_name FROM users WHERE user_name = ?";
    const params = [userName];
    const data = await db.execute(sql, params).catch(err => console.log(err.message));

    if (data[0].length > 0){
        return true;
    }
    return false;
}

// Get id functions ----------------------------------------------------------------------------------------------------

async function getRecordId(recordName) {
    const sql = "SELECT record_id FROM records WHERE record_name = ?";
    const params = [recordName];
    const data = await db.execute(sql, params).catch(err => console.log(err.message));

    if (data[0].length > 0){
        return true;
    }
    return false;
}

async function getArtistId(artistName) {
    const sql = "SELECT artist_id FROM artists WHERE artist_name = ?";
    const params = [artistName];
    const data = await db.execute(sql, params).catch(err => console.log(err.message));

    if (data[0].length > 0){
        return true;
    }
    return false;
}

async function getRecordLabelId(labelName) {
    const sql = "SELECT label_id FROM record_labels WHERE label_name = ?";
    const params = [labelName];
    const data = await db.execute(sql, params).catch(err => console.log(err.message));

    if (data[0].length > 0){
        return true;
    }
    return false;
}

async function getUserId(userName) {
    const sql = "SELECT user_id FROM users WHERE user_name = ?";
    const params = [userName];
    const data = await db.execute(sql, params).catch(err => console.log(err.message));

    if (data[0].length > 0) {
        return true;
    }
    return false;
}


// Add data functions ---------------------------------------------------------------------------------------------------

async function addRecord(recordTitle, releaseDate, labelId, artistId){
    const sql = "INSERT INTO records (record_Title, release_date, label_id, artist_id) VALUES (?, ?, ?, ?)";
    const params = [recordTitle, releaseDate, labelId, artistId];

    await db.execute(sql, params).catch(err => console.log(err.message));
}

async function addArtist(artistName){
    const sql = "INSERT INTO artists (artist_name) VALUES (?)";
    const params = [artistName];

    await db.execute(sql, params).catch(err => console.log(err.message));
}

async function addRecordLabel(labelName){
    const sql = "INSERT INTO record_labels (label_name) VALUES (?)";
    const params = [labelName];

    await db.execute(sql, params).catch(err => console.log(err.message));
}

async function addUser(userName, userEmail, userHash, userSalt){
    const sql = "INSERT INTO users (user_name, user_email, user_hash, user_salt) VALUES (?, ?, ?, ?)";
    const params = [userName, userEmail, userHash, userSalt];

    await db.execute(sql, params).catch(err => console.log(err.message));
}

async function addTrack(trackTitle, recordId){
    const sql = "INSERT INTO tracks (track_title, record_id) VALUES (?, ?)";
    const params = [trackTitle, recordId];

    await db.execute(sql, params).catch(err => console.log(err.message));
}

// Exports --------------------------------------------------------------------------------------------------------------

const databaseObj = {
    db:db,
    checkIfRecordExists: checkIfRecordExists,
    checkIfArtistExists: checkIfArtistExists,
    checkIfRecordLabelExists: checkIfRecordLabelExists,
    checkIfUserExists: checkIfUserExists,
    getRecordId: getRecordId,
    getArtistId: getArtistId,
    getRecordLabelId: getRecordLabelId,
    getUserId: getUserId,
    addRecord: addRecord,
    addArtist: addArtist,
    addRecordLabel: addRecordLabel,
    addUser, addUser,
    addTrack, addTrack
}

module.exports = databaseObj;

/*

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("db.db");

db.run("CREATE TABLE IF NOT EXISTS record_labels (label_id INTEGER PRIMARY KEY AUTOINCREMENT, label_name TEXT)");
db.run("CREATE TABLE IF NOT EXISTS artists (artist_id INTEGER PRIMARY KEY AUTOINCREMENT, artist_name TEXT)");
db.run("CREATE TABLE IF NOT EXISTS releases (release_id INTEGER PRIMARY KEY AUTOINCREMENT, release_title TEXT, " +
       "release_date TEXT, label_id INTEGER, artist_id INTEGER, FOREIGN KEY(label_id) REFERENCES record_labels(label_id) " +
       "ON UPDATE CASCADE ON DELETE SET NULL, FOREIGN KEY(artist_id) REFERENCES artists(artist_id) ON UPDATE CASCADE ON DELETE SET NULL )");
db.run("CREATE TABLE IF NOT EXISTS tracks (track_id INTEGER PRIMARY KEY AUTOINCREMENT, track_name TEXT, release_id INTEGER, " +
       "FOREIGN KEY(release_id) REFERENCES releases(release_id) ON UPDATE CASCADE ON DELETE CASCADE)");

//GOED ONTHOUDEN: Wanneer we this.lastID willen gebruiken, moeten we geen arrowfunctie gebruiken maar een function (err) {}.

//Add record functions --------------------------------------------------------------------------------------------

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
                        return;
                    }
                    
                    //We hebben hier de artist_id nodig van de artiest die we zojuist hebben toegevoegd!
                    artistId = this.lastID;
                    console.log("DATABASE MESSAGE: New artist added to the database with id: ", this.lastID, ".");
                    addRecordStep2(artistId, labelName, releaseTitle, releaseDate, tracks);
                    
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
    const labelSQL1 = "SELECT label_id, label_name FROM record_labels WHERE label_name = ? COLLATE NOCASE";
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

    //Bestaat de release al?
    const releaseSQL1 = "SELECT release_id, release_title FROM releases WHERE release_title = ? COLLATE NOCASE";
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
                console.log("DATABASE MESSAGE: Release with id: ", rows[0].release_id, " already exist in the database. Only unique records can be added.");
                /*
                Wanneer er geen release aangemaakt zal worden, maar er wel een nieuwe artiest of label is toegevoegd. Dan moeten
                deze weer worden weggehaald mits er geen andere releases op hun naam staan. We willen geen artiesten of labels
                in de database zonder release.
                
                removeUnnecessaryData(labelId, artistId);
            }
        }
    });
}

function addRecordStep4(releaseId, tracks){
    //Tracks toevoegen met release_id.

    const trackSQL = "INSERT INTO tracks (track_name, release_id) VALUES (?, ?)";

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

//Verwijder artiesten en labels zonder releases.
function removeUnnecessaryData(labelId, artistId){
    
    const labelSQL= "SELECT label_id FROM releases WHERE label_id = ?";
    const labelParams = [labelId];
   
    db.all(labelSQL, labelParams, (err, rows) => {
        if (err){
            console.log(err.message);
        } else {

            if (rows.length === 0) {
                
                //Het label heeft geen releases en zal daarom verwijdert worden. 
                const delLabelSQL = "DELETE FROM record_labels WHERE label_id = ?";
                const delLabelParams = [labelId];

                db.run(delLabelSQL, delLabelParams, function(err){
                    if (err){
                        console.log(err.message);
                    } else {
                        console.log("DATABASE MESSAGE: The record label that was added for this release is removed from the database since it has no released records.");
                        console.log("DATABASE MESSAGE: Row deleted: ", this.changes, ".");
                    }
                });
            } 
        }
    });

    const artistSQL= "SELECT artist_id FROM releases WHERE artist_id = ?";
    const artistParams = [artistId];

    db.all(artistSQL, artistParams, (err, rows) => {
        if (err) {
            console.log(err.message);
        } else { 
            
            if (rows.length === 0) {
                
                //De artiest heeft geen releases en zal daarom verwijdert worden. 
                const delArtistSQL = "DELETE FROM artists WHERE artist_id = ?";
                const delArtistParams = [artistId];

                db.run(delArtistSQL, delArtistParams, function(err){
                    if (err){
                        console.log(err.message);
                    } else {
                        console.log("DATABASE MESSAGE: The artist that was added for this release is removed from the database since it has no releases.");
                        console.log("DATABASE MESSAGE: Row deleted: ", this.changes, ".");
                    }
                });
            } 
        }
    });
}

// Search functions -----------------------------------------------------------------------------------------------------------

function searchForData(searchInput, category, res){

    //Geeft op index[0] een waarde mee om vast te stellen om wat voor soort zoekopdracht het gaat.
    let JSONDataObjArray = [{searchType: category}]; 

    switch(category) {
        
        case "records":
            const recordParams = [searchInput];
            const recordSQL = "SELECT release_id, release_title, release_date, releases.artist_id, artist_name, releases.label_id, " +
                              "label_name FROM releases INNER JOIN record_labels ON record_labels.label_id = releases.label_id INNER " +
                              "JOIN artists ON artists.artist_id = releases.artist_id WHERE release_title LIKE '%' || ? || '%' COLLATE NOCASE";
        
            db.all(recordSQL, recordParams, (err, rows) => {
                if (err) {
                    console.log(err.message);
                } else {
                    rows.forEach(function (row){
                        JSONDataObjArray.push({
                            releaseId: row.release_id,
                            releaseTitle: row.release_title,
                            releaseDate: row.release_date,
                            artistId: row.artist_id,
                            artistName: row.artist_name,
                            labelId: row.label_id,
                            labelName: row.label_name
                        });
                    });
                    //Stuurt de response pas op het moment dat de data gevonden is. 
                    res.send(JSONDataObjArray);     
                }
            });
            break;

        case "artists":
            const artistParams = [searchInput];
            const artistSQL = "SELECT artist_id, artist_name FROM artists WHERE artist_name LIKE '%' || ? || '%' COLLATE NOCASE"; 
            
            db.all(artistSQL, artistParams, (err, rows) => {
                if(err){
                    console.log(err.message);
                } else {
                    rows.forEach((row) => {
                        JSONDataObjArray.push({
                            artistId: row.artist_id,
                            artistName: row.artist_name
                        });
                    });
                    //Stuurt de response pas op het moment dat de data gevonden is. 
                    res.send(JSONDataObjArray);
                }
            });
            break;

        case "recordLabels":

            const labelParams = [searchInput];
            const labelSQL = "SELECT label_id, label_name FROM record_labels WHERE label_name LIKE '%' || ? || '%' COLLATE NOCASE";

            db.all(labelSQL, labelParams, (err, rows) => {
                if (err){
                    console.log(err.message);
                } else {
                    rows.forEach((row) => {
                        JSONDataObjArray.push({
                            
                                labelId: row.label_id,
                                labelName: row.label_name
                        });
                    });
                    res.send(JSONDataObjArray);
                }
            });
            break;

        case "tracks":
            
            const trackParams = [searchInput];
            const trackSQL = "SELECT track_id, track_name, tracks.release_id, release_title, releases.artist_id, artist_name " + 
                             "FROM tracks INNER JOIN releases ON releases.release_id = tracks.release_id INNER JOIN artists ON " +
                             "artists.artist_id = releases.artist_id WHERE track_name LIKE '%' || ? || '%' COLLATE NOCASE";

            db.all(trackSQL, trackParams, (err, rows) => {
                if (err){
                    console.log(err.message);
                } else {
                    rows.forEach((row) => {           
                        JSONDataObjArray.push({
                            trackId: row.track_id,
                            trackName: row.track_name,
                            releaseId: row.release_id,
                            releaseTitle: row.release_title,
                            artistId: row.artist_id,
                            artistName: row.artist_name
                        });
                        
                    });
                    res.send(JSONDataObjArray);
                }
            });
            break;        
    }
}

function getRecordData(recordId, res){
    
    const sql1 = "SELECT release_id, release_title, release_date, releases.artist_id, artist_name, releases.label_id, " +
                 "label_name FROM releases INNER JOIN record_labels ON record_labels.label_id = releases.label_id INNER " +
                 "JOIN artists ON artists.artist_id = releases.artist_id WHERE release_id = ?";
    const params1 = [recordId];
    
    const JSONObjDataArray = [];

    db.get(sql1, params1, (err, row)=> {
        if (err){
            console.log(err.message);
        } else {
            JSONObjDataArray.push({
                releaseId: row.release_id,
                releaseTitle: row.release_title,
                releaseDate: row.release_date,
                artistId: row.artist_id,
                artistName: row.artist_name,
                labelId: row.label_id,
                labelName: row.label_name
            });

            const sql2 = "SELECT * FROM tracks WHERE release_id = ?";
            const params2 = [recordId];

            db.all(sql2, params2, (err, rows) =>{
                if (err){
                    console.log(err.message);
                } else {
                    let trackCounter = 1;
                    rows.forEach((row)=> {
                        JSONObjDataArray.push({
                            trackId: row.track_id,
                            trackNumber: trackCounter,
                            trackName: row.track_name
                        });
                        trackCounter++;
                    });

                    res.send(JSONObjDataArray);
                }
            }); 
        }
    });
}

function getArtistData(artistId, res){
   
    const releasesSQL = "SELECT release_id, release_title, release_date, label_name, artists.artist_name FROM releases INNER " + 
                        "JOIN artists ON releases.artist_id = artists.artist_id INNER JOIN record_labels ON releases.label_id = " +
                        "record_labels.label_id WHERE releases.artist_id = ?";
    const releasesParams = [artistId];
    JSONDataObjArray = [];

    db.all(releasesSQL, releasesParams, (err, rows) => {
        if (err){
            console.log(err.message);
        } else {
            rows.forEach((row) => {
                JSONDataObjArray.push({
                    releaseId: row.release_id,
                    releaseTitle: row.release_title,
                    releaseDate: row.release_date,
                    artistName: row.artist_name,
                    labelName: row.label_name
                });
            });
                    
            res.send(JSONDataObjArray);  
        }
    });
}

function getLabelData(labelId, res){

    let JSONDataObjArray = [];
    const releasesSQL = "SELECT release_id, release_title, release_date, artist_name, label_name FROM releases INNER JOIN record_labels " +
                        "ON releases.label_id = record_labels.label_id INNER JOIN artists ON releases.artist_id = artists.artist_id WHERE " +
                        "releases.label_id = ?";
    const releasesParams = [labelId];

    db.all(releasesSQL, releasesParams, (err, rows) => {
        if (err){
            console.log(err.message);
        } else {
            rows.forEach((row) => {
                JSONDataObjArray.push({
                    labelName: row.label_name,
                    releaseId: row.release_id,
                    releaseTitle: row.release_title,
                    releaseDate: row.release_date,
                    artistName: row.artist_name
                });
            });
            res.send(JSONDataObjArray);
        }
    });
}

// CLI functions --------------------------------------------------------------------------------------------------------------

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
    printReleases: printReleases,
    printTracks: printTracks,
    searchForData: searchForData,
    getRecordData: getRecordData,
    getArtistData: getArtistData,
    getLabelData: getLabelData
}

module.exports = databaseObj;

*/
