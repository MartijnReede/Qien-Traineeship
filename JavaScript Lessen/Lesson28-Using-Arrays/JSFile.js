/*
  Het maken van een array in JavaScript lijkt heel erg op hoe je dat in Java doet.
  Voorbeeld:

  let myArray = [1, 4, 2, 4, 2];
  of let myArray = ["Hoi", "Hello", "Bye"];

  We kunnen de lengte opvragen d.m.v. myArray.length.

  Er zijn dingen anders in JavaScript met Arrays in vergelijking met Java.
  We kunnen de lengte aanpassen van een Array.

  Het is ook mogelijk om bepaalde functies in een array te zetten.
*/

{
  /*
  Onderstaand een voorbeeld waarin we de lengte van een array aanpassen.
  We kunnen de lengte vergroten of verkleinen. Als er lege plekken ontstaan
  dan krijgen deze plekken de waarde "undefined".
  */

  let myArray = [1, 4, 2, 3];

  myArray.length = 30;

  for (let i = 0; i <myArray.length; i++){
    console.log(myArray[i]);
  }

  console.log("\n-------------------------------------------\n\n");

  /*
    Het is ook mogelijk om een array een waarde te geven op een index die nog
    helemaal niet bestaat. Dit zal de array verlengen tot die index.
    Het kan zijn dat er hierdoor lege plekken ontstaan in een array. Onderstaand
    weer een voorbeeld.
  */

  let myArray2 = [1, 5, 2];
  myArray2[10] = 4;

  for (let i = 0; i <myArray2.length; i++){
    console.log(myArray2[i]);
  }

    console.log("\n-------------------------------------------\n\n");

  /*
    Om ervoor te zorgen dat je lege plekken geskipt worden zou je bijv. de
    onderstaande code kunnen gebruiken:
  */

  for (int i = 0; i < myArray.length; i++){
    if (myArray[i] !=== undefined) {
      //legit
    } else {
      //not legit
    }
  }

}

{
  /*
    Het gebruik van 2D-arrays werkt ook ongeveer hetzelfde als in Java, alleen
    kunnen we verschillende soorte data typen gebruiken. Dit zou bijvoorbeeld handig
    kunnen zijn met het bijhouden van cijferlijsten. Zie het onderstaande voorbeeld:
  */

  let grades = [
    ["Kevin", 3, 6, 3, 8],
    ["Lucia", 3, 7, 6, 9],
    ["Cyrille", 2, 7, 1, 9]
  ];

  // Het opvragen van gegevens uit deze 2D-array werkt hetzelfde als in Java.

  console.log(grades[0]);
  console.log(grades[1][2]);

}
