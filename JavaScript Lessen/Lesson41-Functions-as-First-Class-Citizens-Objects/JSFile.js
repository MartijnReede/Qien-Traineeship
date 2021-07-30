/*
  In JavaScript behandelen we functies als objects. Dit betekend dat we functions
  kunnen toevoegen aan een array. Ook kunnen we bepaalde properties toevoegen aan
  een functie. Een property  zou bijvoorbeeld een beschrijving kunnen zijn van
  wat de functie doet. Onderstaand voorbeelden:
*/

{

  let myArray = [plus];

  function plus(a, b) {
          return a + b;
  }

  plus.description = "Hello";

  console.log(plus.description);
  console.log(myArray[0](1,2));

}
