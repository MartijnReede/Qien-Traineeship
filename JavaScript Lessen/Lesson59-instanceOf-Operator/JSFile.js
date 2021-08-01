/*

  Met de instanceof operator kunnen we checken of een instance een instanceof van
  iets is. Omdat ik nu User als parent (oftewel prototype) heb ingesteld, zijn beide
  onderstaande console.logs true.

*/

{


  function User(){
    this.active = true;
  }

  function Student(name, age){
    this.name = name;
    this.age = age;
  }

  Student.prototype = new User();

  let student = new Student("Martijn", 30);

  console.log(student instanceof Student);
  console.log(student instanceof User);


}
