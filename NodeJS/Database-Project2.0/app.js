const addRecord = require("./addRecord.js");
const removeExistingPerson = require("./removeRecord.js");
const databaseObj = require("./database.js");

const command = process.argv.slice(2)[0];

const allCommands = ["add", "remove", "printdata", "changedata"];

switch (command) {
    case "add":
        addRecord();
        break;
    case "remove":
        removeExistingPerson();
        break;
    case "printdata":
        databaseObj.printData();
        break;
    case "changedata":
        console.log("change ");
        break;
    default:
        console.log(`The command: '${command}' does not exist. Please enter one of the commands from below:`);
        for (let i = 1; i <= allCommands.length; i++){
            console.log(i + ". " + allCommands[i-1]);
        }
        break;
        
}

