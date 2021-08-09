const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("database.db");

db.run("CREATE TABLE IF NOT EXISTS persons (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER)");

module.exports = db;