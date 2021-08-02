/*

  Text nodes hebben ook een optie childNodes die we kunnen uitklappen in de
  console. Pas als we een text-node hebben zal er ook een NodeValue verschijnen.
  Bij een element-node zal deze waarde null zijn, ook al staat er bijvoorbeeld
  wat geschreven in de paragraph.

*/

{

  let paragraphs = document.getElementsByTagName("p");
  console.log(paragraphs);
  console.log(paragraphs[0].nodeValue); // null
  console.log(paragraphs[0].childNodes[0].nodeValue); //waarde: Very Important information.
  //Met de laatste console.log wijzen we naar het text gedeelte in de p-node.

  //We kunnen dus ook de nodeValue aanpassen:
  paragraphs[0].childNodes[0].nodeValue = "I love lamas!";


}
