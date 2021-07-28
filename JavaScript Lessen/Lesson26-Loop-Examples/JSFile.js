{

  let password;

  do {
    password = prompt("Guess the password!").toLowerCase();
  } while (password !== "pizza");

  alert("Good job, you're in!");

  //Loop through an array
  let list = [1, 5, 2, 5, 3, 6, 3, 2, 6 ,7 ,3];

  for (let i = 0; i < list.length; i++){
    console.log(list[i]);
  }

  //Loop through a String.

  let someString = "I love pizza!";
  let charWeSearch = "p";

  for (let i = 0; i < someString.length; i++){
    if (someString[i] === charWeSearch) {
      console.log("p is found at index number: " + i);
    }
  }



}
