/*
  In Javascipt zijn er twee soorten datatypen namelijk:
  - Primitive types
  - Objects

  Primitive types in JavaScript zijn: String, number, bigint, boolean, undefined,
  symbol, null.

  In JavaScript is de onderstaande code geen enkel probleem:
*/

{
  let a = 5;
  let b = "10";

  console.log("a + b = " + a + b);
}

/*
  In de console zal nu het resultaat 510 verschijnen. Er zal niet gerekend
  worden met de Integer en String, ze worden gewoon aan elkaar geplakt.
*/

{
  let a = 5;
  let b = 10;

  console.log(a + b);
}

/*
  De code hierboven zal niet aan elkaar geplakt worden, maar bij elkaar opgeteld.
  Onderstaand een voorbeeld van een object in JavaScript:
*/

{
  let person = {
    name: "Martijn",
    age: 30,
    favFood: "Tiramisu"
  }

  console.log(person);
}

/*
  In een object kunnen we ook functies toevoegen:
*/

{
  let person = {
    name: "Martijn",
    age: 30,
    fun: function(){
      console.log("YAY!");
    }
  }

  console.log(person.age);
  person.fun();

}
