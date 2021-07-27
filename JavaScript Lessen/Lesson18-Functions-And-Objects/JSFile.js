

{
  /*
    Een object maken in JavaScript is erg simpel. Je maakt een variabele aan en
    schrijft alle properties daaronder op. Properties kunnen in dit geval ook
    functions zijn.

    Vaak zeg je property als je spreekt over een bepaalde waarde, zoals x = 10;
    Vaak zeg je method als je spreekt over een function.
  */

  let pos = {
    x: 10,
    y: 20
  }

  console.log(pos);

  /*
    Net als in Java wijst een naam van een object naar een memory address.
    Hieronder een voorbeeld:
  */

  let posCopy = pos;
  posCopy.x = 15;

  //Nu zullen we zien dat x bij zowel pos als posCopy de waarde 15 heeft.

  console.log(pos);
  console.log(posCopy);
}

{
  //Hieronder een voorbeeld van een object met methods (functions).

  let functionObject = {
    naam: "functionObject",
    printNaam: function() {
      console.log(functionObject.naam);
    }
  }

  console.log(functionObject);
  functionObject.printNaam();

}

// De term JSON --> JavaScript Object Notation!
