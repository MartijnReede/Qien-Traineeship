/*

  Het is mogelijk om bepaalde waardes van het prototype te veranderen. Dit betekend
  dan vervolgens niet dat alles wat ge-inherit wordt van het prototype die waarde ook krijgt.
  Waarom? Omdat de aangepaste waarde aan het child-object wordt toegevoegd. Deze waarde
  override dan vervolgens de prototype waarde als we deze opvragen.

  Onderstaand een voorbeeld:
*/


{

  //Eerst maken we het prototype en de verschillende objecten aan.

  let user = {
    active: true
  };

  let student = {
    courses: ["Math", "Science"]
  };

  let teacher = {
    teaching: ["English", "History"]
  };

  Object.setPrototypeOf(student, user);
  Object.setPrototypeOf(teacher, user);

  //Beide waardes zijn logischerwijs true.
  console.log("Student.active = " + student.active);
  console.log("Teacher.active = " + teacher.active);

  console.log("~~~~~~~~~~~~~~~~");

  //Nu pas ik de waarde van student.active aan, we kijken dan vervolgens of
  //de waarde  van teacher.active hiermee ook is aangepast.

  student.active = false;
  console.log("Student.active = " + student.active);
  console.log("Teacher.active = " + teacher.active);

  console.log("~~~~~~~~~~~~~~~~");

  //Als ik nu beide objecten print zullen we zien dat de active waarde bij het
  //object is gezet i.p.v. dat het prototype waarde is aangepast.

  console.log("Student: ", student);
  console.log("Teacher: ", teacher);

  //De waarde van active, die nu bij het student object is geplaatst, override
  //de waarde van het prototype.

  //JS zal eerst zoeken op het child-object voordat het verder zoekt in de parents (prototype).


}
