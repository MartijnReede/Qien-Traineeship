//Enquirer is een pakket dat gebruikt wordt om input uit de cmd te slepen. 
const {prompt} = require("enquirer");

//Got gebruiken we om ons JSON recept naar de database te sturen. 
const got = require("got");

//Door async in te typen geven we aan dat het om een asynchronische 
//methode gaat.

//Het format dat we onderstaand gebruiken komt overeen met dat van de database namelijk:
//We vragen om 1. naam en 2. directions. 

//Als we het op deze manier doen kunnen we de input direct doorsluizen de 
//database in. 

const addRecipe = async () => {
    const response = await prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of this recipe?"
        },
        {
            type: "input",
            name: "directions",
            message: "What are the recipe directions"
        }
    ]);

    const url = "http://localhost:8080/api/recipe";

    const res = await got.post(url, { json: response });

    console.log(res.statusCode);
};

module.exports = addRecipe;