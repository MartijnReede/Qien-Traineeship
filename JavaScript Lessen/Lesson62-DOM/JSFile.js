/*

  DOM staat voor document object model.

  Als we naar de console gaan in onze browser, dan kunnen we in de console intypen:
  document.childnodes, wanneer we dan op enter drukken kunnen we naar html gaan,
  dan klikken we op body, dan weer naar childNodes. Als we dit openklikken
  krijgen we de structuur van onze webpagina te zien.

  d.m.v. de onderstaande code kunnen we handmatig naar bepaalde elementen navigeren.
  Naast alle elementen staan nummertjes, dit zijn index nrs.
*/

let orderedList = document.childNodes[1].childNodes[2].childNodes[3];
console.log(orderedList);
orderedList.style = "background-color: green";

//Vanaf hier kunnen we ook de parent van de OL pakken (in dit geval de body).
orderedList.parentElement.style= "background-color: blue";

//Vanaf hier kunnen we ook naar onderen navigeren d.m.v.
orderedList.previousSibling.previousSibling.style = "background-color: red");

//We kunnen ook orderedList.nextSibling doen.
