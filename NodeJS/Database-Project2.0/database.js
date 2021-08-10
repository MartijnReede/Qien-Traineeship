const sqlite3 = require("sqlite3").verbose();
const {table} = require("table");
const db = new sqlite3.Database("personsDatabase.db");

db.run("CREATE TABLE IF NOT EXISTS persons (id INTEGER PRIMARY KEY AUTOINCREMENT, personName TEXT, personAge INTEGER)");

function addNewPerson(name, age){
    
    const sql = "INSERT INTO persons (personName, personAge) VALUES (?, ?)"
    const params = [name, age];

    db.run(sql, params, function(err){
        if (err){
            console.log(err.message);
        } else {
            console.log("Person added to the database.");
        }
    });
}

function removePerson(id) {
    const sql = "DELETE FROM persons WHERE id = ?";
    const params = id;
    db.run(sql, params, function(err){
        if (err) {
            console.log(err.message);
        } else {
            console.log(`Person with id: ${id}, is removed from the database.`);
        }
    });
}

function printData() {
    
    const sql = "SELECT * FROM persons";
    const params = [];

    db.all(sql, params, (err, rows) => {
        if (err) {
            console.log(err.message);
        } else {
            let data = [["ID", "PERSON_NAME", "PERSON_AGE"]];
            rows.forEach(function(row){
                data.push([row.id, row.personName, row.personAge]);
            });

            console.log(table(data));
        }
    })
}

const databaseObj = {
    addNewPerson: addNewPerson,
    removePerson: removePerson,
    printData: printData
}


module.exports = databaseObj;