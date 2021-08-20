const passport = require("passport"); //geinstalleerd
const localStrategy = require("passport-local").Strategy; //geinstalleerd
const dbObj = require("./database.js");

/*
Het maken van een strategie heeft een verification callback function nodig.
Dit is wat je hieronder ziet: new localStrategy(function username, passw, done) etc.
We moeten username, password precies zo noemen!
*/

function verifyCallback(username, password, done){
    //Hier geven we zelf invulling aan hoe we de credentials verifieren. 

    //stap 1: We zoeken naar de juiste user.
    const sql = "SELECT user_name FROM users WHERE user_name = ?";
    const params = []

    db.get(sql, params, (err, row) => {
        if (err) {
            console.log(err.message);
        } else {

            console.log(row); //WAT KRIJGEN WE HIER OOK ALWEER ALS DEZE LEEG IS???
            //Als er geen user te vinden is met die naam: 
            if(????) {
                return done(null, false); //Null betekend hier: er is geen error. False betekend hier: er is geen user. Er wordt dan een 401 statuscode gereturned.
            //Als er wel een user te vinden is met die naam: 
            } else {

            }
        }

});

const strategy = new localStrategy(verifyCallback);

passport.use(strategy);
