// stap 0, verwijder alle files van de scr folder.
//stap 1, React importeren.
import React from "react";

//stap 2, ReactDOM importeren
import ReactDOM from "react-dom";

//De bovenstaande stappen zijn nodig om react te laten draaien. DOM staat voor
//document object model.

//stap 3, de daadwerkelijke app importeren. Dit is onze app, deze bestaat nog
// niet op het moment dat je dit schrijft, we moeten eerst de app maken.
import App from "./App";

//Stap 4, de app laten zien in de browser. We moeten de app in de div "root"
//zetten in de index.html file. Dit doen we d.m.v. de onderstaande code.
ReactDOM.render(<App />, document.getElementById("root"));

//Stap 5, maak de app aan door in de source folder een nieuwe file aan te maken
//met de naam App.js.
