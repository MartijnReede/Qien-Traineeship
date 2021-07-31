/*

  Zodra we wat grotere applicaties gaan maken, waarbij de methods in een object
  groter worden. Kan het handig zijn om deze methodes extern te definieeren.
  De reden hiervoor is dat telkens als we een nieuw object aanmaken, deze methodes
  meegenomen worden in het object. Als dit grote methodes zijn vragen deze veel
  geheugen. Het extern definieeren van methodes kunnen we doen d.m.v. .prototype.
*/
{
  function User(name, age, interests){
    this.name = name,
    this.age = age,
    this.interests = interests
  }


  //Alle User objecten hebben toegang tot deze methode, maar de methode wordt maar
  //één keer gecreerd. Als we deze in de bovenstaande functie zouden zetten, dan zou
  //deze methode elke keer in het User object gestopt worden, dit kost geheugen.
  User.prototype.printUser = function(){
    console.log("This is:" + this.name + ".\n" +
                "Age is: " + this.age + ".\n" +
                "The intersts are: " + this.interests + ".");
  }

  let me = new User("Martijn", 30, ["Climbing", "Playing piano", "Skiing"]);
  me.printUser();


  /*
    Inheritance is een concept dat ook voorkomt in JavaScript. Dit gebeurt met het
    prototype object. Stel je hebt twee objecten die beide gebruik maken van
    een prototype object waarin de methodes beschreven staan. Je zou het protype
    object dan kunnen zien als een soort parent-object.

    Prototype objecten kunnen ook weer een parent prototype object hebben.
  */

}
