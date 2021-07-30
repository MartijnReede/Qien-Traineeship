/*
  In tegenstelling tot in Java betekend "this" soms iets anders.
*/


{
  /*
  1:
    Wanneer we een object hebben met daarin een function, en in die function gebruiken
    we het woord this, dan refereren we aan het object.
  */

  let person = {
    name: "Martijn",
    sayName: function(){
      console.log(this.name);
    }
  }

  person.sayName();

  /*
    Onderstaand een voorbeeld waarbij de waarde van this verschillend is.
    - person2.outputMe() refereert aan het object person2.
    - outputMe() refereert aan het window object.

    Het hangt er dus vanaf op welke manier een functie aangeroepen word.
  */

  let person2 = {
    name: "Harry",
    outputMe: outputMe
  }

  function outputMe(){
    console.log(this);
  }

  person2.outputMe();
  outputMe();

}
