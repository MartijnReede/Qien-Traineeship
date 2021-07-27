/*

  De condition operators zijn anders dan in Java.
  ===   --> is gelijk aan operator. Checkt ook of  het datatype hetzelfde is (bijvoorbeeld 5 en "5").

  let x = 5;
  (x === "5") zal resulteren in false.

*/

{
  var name = prompt().toLowerCase();

  if (name === "martijn"){
    console.log("Welcome Martijn!");
  } else if (name === "lucia"){
    console.log("Welcome Lucia!");
  } else {
    console.log("You are not welcome!");
  }
}
