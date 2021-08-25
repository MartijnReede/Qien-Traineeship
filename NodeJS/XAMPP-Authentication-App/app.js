const express = require("express");
const session = require("express-session");
const securityObj = require("./securityMiddlewares.js");
const path = require("path");
const databaseObj = require("./database.js");
const passportObj = require("./passport.js");
const app = express();
const port = 8080;

app.use(session({
    secret: "secret",
    resave: "false",
    saveUninitialized: true,
    cookie: {
        maxAge: 100000
    }
}));

app.use(express.urlencoded({ extended: true }));
app.use(passportObj.passport.initialize()); //Zorgt dat passport module gebruikt kan worden.
app.use(passportObj.passport.session()); //Zorgt dat de huidige userId van de cookie wordt meegegeven aan het requestObj (ofzoiets?).

//Dit kunnen we straks weghalen, dit laat alleen zien wie er momenteel is ingelogd. 
app.use((req, res, next) => {
    console.log("Session: ", req.session);
    console.log("User: ", req.user);
    next();
});


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/html-pages/index.html"));
});

// Register --------------------------------------------------------------------------------------------------------------------------

app.post("/register", (req, res) => {
    const userName = req.body.username;
    const userAge = req.body.age;
    const userPassword = req.body.password;

    const saltHashObj = passportObj.generateHashAndSalt(userPassword);
    const salt = saltHashObj.salt;
    const hash = saltHashObj.hash;

    databaseObj.addNewUser(userName, userAge, salt, hash);
    res.redirect("/usercreated");
});

app.get("/usercreated", (req, res) => {
    res.sendFile(path.join(__dirname, "/html-pages/userCreated.html"));
});

// Login -----------------------------------------------------------------------------------------------------------------------------

//Passport.authenticate roept de methode in passport.js aan om de strategy toe te passen inclusief verificationCallbackFunction.
app.post("/login", passportObj.passport.authenticate("local" , {failureRedirect: "/loginfailed", successRedirect: "/loginsucces"}));

app.get("/loginsucces", (req, res) => {
    res.sendFile(path.join(__dirname, "/html-pages/loginSuccess.html"));
});

app.get("/loginfailed", (req, res) => {
    res.sendFile(path.join(__dirname, "/html-pages/loginFailed.html"));
});

// Logout ---------------------------------------------------------------------------------------------------------------------------

app.get("/logout", (req, res) => {
    req.logOut();
    res.redirect("/logoutsuccess");
});

app.get("/logoutsuccess", (req, res) => {
    res.sendFile(path.join(__dirname, "/html-pages/logoutSuccess.html"));
});

// Web pages ------------------------------------------------------------------------------------------------------------------------

//Geen beveiliging.
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "/html-pages/unprotectedHomePage.html"));
})

//Alleen gebruikers die ingelogd zijn.
app.get("/normalprotected", securityObj.isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "/html-pages/protectedNormalPage.html"));
});

//Alleen gebruikers die ingelogd en admin zijn. 
app.get("/adminprotected", securityObj.isAdmin, (req, res) => {
    res.sendFile(path.join(__dirname, "/html-pages/protectedAdminPage.html"));
});

app.listen(port);