/*
*/

{
  let myArray = [10, 9, 8, 3, 2, 1];

  myArray.push(7);
  console.log("D.m.v. .push(7) is het getal 7 aan het einde toegevoegd: " + myArray);

  myArray.pop();
  console.log("D.m.v. .pop() is het laatste getal in de array verwijderd: " + myArray);

  myArray.unshift(100);
  console.log("D.m.v. .unshift(100) is het getal 100 aan het begin van de array toegevoegd: " + myArray);

  myArray.shift();
  console.log("D.m.v. .shift() is het eerste getal van de array verwijderd: " + myArray);

  myArray.splice(1, 3);
  console.log("D.m.v. .splice(1,3) zijn er drie elementen verwijderd vanaf index nr 1: " + myArray);

  myArray.splice(1, 0, 11, 12, 13);
  console.log("D.m.v. .splice(allemaalGetallen) zijn er drie elementen toegevoegd aan de array: " + myArray);
  //Toelichting: getal 1 = start, getal 2 = hoeveel getallen verwijderen, getallen 3 en daarboven = welke getallen toevoegen.

  myArray.splice(1,4,0,0,0,0);
  console.log("D.m.v. .splice(allemaalGetallen) zijn er vier elementen vervangen met 0: " + myArray);
  //Toelichting: getal 2 is nu niet 0. We verwijderen eerst 4 elementen en vervangen deze vervolgens met nullen.
}
