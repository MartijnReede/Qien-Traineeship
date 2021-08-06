//Dit gebruiken we om dingen aan de user te vragen.
const {prompt} = require("enquirer");

//Hiermee maken we de CLI mooi :)
const {table} = require("table");

let args = "1";
let records = [];

const getApplicationMenu = async () => {
    console.log("-----------------------------------\n");
    const response = await prompt([
        {type: "text",
         name: "chosenOption",
         message: "Choose an option:\n\n" +
                  "1: Restart app.\n" +
                  "2: Add record.\n" +
                  "3: List records.\n" +
                  "4: Close app.\n\n" +
                  "Option: " }
    ]);
    console.log("\n-----------------------------------\n");
    args = response.chosenOption;
    processUserInput(args)
};

const waitForPressKey = async () => {
    const response = await prompt([
        {
            type: "text",
            name: "pressKey",
            message: "Press enter to go back to the main menu."
        }
    ]);
    getApplicationMenu();
}

const addRecord = async () => {
    const response = await prompt([
        {
            type: "text",
            name: "artist",
            message: "What is the name of the artist?\n" +
                     "Artist name: "
        },
        {
            type: "text",
            name: "recordName",
            message: "What is the name of the record?\n" +
                     "Record name: "
        },
        {
            type: "text",
            name: "releaseDate",
            message: "What is the release date of the record (YYYY-MM-DD)?\n" +
                     "Release date: "
        }
    ]);

    console.log("\nRecord is added to the database.\n");    

    records.push(response);
    
    waitForPressKey();
};

function listRecords(){
    
    const data = [["Artist", "Record name", "Release date"]];
    
    records.forEach(function(record) {
        data.push([record.artist, record.recordName, record.releaseDate]);
    });
    
    
    console.log("Records from database:");

    console.log(table(data));



    console.log("\n");

    waitForPressKey();
}

function processUserInput(args){
    switch(args) {
        
        //start:
        case "1":
            getApplicationMenu(); 
            break;
        
        //add record:
        case "2":
            addRecord();
            break;
        //list records:
        case "3":
            listRecords();
            break;
        //exit:    
        case "4":
            console.log("ByeBye!");
            break;
        
        default:
            console.log("Chosen option is not available. Please choose from the options below:");
            getApplicationMenu();    
    }
}

(function runApp(){
    processUserInput(args);
})();