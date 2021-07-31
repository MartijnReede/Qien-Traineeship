/*

  We hunnen het prototypeobject handmatig instellen. Onderstaand een voorbeeld:

*/


{
  let userType = {
    active: true,
    displayUser: function(){
      console.log(this);
    }
  }

  let teacher = {
    teaching: ["Math", "Science"]
  }

  let student = {
    learning: ["nothing"]
  }

  Object.setPrototypeOf(teacher, userType);
  Object.setPrototypeOf(student, userType);

  console.log(teacher.active);
  teacher.displayUser();

  console.log(student.active);
  student.displayUser();

  //Teacher is nu eigenlijk inherited van userType.
  //We zouden nu bijvoorbeeld ook een Student kunnen maken die ook van userType
  //inherited is.
}
