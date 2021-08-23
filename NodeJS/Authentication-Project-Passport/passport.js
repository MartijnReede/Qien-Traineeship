const passport = require("passport"); //geinstalleerd
const localStrategy = require("passport-local").Strategy; //geinstalleerd
const dbObj = require("./database.js");
const passportUtils = require("./passwordUtils.js");

/*
Het maken van een strategie heeft een verification callback function nodig.
Dit is wat je hieronder ziet: new localStrategy(function username, passw, done) etc.
We moeten username, password precies zo noemen!
*/

const customFields = {
    usernameField: "username",
    passwordField: "password"
}


function verifyCallback(username, password, done){
    //Hier geven we zelf invulling aan hoe we de credentials verifieren. 

    //stap 1: We zoeken naar de juiste user.
    const sql = "SELECT user_id, user_name, user_hash, user_salt FROM users WHERE user_name = ?";
    const params = [username];

    dbObj.db.get(sql, params, (err, row) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("Rij gevonden:", row);

            //Als er geen user te vinden is met die naam: 
            if(!row) {
                console.log("Er is geen row gevonden...");
                return done(null, false); //Null betekend hier: er is geen error. False betekend hier: er is geen user. Er wordt dan een 401 statuscode gereturned.
            
                //Als er wel een user te vinden is met die naam: 
            } else {
                
                console.log("Ingevoerd password: ", password);
                console.log("User hash: ", row.user_hash);
                console.log("user salt: ", row.user_salt);

                const isValid = passportUtils.validatePassword(password, row.user_hash, row.user_salt);

                if (isValid){
                    return done(null, row);
                } else {
                    return done(null, false);
                }

            }
        }

    });
}

const strategy = new localStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => { //user here is the row from the method above. 
    done(null, user.user_id);
});


passport.deserializeUser((user_id, done) => {
    User.findById(user_id)
    .then((user) => {
        done(null, user);
    })
    .catch(err => done(err))
});
