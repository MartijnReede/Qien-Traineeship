/*
  In deze opdracht ga  ik het gemiddelde vinden in een array met undefined waardes.
  We kunnen dus (in vergelijking met Java) geen gebruik maken van de array.length methode.
*/

{

  let myArray = [2, 4, 6, 3, 6, 2, 1, 6, 7, 3, 2];
  myArray[100] = 50;

  let totalAmountOfNumbers = 0;
  let totalArrayAmount = 0;

  for (let i = 0; i< myArray.length; i++){
    if (myArray[i] !== undefined) {
      totalAmountOfNumbers ++;
      totalArrayAmount += myArray[i];
    }
  }

  console.log("The everage of the array is: " + (totalArrayAmount / totalAmountOfNumbers).toFixed(2));

}
