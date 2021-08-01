/*

  Met de onderstaande code kunnen we kijken of een property in een object bestaat.

*/

{

  let peopleOnSchool = {
    active: true
  };

  let student = {
    name: "Martijn",
    age: 30,
    favFood: "Pizza"
  };

  Object.setPrototypeOf(student, peopleOnSchool);

  console.log("Name in student? ", "name" in student);
  console.log("Tacos in student? ", "tacos" in student);

  //Er wordt verder gezocht in het prototype als de property niet gevonden wordt
  //in het student objec.
  console.log("Active in student? ", "active" in student);

}
