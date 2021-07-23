/*
  Er is maar één datatype voor nummers, anders als in Java waar je int, double etc hebt.
  Net als in Java moet je soms oppassen met het gebruiken van grote getallen.
  Er is een max en min limiet aan welke getallen je "veilig" kan gebruiken.
  Deze max en min getallen kan je opvragen d.m.v. Number.MAX_SAFE_INTEGER
  en Number.MIN_SAFE_INTEGER

*/

{
  let x = 5;
  x = 5.5;

  console.log(Number.MAX_SAFE_INTEGER);
  console.log(Number.MIN_SAFE_INTEGER);
}

/*
  Om te checken of een nummer veilig is om te gebruiken kunnen we de isSafe methode
  aanroepen:
*/

{
  let a = 193830293859203582352352352134;
  let b = 4;

console.log(Number.isSafeInteger(a));
console.log(Number.isSafeInteger(b));
}
