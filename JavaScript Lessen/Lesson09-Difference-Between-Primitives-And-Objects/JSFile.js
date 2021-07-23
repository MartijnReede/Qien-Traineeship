/*
  Op primitive datatypes kunnen geen methodes losgelaten worden. Achter de schermen
  worden primitieve datatypes omgezet naar een object zodat er bijvoorbeeld
  een toUpperCate() methode op losgelaten kan worden.

  Net als in Java kan je een variabele maken met een primitief datatype:
  let x = 5;
  Je kan er ook direct een object van maken, maar dit wordt zelden zo gebruikt:
  let x = new Number(5);
*/

{
  let myName = "Martijn";
  myName = myName.toUpperCase();
  console.log(myName);
}
