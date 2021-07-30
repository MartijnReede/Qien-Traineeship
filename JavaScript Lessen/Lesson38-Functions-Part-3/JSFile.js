/*
  In JavaScript kunnen we functions meegeven aan een andere function.
  De function die een andere function aanneemt noemen we ook wel de higher
  order functions.
*/

{

  function doSomething(func){
    return func();
  };

  let calc = () => 5 * 5;

  let y = doSomething(calc);

  console.log(y);
}


/*
  Dan hebben we nog callback functions. Waar het om gaat, is dat in tegenstelling
  tot in Java, als een function nog bezig is met het e.e.a uitzoeken. De code gewoon
  verder gaat. Wanneer de functie klaar is om bijvoorbeeld iets te returnen, dan zal
  hij dat op dat moment doen.

*/
