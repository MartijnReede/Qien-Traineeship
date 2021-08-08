const {prompt} = require("enquirer");
const databaseObj = require("./database.js");
const pressEnterFunc = require("./pressEnterFunc.js");

const deleteRecord = async () => {

    databaseObj.printRecordsDatabase();

    const response = await prompt ([
        {
            type: "text",
            name: "chosenId",
            message: "Enter the record id of the record you want to DELETE from the database.\n\n" +
                     "Enter id: "
        },
    ]);


    let foundRecordInDatabase = false;
    let indexOfRecord;
    let database = databaseObj.getRecordsDatabase();

    database.forEach(function(record) {
        if (record.recordId == response.chosenId){
            indexOfRecord = database.indexOf(record);
            foundRecordInDatabase = true;
            return;
        }
    });

    if (foundRecordInDatabase) {
        databaseObj.deleteRecordFromDatabase(indexOfRecord);
    } else {
        console.log("\nThe id you chose doesn't exist in the database, please try again!\n");
        pressEnterFunc();
    }
};

module.exports = deleteRecord;