/*
  Er is een manier om de waarde van this aan te passen. Dit doen we d.m.v. de
  .call methode. We kunnen this elke willekeurige waarde geven zoals "HELLO".
*/

{

  function doStuff(input, input2){
    console.log(input, input2);
    console.log(this);
  }

  doStuff(5 , 6);
  doStuff.call("HELLO", 5, 6);

}

/*
  Hetzelfde kunnen we doen met de .apply methode. Dit doet exact hetzelfde zoals
  de .call methode alleen moeten we de arguments in een array meegeven.
  Onderstaand een voorbeeld:
*/

{

  function doStuff2(input, input2){
    console.log(input, input2);
    console.log(this);
  }

  doStuff2(5, 6);
  doStuff.apply("HELLO", [5, 6]);

}
