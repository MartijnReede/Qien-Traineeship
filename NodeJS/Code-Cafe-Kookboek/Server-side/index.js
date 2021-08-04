const express = require("express");
const db = require("./database.js");
const PORT = 8080;
const app = express();

app.use(express.json());

// ----------------------------------------------------------------------------------------------

//Homepage
app.get('/', (req, res) => {
    res.status(200).json({status: "server running"});
});

// ----------------------------------------------------------------------------------------------

//Create recipe
app.post("/api/recipe", (req, res) => {

    //Data uit het verzoek halen (JSON object).
    let data = {
        name: req.body.name,                                        //Body wordt meegegeven door express.
        directions: req.body.directions
    };

    console.log(data);

    //Data opslaan in de db.
    let sql = 'INSERT INTO recipes (name, directions) VALUES (?, ?)';
    let params = [data.name, data.directions];
    db.run(sql, params, (err, result) => {      //BELANGRIJK! Result i.p.v. res.
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
    
    //Resultaat terugsturen.
        res.status(200).json({
            "message": "Recept toegevoegd aan database.",
            "data": data,
            "id": this.lastID
        });
    });
});

// ----------------------------------------------------------------------------------------------

//Get recipe
app.get("/api/recipes", (req, res) => {
   
    let sql = "SELECT * FROM RECIPES";
    let params = [];
    db.all(sql, params, (err, rows) => {     //hier gebruiken we db.all i.p.v. db.run. Omdat het om een verzameling van resultaten gaat.
        //Date terugsturen naar de client.
        if (err) {
            res.status(400).json({ "error": err.message });
            return; //Die return doen we hier zodat de methode niet verder gaat met uitvoeren als er een error is. 
        }

        res.status(200).json({
            "message": "Recepten opgevraagd!",
            data: rows,
        });
    });                    

});

// ----------------------------------------------------------------------------------------------

//Patch recipe

app.patch("/api/updaterecipe/:id", (req, res) => {
    //Data uit het verzoek peuteren.
    let data = {
        name: req.body.name,
        directions: req.body.directions,
        id: req.params.id
    };

    //SQL: coalesce kijkt of de input niet null is. Is name wel null / undefined, dan wordt name niet geupdate.
    let sql = "UPDATE recipes SET name = coalesce (?, name), directions = coalesce (?, directions) WHERE id = ?";                                                                       
    let params = [data.name, data.directions, data.id];

    db.run(sql, params, (err) => {
        if (err){
            res.status(400).json({"error": err.message});
            return;
        }

        res.status(200).json({"message": "recipe updated"});
    });
});

// ----------------------------------------------------------------------------------------------

//Delete recipe
app.delete('/api/deleterecipe/:id', (req, res) => {   //Ik kreeg dit in de browser niet aan de praat. Als we in 
                                                      //reqbin een delete request sturen werkt het wel!
  
    let sql = 'DELETE FROM recipes WHERE id = ?';
	let params = [req.params.id];
	db.run(sql, params, (err, result) => {
		
        if (err) {
			res.status(400).json({ 'error': err.message});
			return;
		}
		res.status(200).json({'message': 'success'});
	});
});



// ----------------------------------------------------------------------------------------------
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});