
/*
  Met het String datatype kunnen we ongeveer op dezelfde manier zoals in Java
  methodes aanroepen. Onderstaand een paar voorbeelden.
*/

{
  //Om de letter op index pos. 2 te printen.
  let myName = "Martijn";
  console.log(myName[2]);

  console.log("Hi, my name is: " + myName + ".");
  //Het bovenstaande kan ook op een overzichtelijkere manier getype worden:
  console.log(`Hi, my name is ${myName}.`);
  //Op de bovenstaande manier hoeven we geen gebruik te maken van allerlei
  // + operators en "".

  //Het onderstaande kan ook op twee manieren:
  let test = "BLABLABLA" +
            "blabla2";
  console.log(test);
  //De andere manier:
  let test2 = "BLABLABLABLABLABAL\
BLABLABLA";
  console.log(test2);
  //D.m.v. een backslash kunnen we op de volgende regel verder gaan. In de console
  //wordt deze String nog steeds als één regel beschouwd.

  //Om de lengte van een String te krijgen:
  console.log(test2.length);
}
