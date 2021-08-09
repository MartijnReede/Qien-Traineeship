const {prompt} = require("enquirer");
const db = require("./database.js");

const addPersonToDatabase = async () => {
        const response = await prompt([
        {
            type: "text",
            name: "name",
            message: "Enter the name of the person you want to insert into the database."
        },
        {
            type: "text",
            name: "age",
            message: "Enter the age of the person you want to insert into the database."
        }
    ]);      
    
    let params = [response.name, response.age];

    const sql = "INSERT INTO persons (name, age) VALUES (?,?)";
    db.run(sql, params, (err) => {
        if (err) {
            console.log("\n", err.message, "\n");
        } else {
           console.log("\nPerson added to the database:\n" +
                       "Name: " + params[0] + ".\n" +
                       "Age: " + params[1] + ".\n"); 
        }
    });
};

module.exports = addPersonToDatabase;















/*

let params = ["Martijn", 30];
const sql = "INSERT INTO persons (name, age) VALUES (?, ?)";

db.run(sql, params, (err) => {
    if (err) {
        console.log(err.message);
    }
});

*/