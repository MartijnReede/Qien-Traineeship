const {table} = require("table");
const waitForEnter = require("./pressEnterFunc.js");

//Default databse input.
let database = [
    {
        recordId: "1",
        artistName: "Laurent Garnier", 
        recordTitle: "Gnanmankoudji",
        releaseDate: "2009-04-20"
    },
    {
        recordId: "2",
        artistName: "A Guy Called Gerald",
        recordTitle: "Voodoo Ray",
        releaseDate: "1988-03-01"
    },
    {
        recordId: "3",
        artistName: "M.A.R.R.S.",
        recordTitle: "Pump Up the Volume",
        releaseDate: "1988-09-10"
        
    },
    {
        recordId: "4",
        artistName: "Tyree Cooper",
        recordTitle: "Turn Up the Bass",
        releaseDate: "1988-12-13"
    }
    ];

let currentIdNumber = database.length + 1;    

function getCurrentIdNumber(){
    return currentIdNumber;
}

function updateIdNumber(){
    currentIdNumber += 1;
}

function addRecordToDatabase(record){
    
    database.push(record);
}

function getRecordsDatabase(){
    return database;
}

function printRecordsDatabase(goBackToMainAfterPrint){
        
        let tableData = [];
        tableData.push(["Record id", "Artist", "Record title","Release date"]);

        database.forEach((record) => {
            tableData.push([record.recordId, record.artistName, record.recordTitle, record.releaseDate]);
        });

        console.log(table(tableData));
        
        if (goBackToMainAfterPrint){
            waitForEnter();
        }
}

function deleteRecordFromDatabase(index){
    console.log("\nRemoving: \n", database[index]);
    database.splice(index, 1);
    waitForEnter();
}

const databaseObj = {
    addRecordToDatabase: addRecordToDatabase,
    getRecordsDatabase: getRecordsDatabase,
    printRecordsDatabase: printRecordsDatabase,
    getCurrentIdNumber: getCurrentIdNumber,
    updateIdNumber: updateIdNumber,
    deleteRecordFromDatabase: deleteRecordFromDatabase
};

module.exports = databaseObj;