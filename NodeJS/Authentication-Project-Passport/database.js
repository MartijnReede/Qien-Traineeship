const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("db.db");

db.run("CREATE TABLE IF NOT EXISTS users (user_id PRIMARY KEY AUTOINCREMENT, user_name TEXT, user_password TEXT, user_salt TEXT)");

function addUser(){

}

const dbObj = {
    db: db,
    addUser: addUser
}

module.exports = dbObj;