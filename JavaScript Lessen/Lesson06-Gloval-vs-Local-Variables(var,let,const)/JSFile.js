/*
  De onderstaande variabele zal alleen beschikbaar zijn in de functie waar
  hij in staat. Als we het var keyword niet zouden gebruiken zal er worden
  gezocht in een grotere scope, net zo lang tot het de global scope bereikt heeft.
  In dat geval zal deze variabele onderdeel worden van het window object.
*/

(function (){

  var dezeVarIsAlleenInDezeFunctieBeschikbaar = "Alleen hier";

})();

/*
  Er zijn nog twee andere manieren om een variabele te declareren, namelijk:
  "const" en "let".

  let:

  Bij een let variabele wordt er alleen gezocht binnen het blok code (dus tussen twee {})
  waarin het gedeclareerd wordt. Dit noemen we ook wel "block level scope". Neem bijvoorbeeld:
*/

  if (true) {
      let eenVariabele = 5;
  }

/*
  Buiten dit if statement zal "eenVariabele" niet beschikbaar zijn.

  Const:

  Een const variabele is ook niet beschikbaar buiten het blok code waarin het gedeclareerd
  wordt. Het enige verschil is dat de waarde van een const niet kan veranderen.
*/
