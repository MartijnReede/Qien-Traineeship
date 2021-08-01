/*

  In deze les hebben we de code van vorige lessen geconvert naar constructors.
  Dit is een veel gangbaardere manier om je code te schrijven zodat je makkelijk
  meerdere teachers en students kan aanmaken d.m.v. bijvoorbeeld een for-loop.

  Het instellen van de prototype hierargie doen we nu ook anders. Onderstaand
  een voorbeeld:

*/

{

  function User(){
    this.active = false;
  }

  User.prototype.sayHello = function(){
    console.log(this.name + " says hello!");
  }


  function Student(name, age){
    this.name = name;
    this.age = age;
  }

  function Teacher(name, subjects){
    this.name = name;
    this.subjects = subjects;
  }

  //PROTOTYPE HIERARGIE
  Student.prototype = new User();
  Teacher.prototype = new User();

  let student = new Student("Martijn", 30);
  let teacher = new Teacher("Caleb", ["Java", "JavaScript"]);

  console.log(student.active);
  console.log(teacher.active);




}
