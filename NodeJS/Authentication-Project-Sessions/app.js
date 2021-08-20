const express = require("express");
const session = require("express-session");
const port = 8080;
const app = express();

/*

By default gebruikt session lokaal geheugen. Dit willen we eigenlijk niet, maar voor nu laat ik dit even zo.
We moeten deze app.use boven de end-point declaratie zetten, anders werkt het niet. Als we nu de browser
verversen zien we dat er een cookie is aangemaakt. De waarde van deze coockie is een ID die matcht met ons als
gebruiker. Een unieke code die ons identificeert. In dit geval is dat de onderstaande response header:

Set-Cookie: connect.sid=s%3AE-4
xLwAz_mjdrQZ3U3QiAle12V8e_cUs.ZKqT53gLyVqkE1qYK0GOEUnbtSGIsNKVRRyLU%2BIxkOI; Path=/; HttpOnly


Wat doet de express-session middleware eigenlijk?

1. Met elke request neemt express de cookie aan.
2. Het neemt de waarde van de cookie. 
3. Hij zegt, kijk naar deze ID in de session-stor (of andere opslagplek).
4. Checkt of de session valid of unvalid is. 
5. Authoriseerd de gebruiker of juist niet. Of haalt informatie op over de gebruiker (hoe vaak site bezocht, etc.).
*/

app.use(session({
    secret: "secret",
    resave: "false",
    saveUninitialized: true,
    cookie: {
        maxAge: 100000
    }
}));


app.get("/", (req, res, next) => {

    //We kunnen informatie ophalen van de sessie. We zien dan de cookie met
    //expire datum. Maar we kunnen ook data hieraan toevoegen, zoals bijvoorbeeld hoe vaak een user onze pagina
    //heeft bezocht.

    if (req.session.viewCount) {
        req.session.viewCount++;
    } else {
        req.session.viewCount = 1;
    }

    console.log(req.session);
    res.send(`<h1>Amount of views: ${req.session.viewCount}</h1>`);
});


app.listen(port);
