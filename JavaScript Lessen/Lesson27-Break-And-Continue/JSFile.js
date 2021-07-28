/*
  Break en continue werken hetzelfde als in java....
*/

{

  let someString = "The food I love very very much is PIZZA!";

  //Break if P is found
  for (let i = 0; i < someString.length; i++){
    if (someString[i] === "P"){
      console.log("Found P at index: " + i);
      break;
    } else if (someString[i] === "o") {
      continue;
    }

      console.log("P not found at index number: " + i);
    }
}
