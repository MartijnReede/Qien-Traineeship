const sqlite3 = require("express").verbose();
const db = new sqlite3.Database("db.db");

db.run("CREATE TABLE IF NOT EXISTS record_labels (label_id INTEGER PRIMARY KEY AUTOINCREMENT, label_name TEXT)")




const databaseObj {

};

module.exports = databaseObj;