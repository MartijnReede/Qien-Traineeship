//Voor deze app gaan we de passport-local strategy gebruiken. 
const express = require("express");
const session = require("express-session");
const passport = require("passport");
require("./passport.js"); //Dit importeert de regel passport.use(strategy);
const path = require("path");
const dbObj = require("./database.js");
const passportUtils = require("./passwordUtils.js");
const app = express();
const PORT= 8080;

/*
app.use(session({
    secret: "secret",
    resave: "false",
    saveUninitialized: true,
    cookie: {
        maxAge: 100000
    }
}));
*/

app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize()); //Dit initializes de passport middleware. ?? Wat dat dan ook precies inhoudt?
app.use(passport.session()); //Dit heeft te maken met de express session middleware.

app.use((req, res, next) => {
    console.log("INFO FROM USE METHOD (MIDDLEWARE): ");
    console.log("Sessions: ", req.body.session); // UNDEFINED????
    console.log("User: ", req.body.user);
    next();
});


app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "/web-pages/home.html")); 
});


//Hier voegen we de middleware van passport toe. Wat het doet is dat het de username en password onderschept en dan 
//checkt of we mogen inloggen. Is dit het geval, dan wordt de "next/done" methode aangeroepen wat betekend dat we
//naar de volgende functie in de titel kunnen wat in dit geval het endpoint is dat ons inlogd. 

//EDIT: Aangezien we al een redirect hebben bij een succes of geen succesvolle login, hoeven we de gebruikelijke
// req, res, next functie niet te beschrijven.
app.post("/login", passport.authenticate("local", {failureRedirect: "/failedtologin", successRedirect: "/loginsucces"}));

app.get("/loginsucces", (req, res, next) => {
    res.send("<h1>Login succes!</h1>");
});

app.get("/failedtologin", (req, res) => {
    res.send("<h1>Login failure!</h1>");
});



app.post("/register", (req, res, next) => {
    //Hier maken we een nieuwe user aan in de database. 

    console.log("password: ", req.body.password);
    console.log("username: ", req.body.username);

    const saltHash = passportUtils.generatePassword(req.body.password);

    const salt = saltHash.salt;
    const hash = saltHash.generatedHash;

    const newUser = new User(req.body.username, hash, salt);

    dbObj.saveNewUser(newUser);

    res.redirect("/newusercreated");

});

app.get("/newusercreated", (req, res, next) => {
    res.send("<h1>NEW USER CREATED</h1>");
});

app.listen(PORT);

function User(username, hash, salt){
    this.username = username,
    this.hash = hash,
    this.salt = salt
}

// CLI COMMANDS ------------------------------------------------------

let command = process.argv.slice(2)[0];

switch(command){
    
    case undefined: 
        break;
    case "printall":
        dbObj.printAll();
        break;
    default:
        console.log("No such command exists in this application.");
        break;
}
