const {prompt} = require("enquirer");

const waitForEnter = async () => {
    
    const getApplicationMenu = require("./app.js");
    
    const response = await prompt([
       {
        type: "text",
        name: "enter",
        message: "Press ENTER to go back to the main menu."
       }
    ]);
    getApplicationMenu();
};

module.exports = waitForEnter;