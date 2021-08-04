const  addRecipe = require("./addRecipe.js");
const listRecipes = require("./listRecipes.js");



//De onderstaande code gebruiken we om commands van de cmd-line te peuteren. 
//Om een command in te voeren typen we in: node ./app.js <command>.
const [,, ...args] = process.argv;
// Hiermee zeggen we eigenlijk: skip de eerste twee argumenten (dit is namelijk de
//bestandslocatie van app.js), en voeg vervolgens alle commands toe die we in de cmd
//invoeren.

let commands = [
    "1: 'add'",
    "2: 'list'",
    ];

switch (args[0]) {
 
    case "add":
        addRecipe();
        break;
   
    case "list":
        listRecipes();
        break;
    
    default:
        console.log(`The command ${args[0]} does not exist. Possible options are:\n`);
        for (let i = 0; i < commands.length; i++){
            console.log(commands[i]);
        }
        
}


