/*
  Wanneer moeten we properties op het prototype zetten, en wanneer op het child-object?
  Net als in Java, beschrijven we core-functionality in de parent(prototype). Onderstaand een
  voorbeeld:
*/

{

  let peopleOnSchool = {
    active: true,
    sayHello: function() {
      console.log(this.name + " says hello");
    }
  };

  let student = {
    name: "Martijn"
  };

  let teacher = {
    name: "Lucia"
  };

  Object.setPrototypeOf(teacher, peopleOnSchool);
  Object.setPrototypeOf(student, peopleOnSchool)

  student.sayHello();
  teacher.sayHello();

  //Mochten we voor specifieke personen een speciale manier hebben van hallo zeggen
  //dan kunnen we deze overriden zoals in de vorige les uitgelegd.

}
