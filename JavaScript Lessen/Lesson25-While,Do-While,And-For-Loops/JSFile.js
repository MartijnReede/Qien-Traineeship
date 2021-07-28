/*

  - While loop
  - Do while loop
  - For loop

  - Initialization
  - condition
  -update

*/


{

  let i = 0;
  while (i < 10) {
    console.log(i);
    i ++;
  }

  guessedNumber = -1;
  correctNumber = 5;
  do {
    guessedNumber = prompt("Guess a number from 1 to 10...");
  } while (guessedNumber != correctNumber);

  alert("Correct! The right number is 5!");

  for (let i = 0; i < 10; i++){
    console.log("i from for loop is: " + i);
  }

}
