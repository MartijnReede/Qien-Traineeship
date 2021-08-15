const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("db.db");

db.run("CREATE TABLE IF NOT EXISTS record_labels (label_id INTEGER PRIMARY KEY AUTOINCREMENT, label_name TEXT)");
db.run("CREATE TABLE IF NOT EXISTS artists (artist_id INTEGER PRIMARY KEY AUTOINCREMENT, artist_name TEXT)");
db.run("CREATE TABLE IF NOT EXISTS releases (release_id INTEGER PRIMARY KEY AUTOINCREMENT, release_title TEXT, release_date TEXT, label_id INTEGER, artist_id INTEGER, FOREIGN KEY(label_id) REFERENCES record_labels(label_id) ON UPDATE CASCADE ON DELETE SET NULL, FOREIGN KEY(artist_id) REFERENCES artists(artist_id) ON UPDATE CASCADE ON DELETE SET NULL )");
db.run("CREATE TABLE IF NOT EXISTS tracks (track_id INTEGER PRIMARY KEY AUTOINCREMENT, track_name TEXT, release_id INTEGER, FOREIGN KEY(release_id) REFERENCES releases(release_id) ON UPDATE CASCADE ON DELETE CASCADE)");

//GOED ONTHOUDEN: Wanneer we this.lastID willen gebruiken, moeten we geen arrowfunctie gebruiken maar een function (err) {}.


//Web application functions --------------------------------------------------------------------------------------------

function addRecord(artistName, recordTitle, recordLabel, releaseDate, tracks) {

    //Bestaat de artiest al?
    const artistSQL1 = "SELECT artist_id, artist_name FROM artists WHERE artist_name = ? COLLATE NOCASE";
    const params = [artistName];
    let artistId;
    
    db.all(artistSQL1, params, (err, rows) => {
        if (err){
            console.log(err.message);
        } else {
            
            //Als de artiest niet bestaat, voeg deze dan toe.
            if (rows.length === 0) {
                console.log("DATABASE MESSAGE: Artist doesn't exist in database.");
                
                const artistSQL2 = "INSERT INTO artists (artist_name) VALUES (?)";
                db.run(artistSQL2, params, function(err){
                    if (err) {
                        console.log(err.message);
                    } else {
                        //We hebben hier de artist_id nodig van de artiest die we zojuist hebben toegevoegd!
                        artistId = this.lastID;
                        console.log("DATABASE MESSAGE: New artist added to the database with id: ", this.lastID, ".");
                    }
                });
            //Als de artiest wel bestaat, dan hebben we alsnog de artist_id nodig.    
            } else {
                artistId = rows[0].artist_id;
                console.log("DATABASE MESSAGE: Artist with id: ", rows[0].artist_id, " already exists in the database.");
            }
        }
    });

    //Label check OF label toevoegen als nog niet bestaat.

    //Release toevoegen als not niet bestaat met label_id en artist_id.

    //Tracks toevoegen met release_id.
}

// CLI Functions ---------------------------------------------------------------------------------------------------------

function printArtists(){
    const sql = "SELECT * FROM artists"
    const params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            console.log(`ERROR: ${err.message}`);
        } else {
            rows.forEach((row) => {
                console.log(row);
            });
        }
    });
}

function printLabels(){

}

function printReleases(){

}

function printTracks(){

}

const databaseObj = {
    addRecord: addRecord,
    printArtists: printArtists             
}

module.exports = databaseObj;