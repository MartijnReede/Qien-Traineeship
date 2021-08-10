const {prompt} = require("enquirer");
const databaseObj = require("./database.js");

const addRecordToDatabase = async () => {
    const response = await prompt([
        {
            type: "text",
            name: "personName",
            message: "\nPlease enter the name of the person that you want to add to the database.\n" +
                     "Name: "
        },
        {
            type: "text",
            name: "personAge",
            message: "\nPlease enther the age of the person that you want to add to the database.\n" +
                     "Age: "
        }
    ]);

    databaseObj.addNewPerson(response.personName, response.personAge);
}

module.exports = addRecordToDatabase;