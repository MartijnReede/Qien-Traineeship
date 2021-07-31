/*

  Object oriented programming in JavaScript is heel anders dan in Java.

*/

{
  //Een object beschrijft een entity, bijvoorbeeld:
  let martijn = {
    name: "Martijn",
    favFood: "Pizza",
    age: 30
  }

  /*
    //CONSTRUCTOR FUNCTION
    We kunnen een constructor gebruiken om objecten te creeren. We maken eerst een
    lege functie aan. Net als in Java schrijven we classes met een hoofdletter.
    Als we in deze functie het woord this gebruiken, zal deze refereren aan het object
    wat we op dat moment aan het maken zijn.
  */

  function Person(name, age, favFood){
    console.log(this); //resultaat is Person{};
    this.name= name;
    this.age = age;
    this.favFood = favFood;
  }

  let me = new Person("Martijn", 30, "Pizza");
  console.log(me);

  let you = new Person("Lucia", 37, "Pork");
  console.log(you);
}
