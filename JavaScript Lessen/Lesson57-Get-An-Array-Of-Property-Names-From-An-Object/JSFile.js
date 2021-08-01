/*

  Er zijn twee manieren om alle properties op te vragen.
  1. Alle properties inclusief het prototype.
  2. Alle properties van alleen het object.

*/

{


  let user = {
    active: true,
    sayHello: function(){
      console.log(this.name + " says hello!");
    }
  };

  let student = {
    name: "Martijn",
    age: 30

  }

  Object.setPrototypeOf(student, user);

  let allProperties = [];
  let ownProperties = [];

  //Beide manieren in 1
  for (let property in student){
    allProperties.push(property);

    if (student.hasOwnProperty(property)){
      ownProperties.push(property);
    }

  }

  console.log("All properties:");
  allProperties.forEach(function(e){
    console.log(e);
  });

  console.log("~~~~~~~~~~~~~~~~");
  console.log("Own properties:");
  ownProperties.forEach(function(e){
    console.log(e);
  });


}
