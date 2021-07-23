/*
  Operators in JavaScript:
  + plus
  - min
  * keer
  / gedeeld door
  % modulus operator

  De modulus operator geeft (net als in Java) een restand door.
  slicesOfPizza % 3 = 1. (3*3 = 9) en dan blijft er 1 over.
*/

{
  let slicesOfPizza = 10;
  let amountOfPeople = 3;
  console.log("Slices over: " + slicesOfPizza % amountOfPeople);
}

/*
  Precedence: De volgorde waarin operators ingeschakeld worden. Neem bijv:

  console.log(3 + 5 * 3 - 20 / 3). De * en / operators worden eerste uitgerekend

  voordat de andere operators ter sprake komen. Er staat dus eigenlijk:

  console.log(3 + (5 * 3) - (20 / 3).

*/
