/*

  Met de methode hasOwnProprty("") checken we of het object zelf (en dus niet
  het prototype) een property bevat. Onderstaand een voorbeeld:

*/

{


  let user = {
    active: true
  };

  let student = {
    name: "Martijn",
    age: 30
  };

  Object.setPrototypeOf(student, user);

  console.log("Has name: ", student.hasOwnProperty("name"));
  console.log("Has active: ", student.hasOwnProperty("active"));

  student.active = false;

  console.log("Has active after override: ", student.hasOwnProperty("active"));


}
