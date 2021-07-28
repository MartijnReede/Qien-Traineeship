/*
  Met de ternary operator kunnen we in één regel meerdere uitkomsten
  (true of false) behandelen. Neem het voorbeeld hieronder, waar een speler mijn
  naam moet raden.

  Je krijgt dan points += name === "martijn" ? 10 : 0;

  oftewel:
    - Punten plus 10 als de invoer gelijk is aan "martijn".
    - Punten plus 0 als de invoer niet gelijk is aan "martijn".

  Het gebruik van de operator op deze manier returned dus 10 of 0.

  Je kan er ook direct een statement inzetten. Dan zou het er zo uitzien:
  name === "martijn" ? console.log("10 points") : console.log("0 points");


*/

{
    let gamePoints = 0;

    let name = prompt("What is my name?").toLowerCase();

    gamePoints += name === "martijn" ? 10 : 0;

    alert("Je score is " + gamePoints);
}
