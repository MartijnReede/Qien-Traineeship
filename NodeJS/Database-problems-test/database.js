const mysql = require("mysql2/promise");
let db;

(async () => {

    const config = {
        host: "localhost",
        port: 3000,
        user: "root",
        password: "",
        database: "database_problem_test"
    };

    const database = await mysql.createConnection(config);
    
    await database.execute("CREATE DATABASE IF NOT EXISTS database_problem_test")
    .then(console.log("Database created or it already exists."))
    .catch(err => console.log(err.message));
    
    await database.execute("CREATE TABLE IF NOT EXISTS users (user_id INTEGER AUTO_INCREMENT, user_firstname TEXT, user_lastname" +
                           " TEXT, user_age INTEGER, PRIMARY KEY(user_id))")
    .then(console.log("Table created ot it already exists."))
    .catch(err => console.log(err.message));

    db = database;
})();


function getAllUsers(){

    return db.execute("SELECT * FROM users").catch(err => console.log(err.message));

}

const databaseObj = {
    db: db,
    getAllUsers: getAllUsers
}

module.exports = databaseObj;


//db.query("CREATE TABLE IF NOT EXISTS users (user_id INTEGER AUTO_INCREMENT, user_firstname, user_lastname, user_age, PRIMARY KEY(user_id))");

