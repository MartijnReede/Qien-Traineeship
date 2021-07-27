/*
Een switch statement in JavaScript werkt hetzelfde als in Java. Onderstaand
een voorbeeld.
*/

{

  let name = prompt("Voer je naam in.").toLowerCase();

  switch(name){

    case "martijn":
    case "lucia":
      alert("Jij woont in Amsterdam-Oost.");
      break;
    case "kevin":
    case "rosan":
      alert("Jij woont in Amsterdam-Oost.");
      break;
    case "cyrille":
    case "martina":
      alert("Jij woont in Amsterdam-West.")
      break;
    default:
      alert("Ik heb geen idee waar jij woont!");
  }

}
