const {prompt} = require("enquirer");
const {table} = require("table");
const databaseObj = require("./database.js");
const pressEnterFunc = require("./pressEnterFunc.js");

const searchRecord = async () => {
    const response = await prompt([
        {
            type: "text",
            name: "chosenOption",
            message: "\n\nDo you wich to search on the title of the record or the name of the artist?\n" +
                     "1: Record title.\n" + 
                     "2: Artist name.\n\n" +
                     "Enter option (number): "
        }
    ]);

    if (response.chosenOption == "1") {
        askSearchInput(1);
    } else if (response.chosenOption == "2") {
        askSearchInput(2);
    } else {
        console.log("\nThe option you chose does not exist. Please try again!\n\n");
        pressEnterFunc();
    }
};

const askSearchInput = async (searchOption) => {

    let displMessage = "";

    if (searchOption === 1) {
        displMessage = "Enter (a part) of the title of the record you're looking for.\n\n" +
                  "Input: ";
    } else {
        displMessage = "Enter (a part) of the name of the artist you're looking for.\n\n" +
                  "Input: ";
    }

    const response = await prompt([
        {
            type: "text",
            name: "searchInput",
            message: displMessage
        }
    ]); 

    let database = databaseObj.getRecordsDatabase();

        let recordFound = false;
        let foundRecords = [["Record id", "Artist", "Record Title", "Release date"]];
        database.forEach((record) => {
            
            if (record.recordTitle.toLowerCase().includes(response.searchInput.toLowerCase()) && searchOption === 1){
                foundRecords.push([record.recordId, record.artistName, record.recordTitle, record.releaseDate]);
                recordFound = true;
            } else if (record.artistName.toLowerCase().includes(response.searchInput.toLowerCase()) && searchOption === 2) {
                foundRecords.push([record.recordId, record.artistName, record.recordTitle, record.releaseDate]);
                recordFound = true;
            }  
        });

        if (recordFound) {
            console.log(table(foundRecords));
        }

        console.log("\n");
        pressEnterFunc();
}

module.exports = searchRecord;