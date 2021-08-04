const got = require("got");
const { prompt } = require("enquirer");
const { table } = require("table");

const url = "http://localhost:8080/api/recipes";

const listRecipes = async () => {
    const response = await got(url).json();

    const recipes = response.data;

    const answer = await prompt({
        name: 'recept',
        type: 'select',
        message: "Select a recipe:",
        choices: recipes,
    });
 
    const recipe = recipes.find((obj) => {
        return obj.name == answer.recept;
    });

    const data = [[recipe.name], [recipe.directions]];
    console.log(table(data));
};

module.exports = listRecipes;