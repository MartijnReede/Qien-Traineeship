/*
  Functions zijn net als methods in Java. Onderstaand een voorbeeld:
  Functions zijn objecten!

  In Javascript kunnen we zelfs een function returnen!
*/

{

  let x = 2;

  function myFirstFunction(x){
    return x + x;
  };

  let y = myFirstFunction(x);

  console.log(y);

}

/*
  Er zijn wel duidelijke verschillen ten opzichte van andere talen. myFirstFunction
  neemt x als een argument. Maar we zouden ook myFirstFunction kunnen aanroepen
  zonder argument, of met meerdere argumenten.
*/

{

  function mySecondFunction(x) {
    return x + x;
  };

  let y = mySecondFunction();

  let z = mySecondFunction(10, 20, "Hello");

  console.log("y = " + y); //Uitkomst is NaN.
  console.log("z = " + z); //Uitkomst is 20. Alleen het eerste argument wordt meegenomen.
}

/*
  Method overloading bestaat niet in JavaScript. Als je zo'n soort mechanisme
  wil maken, dan zal je deze logica in de body van de function moeten verwerken.

*/
