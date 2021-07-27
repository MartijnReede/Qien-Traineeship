//Wat aanvullende String methods.

{

  let someString = "I love pizza very much!";

  console.log(someString.substring(5, 11))//van index nr 5 tot en met 10 (11 niet meegenomen).
  console.log(someString.substr(5, 5))//vanaf index nr 5 tot en met 5 characters verder.
  console.log(someString.toUpperCase());
  console.log(someString.toLowerCase());

  //Trim is bedoeld om white space te verwijderen aan de voor- en achterkant van een String.
  //Dit is heel handig bij bijvoorbeeld het verwerken van form-gegevens.

  let stringWithWhiteSpace = "           Blabla             ";
  let someStringWithoutWhiteSpace = stringWithWhiteSpace.trim();
  console.log(someStringWithoutWhiteSpace);

  //Een soort for-loop.
  let tickTock = "tickTock";
  console.log(tickTock.repeat(200));

  //Van een lange string naar een array d.m.v. split methode.
  let langeString = "Dit is een hele lange String met meerdere woorden.";
  console.log(langeString.split(" "));
  //Nu wordt er bij elke spatie een losse string aangemaakt. Alle losse woorden
  //worden verzameld in een array. 

}
