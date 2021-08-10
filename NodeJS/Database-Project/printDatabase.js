const {table} = require("table");
let db = require("./database.js");



function printDatabase() {
    
    const sql = "SELECT * FROM persons";     
    
    db.all(sql, [], (err, rows) => {
        if (err){
            console.log(err.message);
        }
           
        rows.forEach(function(row){
            console.log(row);
        });
    });
}


module.exports = printDatabase;