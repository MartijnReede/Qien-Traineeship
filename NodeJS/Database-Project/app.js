const {prompt} = require("enquirer");
const addPersonToDatabase = require("./addRecord.js");
const printDatabase = require("./printDatabase.js");
const removePersonFromDatabase = require("./removeRecord.js");

let appIsRunning = true;

const getMenu = async() => {
    while (appIsRunning){ 
        let response = await prompt([
            {
            type: "text",
            name: "input",
            message: "\nPlease select an option from below:\n" +
                "1. Add person to the database.\n" +
                "2. Remove person from the database.\n" +
                "3. Change information in the database.\n" +
                "4. Print database.\n" +
                "5. Exit application.\n\n"
            }
        ]);

        let chosenOption = response.input;
        processMenuOption(chosenOption);
    }
};
    
function processMenuOption(option){
    switch (option) {
        case "1":
            addPersonToDatabase();
            break;
        case "2":
            printDatabase();
            removePersonFromDatabase();
            break;
        case "3":
            console.log("change person info");
            break;
        case "4": 
            printDatabase();
            break;
        case "5":
            appIsRunning = false;
            console.log("Thank you for using this application, bye bye!");
            break;
        default:
            console.log("The option you chose does not exist. Please try again!");
            break;   
    }
}

  getMenu();

    