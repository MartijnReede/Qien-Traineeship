
//Onderstaand twee voorbeelden van hoe je door 2D arrays iterate.

{
  let grades = [
    [1, 4, 5, 7, 2, 1, 20],
    [2, 5, 2, 3, 5, 3, 36],
    [2, 6, 3, 2, 6, 2, 12]
  ];


  //Er doorheen iteraten met een gewone for-loop:
  for (let i = 0; i < grades.length; i ++){
    for (let j = 0; j<grades[i].length; j++){
      console.log(grades[i][j] + " - From for");
    }
  }

  //Er doorheen iteraten met een forEach loop:
  grades.forEach(function(element){
    element.forEach(function(element2){
        console.log(element2 + " - From forEach");
    });
  });


}
