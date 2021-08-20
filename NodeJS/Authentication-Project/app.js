const express = require("express");
const app = express();

//Dit is global middleware.
app.use(middleware1);
app.use(middleware2);


//De volgorde van global middleware maakt uit! Als we hieronder app.use(middleware4) zouden coderen
//dan zou na middleware 3, middleware 4 worden uitgevoerd. Globale middleware wordt altijd eerst uitgevoerd
//ten opzichte van de route-specifieke middleware functies. 

app.get("/", middleware3, standardCallbackfunc);

function errorHandler(err, req, res, next) {                   // Een errorhandler heeft altijd 4 params. err, req, res, next.
    if (err) {
        res.send("<h1>Huston, we've got a problem</h1>");
    }
}

//Dit is global middleware i.v.m. app.use().
function middleware1 (req, res, next) {
    console.log("I'm middleware 1");
    //calsfkdklmgfklsdmglkmglmgelswmgkelswmgklswmgkR(); /// HIER GENEREN WE EEN ERROR. (Ik comment dit even uit zodat de app weer werkt)
    next();
}

//Dit is global middleware i.v.m. app.use().
//Wat misschien voor zich spreekt, is dat we waardes aan de objecten kunnen toevoegen die worden meegestuurd. Ik geef hieronder
//een voorbeeld en laat middleware 3 de waarde uitprinten. 
function middleware2 (req, res, next) {
    console.log("I'm middleware 2");
    req.someValue = 999999;
    next();
}

//dit is route-afhankelijke middleware.
function middleware3(req, res, next) {
    console.log("I'm middleware 3");
    console.log("Some value from middleware2: ", req.someValue);
    next();
}

function standardCallbackfunc(req, res, next){
    console.log("I'm standard callback");
    res.send("<h1>HELLO WORLD</h1>");
}

// De global middleware declaratie van een error-handler zetten we altijd helemaal onderaan de app. Als er een error is worden
// Alle endpoints geskipt en wordt er naar de laatste errorhandler gezocht. 

app.use(errorHandler);

app.listen(8080);