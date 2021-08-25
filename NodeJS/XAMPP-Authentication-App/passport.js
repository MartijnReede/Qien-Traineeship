const passport = require("passport");
const databaseObj = require("./database.js");
const localStrategy = require("passport-local").Strategy;
const crypto = require("crypto");

const customFields = {
    usernameField: "username",
    passwordField: "password"
}

function verificationCallbackFunction(username, password, done){
    
    //Stap 1: Zoek de user op met de ingevoerde username.
    const sql = "SELECT * FROM users WHERE user_name = ?"
    const params = [username];
    
    databaseObj.db.query(sql, params, (err, res) => {
        if (err){
            console.log(err.message);
            return;
        }

        //Geen user gevonden.
        if (res.length === 0){
            return done (null, false);
        }

        //Wel een user gevonden.
        const User = res[0];

        //Password check.
        const isValid = validatePassword(password, User.user_hash, User.user_salt);

        if (isValid){
            return done(null, User);
        }

        return done(null, false);
    });
}

function validatePassword(password, hash, salt){
    let hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
    return hash === hashVerify;
}

function generateHashAndSalt(password){
    const salt = crypto.randomBytes(32).toString("hex");
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");

    const saltHashObj = {
        salt: salt,
        hash: hash
    }
    return saltHashObj;
}

//Het onderstaande wordt aangeroepen door de passport.authenticate functie.
const strategy = new localStrategy(customFields, verificationCallbackFunction);
passport.use(strategy);


/* De User hier wordt meegegeven door de verificationCallbackFunction. Wat hier eigenlijk gebeurt is dat we een stukje
unieke informatie van de database record meegeven en bewaren in de cookie. In dit geval doen we dat met de user_id.
Vervolgens hebben we het User object niet meer nodig en zal aan de hand van de cookie bevestigd worden of de huidige
gebruiker authenticated is of niet. */
passport.serializeUser((User, done) => {
    done(null, User.user_id);
});

/* De user_id parameter in deze functie is de user_id (primary key) uit de database. Met deze methode ontcijferen we de
cookie zodat we (als de gebruiker nog een verzoek stuurt) weten om welke user het gaat. De cookie komt in dit geval dus
weer terug van de gebuiker naar de server. Wat we doen met de done(null, res[0]) functie is dat we het request object 
vullen met alle waardes die horen bij de desbetreffende user. We kunnen dan bijvoorbeeld ergens anders de waarde 
req.user.age ophalen.*/
passport.deserializeUser((user_id, done) => {
    
    const sql = "SELECT * FROM users WHERE user_id = ?";
    const params = [user_id];

    databaseObj.db.query(sql, params, (err, res) => {
        if (err){
            console.log(err.message);
            return;
        }

        if (res.length === 0){
            done(null, false);
        }

        done(null, res[0]);
    });
});

const passportObj = {
    passport: passport,
    generateHashAndSalt: generateHashAndSalt
}

module.exports = passportObj;