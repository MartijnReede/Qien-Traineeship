const {prompt} = require("enquirer");
let db = require("./database.js");
const waitForEnter = require("./pressEnterFunc.js");
const printDatabase = require("./printDatabase.js");

const removePersonFromDatabase = async () => {
    
    const response = await prompt([       
        {
        type: "text",
        name: "chosenId",
        message: "Please select the id of the person you want to remove from the database."
        }
    ]);
    
    responseid = response.chosenId;
};

module.exports = removePersonFromDatabase;