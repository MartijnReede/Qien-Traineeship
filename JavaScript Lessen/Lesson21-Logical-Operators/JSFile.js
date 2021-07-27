/*
  Logical operators zijn bijvoorbeeld:

  ||    -   OR
  &&    -   AND
  !     -   NOT

  Hetzelfde als in Java.....
*/

{

  let age = prompt("Voer je leeftijd in.");
  let name = prompt("Voer je naam in.").toLowerCase();

  if (age > 12 && name === "martijn"){
    alert("Welcome Martijn!");
  }
}
