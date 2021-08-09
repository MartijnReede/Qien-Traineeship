const {prompt} = require("enquirer");
const getMenu = require("./app.js");  

const waitForEnter = async () => {
    
    const response = await prompt([
        {
         type: "text",
         name: "pressEnter",
         message: "\nPress ENTER to go back to the main menu!\n\n"
        }
     ]);

    getMenu();

};

module.exports = waitForEnter;