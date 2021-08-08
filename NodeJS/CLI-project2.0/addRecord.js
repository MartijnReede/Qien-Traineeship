const {prompt} = require("enquirer");
const databaseObj = require("./database.js");
const waitForEnter = require("./pressEnterFunc");

const addNewRecord = async () => {
    const response = await prompt([
        {
            type: "text",
            name: "artistName",
            message: "What is the name of the artist?"
        },
        {
            type: "text",
            name: "recordTitle",
            message: "What is the title of the record?"
        },
        {
            type: "text",
            name: "releaseDate",
            message: "What is the release date of the record?"
        }
    ]);

    response.recordId = databaseObj.getCurrentIdNumber();
    databaseObj.updateIdNumber();

    console.log("\nRecord created:\n", response, "\n\nRecord added to the database!\n");
    databaseObj.addRecordToDatabase(response);
    waitForEnter();
};

module.exports = addNewRecord;