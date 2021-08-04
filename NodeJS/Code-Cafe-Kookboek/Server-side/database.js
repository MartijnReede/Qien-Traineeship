const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("db.db", () => {
  db.run('CREATE TABLE IF NOT EXISTS recipes (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, directions TEXT)');
  console.log("Database created");  
});

module.exports = db;

