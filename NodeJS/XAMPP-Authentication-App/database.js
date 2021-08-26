const mysql = require("mysql");
const User = require("./user");

// Init database -------------------------------------------------------------------------------------

const db = mysql.createConnection({
    host: "localhost",
    port: "3000",
    user: "root",
    password: "",
    database: "xampp_authentication_db"
});

db.connect(err => {
    if (err){
        console.log("ERROR: ",err.message);
        return;
    }
    console.log("Connected to MySQL database!");
});

const createDatabaseSQL = "CREATE DATABASE IF NOT EXISTS xampp_authentication_db";
db.query(createDatabaseSQL, err => {
    if (err){
        console.log(err.message);
        return;
    }
    console.log("Database is created or exists already.");
});

const createTableSQL = "CREATE TABLE IF NOT EXISTS users (user_id INTEGER AUTO_INCREMENT, user_name TEXT, " +
                        "user_age INTEGER, user_hash TEXT, user_salt TEXT, admin BOOL, PRIMARY KEY(user_id))";
db.query(createTableSQL, err => {
    if (err){
        console.log(err.message);
        return;
    }
    console.log("Users table is created or exists already.");
});

// Database functions --------------------------------------------------------------------------------

function addNewUser(userName, userAge, salt, hash){
    const sql = "INSERT INTO users (user_name, user_age, user_salt, user_hash, admin) VALUES (?, ?, ?, ?, ?)";
    const params = [userName, userAge, salt, hash, false];

    db.query(sql, params, err => {
        if (err){
            console.log(err.message);
            return;
        }
        console.log("New user added to the database.");
    });
}

// Exports -------------------------------------------------------------------------------------------

const databaseObj = {
    db: db,
    addNewUser: addNewUser
}

module.exports = databaseObj;