/*
  Zoals in de vorige lessen besproken zijn const en let variabelen alleen beschikbaar in
  het code-block waarin ze gedeclareerd zijn. Een code-block maken kan heel simpel d.m.v.
  twee {} (zie hieronder).
*/

{

  let age = 50;
  const anotherAge = 100;
  var sayHello = "hello";
  console.log(age, anotherAge);

}

/*
  console.log(age, anotherAge); --> deze code werkt hier niet, omdat hij buiten de scope is
    van de let en const variabelen.

  De onderstaande code werkt wel, omdat var niet gelimiteerd wordt door het codeblock, slechts
  door een IIFE. Als deze declaratie niet binnen een functie staat zal deze var onderdeel worden
  van het window object.
*/

console.log(sayHello);
