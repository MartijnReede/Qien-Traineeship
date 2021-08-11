const {prompt} = require("enquirer");
const databaseObj = require("./database.js");

const removeExistingPerson = async () => {
    const response = await prompt([
        {
            type: "text",
            name: "id",
            message: "Enter the id of the person you want to remove from the database (enter 'q' to cancel the removal).\n" +
                     "Id: "
        }
    ]);

    if (response.id === "q") {
        console.log("Removing a person is cancelled.");
        return;
    } else if (isNaN(response.id)) {
        console.log("Input error. Please enter a number.");
    } else {
        console.log("\n");
        databaseObj.removePerson(response.id);
    }

};

module.exports = removeExistingPerson;