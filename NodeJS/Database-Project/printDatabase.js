const {table} = require("table");
let db = require("./database.js");
const waitForEnter = require("./pressEnterFunc.js");

async function printDatabase() {
    const sql = "SELECT * FROM persons";    

    db.all(sql, [], (err, rows) => {
        
        let tableData = [["ID", "NAME", "AGE"]];

        rows.forEach(function(row){
            tableData.push([row.id, row.name, row.age])
        });
    
        console.log(table(tableData));
    });

}

module.exports = printDatabase;