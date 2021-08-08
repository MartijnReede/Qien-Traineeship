const {prompt} = require("enquirer");
const addRecord = require("./addRecord.js");
const delRecord = require("./deleteRecord.js");
const searchRecord = require("./searchRecord.js");
const databaseObj = require("./database.js");

let chosenOption = "-1";

const getApplicationMenu = async () => {
    console.log("\n");
    const response = await prompt([ 
        {
            type: "text",
            name: "chosenOption",
            message: "Choose one of the options below:\n" +
                     "1: Add new record.\n" +
                     "2: Delete record.\n" +
                     "3: Search for a record.\n" +
                     "4: List all records.\n" +
                     "5: Exit application.\n\n" +
                     "Enter option (number): "
        }
    ]);
    
    chosenOption = response.chosenOption;
    processChosenOption(chosenOption);
};

function processChosenOption(chosenOption){
    switch (chosenOption) {
        case "-1": 
            getApplicationMenu();
            break;
        case "1": 
            addRecord();
            break;
        case "2":
            delRecord();
            break;
        case "3":
            searchRecord();
            break;
        case "4":
            databaseObj.printRecordsDatabase(true);
            break;
        case "5": 
            exitApplication();
            break;
        default:
            console.log("\nThe option you chose does not exist. Please try again!");
            getApplicationMenu();
    } 

}

function exitApplication(){
    console.log("\nClosing application, bye bye!\n");
}

module.exports = getApplicationMenu;

(function startApplication(){
    getApplicationMenu();
})();

