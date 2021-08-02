/*

  Er zijn eigenlijk maar twee belangrijke node types namelijk:
  1. Element-node   ->    zoals <p> of <div>.
  2. Text-node      ->    de text in een <p> tag bijvoorbeeld.

  Een element-node heeft node-type 1.
  Een text-node heeft node-type 3.

  Dit kunnen we opzoeken als we in de console naar document.childnodes gaan
  en dan weer helemaal doorzoeken tot bepaalde elementen.

  Een <ol> en <li> zijn dus beide een element-node van type 1.
  Als we kijken naar de child-nodes van <li> dan zullen we uitkomen op de
  text van het list item. Dit is een text-node van het type 3.

*/

let li = document.getElementsByTagName("li");

if (li[0].nodeType === 1) {
  console.log("This is an element.."); //Dit zal het resultaat zijn...
} else if (li[0].nodeType === 3) {
  console.log("This is text..");
}

if (li[0].childNodes[0].nodeType === 1) {
  console.log("This is an element..");
} else if (li[0].childNodes[0].nodeType === 3) {
  console.log("This is text.."); //Nu refereren we aan de text in li.
}
