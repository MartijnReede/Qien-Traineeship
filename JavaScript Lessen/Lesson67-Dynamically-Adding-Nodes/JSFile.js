/*

 Om elementen toe te voegen aan de webpagina kunnen we JS gebruiken. Onderstaand
 een vooreeld:

*/

{

  let list = document.getElementById("list");
  let inputField = document.getElementById("inputField");
  let button = document.getElementById("button");


  button.onclick = function () {
    let liNode = document.createElement("li");
    let node = document.createTextNode(document.getElementById("inputField").value);

    liNode.appendChild(node);
    list.appendChild(liNode);
  }

}
