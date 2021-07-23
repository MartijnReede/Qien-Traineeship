/*
  Net als in Java kan je de parseInt methode gebruiken.
*/

{
  let stringNumber = "10";
  let number = 5 + Number.parseInt(stringNumber);
  console.log(number);
}


//Dit werkt ook:
{
  let stringNumber = "15.999999 blablablablabla";
  let number = 5 + Number.parseInt(stringNumber);
  console.log(number);

  //Let op, dat met parseInt de getallen achter de komma niet meegenomen worden.
  //Het getal wordt ook niet afgerond. Mocht je getallen achter de komma willen
  //parsen, gebruik dan Number.parseFloat();
}

{
  let stringNumber = "5.999999 blablablabla";
  let number = 5 + Number.parseFloat(stringNumber);
  console.log(number);
}
