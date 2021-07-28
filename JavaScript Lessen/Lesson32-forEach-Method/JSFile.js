/*
    Het voordeel van het gebruik van een forEach methode in JavaScript is dat de
    undefined elementen niet meegenomen worden.
*/

{

  let grades = [1, 5, ,3, 2, 1, 6, 2, 10];
  grades[100] = 99;
  grades.forEach(function(element) {
    console.log("Found element: " + element);
  });

  //geeft ook de index nrs weer.
  grades.forEach(function(element, i) {
    console.log("Found element: " + element + " at index: " + i);
  });

  //geeft ook de array weer.
  grades.forEach(function(element, i, array) {
    console.log("Found element: " + element + " at index: " + i + " uit array: " + array);
  });
}
