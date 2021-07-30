/*

  In JS bestaad method overloading niet. In de body van de methode moeten we dus
  code schrijven die zorgt dat als we meer of minder argumenten toevoegen als
  we de functie aanroepen, dat de methode nog steeds juist werkt. Dit kunnen we
  doen d.m.v. default, rest of implicit parameters.

*/

{
  //DEFAULT PARAM
  let a = 2;
  let b = 3;

  console.log(count(a, b)); // resultaat is 5.
  console.log(count(a)); // resultaat is 8 vanwegen default value 6.

  //Default argument. Als er niets voor b ingevuld wordt, is de waarde van b: 6.
  function count(a, b = 6){
    return a + b;
  }
}

{
  //OPTION 2

  let a = 2;

  function count(a, b){
    if (b === undefined) {
      b = 5;
    }
    return a + b;
  }

  console.log(count(a));
}

{
  //OPTION 3

  let a = 2;

  function count(a, b){
    b = typeof b === "undefined" ? 2 : b;
    return a + b;
  }

  console.log(count(a));
}

/*

  De bovenstaande voorbeelden gaan over een situatie waarbij er minder argumenten
  worden meegegeven dan nodig. Als er meer argumenten worden meegegeven kunnen we
  deze ook verwerken in de functie op de onderstaande manier:

*/

{

  let a = 2;
  let b = 3;

  function count(a, b, ...extra){
    console.log(extra);
  }

  console.log(count(a, b, 4, 6, 2, 5));

  // De ...extra wordt een array van alle waardes die na b nog worden meegegeven
  // aan deze functie.

}


{
  //Implicit arguments
  function count (a, b) {
    console.log(arguments);
    console.log(arguments[2]);
    return a + b;
  }

  count(1, 2, 3, 4, 5, 6, 7);

  /*
    Als we gebruik maken van het woord arguments in een funcie krijgen we een soort
    array tot onze beschikking. We kunnen de arguments opvragen zoals in een array
    maar alle andere array-methodes zijn niet tot onze beschikking.
  */

}
