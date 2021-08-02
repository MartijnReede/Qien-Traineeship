/*

  Er zijn talloze verschillende event-listeners in JavaScript. Onderstaand
  een voorbeeld.

*/

let button = document.getElementById("button");
let ol = document.getElementById("list");
let orderedList = document.getElementsByTagName("ol");
let ourList = orderedList[0];

ourList.onmouseover = function(){
  console.log("Mouse Over!");
  ourList.childNodes[1].childNodes[0].nodeValue = "Pannekoek!"
  document.getElementById("doner").innerHTML = "Patat!"; //veel betere methode!
}

button.onclick = function(){
  ol.remove();
}
