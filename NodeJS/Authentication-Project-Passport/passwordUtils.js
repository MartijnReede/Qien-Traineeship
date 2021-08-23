const crypto = require("crypto");

/*

! Je slaat natuurlijk nooit een plain text password op in een database. 

CREATION
    - Registreren op een web app.
    - Password moet getransformeerd worden zodat we het kunnen opslaan in de datatbase. 

VERIFICATION
    - Inloggen op een web app. 


    - Username wordt ingevoerd door user.
    - Plain text password word ingevoerd door user. 
    - Username wordt opgezocht in de database. 
    - We krijgen dan toegang tot passwordHash en Salt (een random reeks tekens die aan het password worden toegevoegd).
    - Samen met het password dat de user ons geeft gooien we deze alldrie door dezelfde hashFunction.
    - Als beide passwords gelijk zijn mag de user de web app in. 
*/

function generatePassword(password){

    let salt = crypto.randomBytes(32).toString("hex");
    
    // 10000 betekend hoeveel iteraties we doen?
    // 64 is hoe lang de hash gaat zijn. 
    //sha512 is de hashfunction die we gaan gebruiken. 
    // Tot slot wordt het geconvert naar een hexidecimal string. 

    let generatedHash = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");

    return {
        salt: salt,
        generatedHash: generatedHash
    };
}

function validatePassword(password, hash, salt) {
    //Hier maken we dezelfde hash als die we maakte bij het registreren van het account. 
    //Het enige verschil is dat we de salt nu uit de database halen en het password in het login-scherm door de user wordt ingevoerd. 

    let hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
    return hash === hashVerify;

}

const passportUtilsObj = {
    generatePassword: generatePassword,
    validatePassword: validatePassword
}

module.exports = passportUtilsObj;