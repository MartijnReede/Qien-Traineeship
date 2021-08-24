const express = require("express");
const mysql = require("mysql");
const port = 8080;
const app = express();

//Create connection

const db = mysql.createConnection({
    host: "localhost",
    port: "3000", //Niet de port van de app, maar van PhpMyAdmin / XAMPP
    user: "root",
    password: "",
    database: "nodemysql" //Deze kan pas worden toegevoegd als we de database hebben aangemaakt!
});

//Connect to MySql
db.connect(err => {
    if (err){
        console.log(err.message);
        return;
    }

    console.log("MySQL is connected")
});

//Create database
app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE IF NOT EXISTS nodemysql";
    db.query(sql, err => {
        if (err){
            console.log(err.message);
            return;
        }
        console.log("Database created!");
        res.send("Database created!");
    });
});

//Create table
app.get("/createpersonstable", (req, res) => {
    let sql = "CREATE TABLE IF NOT EXISTS persons (person_id INTEGER AUTO_INCREMENT, person_name TEXT, person_age INTEGER, PRIMARY KEY (person_id))";
    db.query(sql, err => {
        if (err){
            console.log(err.message);
            return;
        }
        console.log("Persons table created.");
        res.send("Persons table created.");
    })
});

//Insert person
app.get("/person1", (req, res) => {
    let sql = "INSERT INTO persons (person_name, person_age) VALUES (?, ?)";
    let params = ["Martijn", 30];

    db.query(sql, params, err => {
        if (err){
            console.log(err.message);
            return;
        }

        console.log("Person added to the database.");
        res.send("person added to the database.");
    })
});

app.listen(port);
