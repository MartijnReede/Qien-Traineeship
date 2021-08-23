const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("db.db");

db.run("CREATE TABLE IF NOT EXISTS users (user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name TEXT, user_hash TEXT, user_salt TEXT)");

function saveNewUser(user){

    const sql = "INSERT INTO users (user_name, user_hash, user_salt) VALUES (?, ?, ?)";
    const params = [user.username, user.hash, user.salt];

    db.run(sql, params, (err) => {
        if (err){
            console.log(err.message);
        } else {
            console.log("DATABASE MESSAGE: User added to the database.");
        }
    });
}

function printAll(){
    const sql = "SELECT * FROM users";
    const params = [];

    db.all(sql, params, (err, rows) => {
        if (err){
            console.log(err.message);
        } else {
            rows.forEach((row) => {
                console.log(row);
            });
        }
    })
}

const dbObj = {
    db: db,
    printAll: printAll,
    saveNewUser: saveNewUser
}

module.exports = dbObj;