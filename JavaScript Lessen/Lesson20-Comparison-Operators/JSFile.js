/*
  Comparison operators (bijna hetzelfde als in Java):

  >=    -   meer dan of gelijk aan.
  <=    -   minder dan of gelijk aan.
  >     -   meer dan.
  <     -   minder dan.
  etc. etc. etc......

  Vooral belangrijk om te weten is dat de bovenstaande operators niet controleren op datatype.
  Willen we daar wel op controleren, bijvoorbeeld == of !=, dan moeten we de onderstaande
  operators gebruiken:

  ===   -   is gelijk aan, en het datatype moet hetzelfde zijn.
  !==   -   is niet gelijk aan, en het datatype moet hetzelfde zijn. 
*/

{
  let input = prompt("Voer het getal 5 in."); //retruns een String

  if (input == 5) { //vergelijkt het met een nummer.
    alert("Goed gedaan!");
  } else {
    alert("You lose!");
  }


}
