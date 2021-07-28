{
  let myArray = [3, 10, 22, 24, 15, 1];

  //Alle elementen in de array worden ge-reversed.
  console.log(myArray.reverse());

  // Met de onderstaande methode passen we alle waardes in de array aan.
  //  - Getal 1 = De gewenste waarde.
  //  - Getal 2 = Vanaf welke index beginnen.
  //  - Getal 3 = Tot waar de waardes ingevuld moeten worden.

  console.log(myArray.fill(-1, 0, myArray.lenght));


  //Met .concat() kunnen we twee arrays samenvoegen.
  let myOtherArray = [0, 1, 20, 30, 100, 10000];

  let bothArrays = myOtherArray.concat(myArray);
  console.log(bothArrays);

  //Belangrijk om te weten is dat er met de concat methode een nieuwe array gereturned wordt.
  //Met push wordt de originele array aagepast. Dit zijn twee verschillende dingen.

  //met .includes(20) kunnen we checken of het getal 20 voorkomt in een array.
  console.log(bothArrays.includes(20));

  //Om een string te krijgen van een array kunnen we de join() method gebruik.
  //Tussen de haakjes kunnen we een gewenst teken aangeven dat de elementen van elkaar
  //onderscheidt.

  console.log(bothArrays.join());
  console.log(bothArrays.join("*"));
}
