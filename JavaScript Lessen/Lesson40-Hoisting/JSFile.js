/*

  Hoisting betekend dat je JavaScript code eerst wordt gescand voordat het
  wordt uitgevoerd. Niet alles wordt gescand, voorbeeld:

  console.log(x);
  var x = 10;

  De console.log zal undefined aangeven. Het enige wat opgeslagen zal worden
  in het hoisting proces is namelijk var x. de = 10 zal pas tijdens het
  uitvoeren van de code worden gezien.


  Met functions werkt het anders, deze wordt (inclusief de body) gescand in het Hoisting
  proces. We kunnen de functie dan alleen niet creeeren d.m.v. een function expression.
  Dan zal alleen de variabele gescand worden en niet de functie.
*/

{

  /*
    Voorbeeld met variabelen die niet werken d.m.v. hoisting.

    console.log(x);
    let x = 10;
    GEEFT EEN ERROR!
  */

  //Hoisting voorbeeld met function wat werkt:
  doStuff();

  function doStuff(){
    console.log("Hello!");
  }

  /*
    Hoiting voorbeeld met een functie wat niet werkt:

    x();
    let x = function(){
      console.log("hello");
    };

    Dit werkt niet omdat we hier de functie aanmaken d.m.v. een function expression.
    Het hoisting proces zal hier alleen let x scannen. 

  */
}
