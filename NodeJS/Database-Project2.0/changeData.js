const {prompt} = require("enquirer");
const databaseObj = require("./database.js");

const changeData = async () => {
    const response = await prompt([
        {
            type: "text",
            name: "id",
            message: "\nEnter the id of the person you want to change information from (enter 'q' if you want to exit this menu)."
        }
    ]);

    if (response.id === "q") {
        console.log("Cancelling change data.");
        return;
    } else if (isNaN(response.id)){
        console.log("Input error, please enter a number.");
    } else {
        changeDataSelection(response.id);
    }
}

const changeDataSelection = async (id) => {
    const response = await prompt([
        {
            type: "text",
            name: "chosenOption",
            message:"\nDo you want to change the name, age or both?\n" +
                    "1. Name.\n" +
                    "2. Age.\n" +
                    "3. Name and age.\n" +
                    "Enter option (number): "
        }
    ]);

    const promptObjects = [
        {
            type: "text",
            name: "name",
            message: `\nPlease enter the name of the person with id: ${id}.\n` +
                     "Name: "
        },
        {
            type: "text",
            name: "age",
            message: `\nPlease enther the age of the person with id: ${id}.\n` +
                     "Age: "

        }
    ];

    switch(response.chosenOption){
        case "1":
            getChangedData(id, [promptObjects[0]]);
            break;
        case "2":
            getChangedData(id, [promptObjects[1]]);
            break;
        case "3":
            getChangedData(id, promptObjects)
            break;
        default: 
            console.log("Input error, please enter 1, 2 or 3.");
            return;
    }
};  

const getChangedData = async (id, promptObjects) => {
    const response = await prompt(promptObjects);

    let params;
    let sql;
    if (promptObjects.length === 1 && response.age === undefined){
        sql = "UPDATE persons SET personName = ? WHERE id = ?";
        params = [response.name, id];
    } else if (promptObjects.length === 1) {
        sql = "UPDATE persons SET personAge = ? WHERE id = ?";
        params = [response.age, id];
    } else {
        sql = "UPDATE persons SET personName = ?, personAge = ? WHERE id = ?";
        params = [response.name, response.age, id];
    }

    databaseObj.changeData(sql, params);
}

module.exports = changeData;