//Onderstaand mogelijke methodes op String instances.

{
    let someString = "I love pizza";

    console.log(someString.charAt(0));
    console.log(someString.concat(" very much!")); // kunnen ook gewoon de + operator gebruiken.

    let search1 = "pizza";
    let search2 = "healthy food";

    //Hetzelfde als de .contains methode in Java.
    console.log(someString.includes(search1));
    console.log(someString.includes(search2));

    //We kunnen ook vanaf een bepaalde index beginnen.
    console.log(someString.includes(search1, 50)); //false, want na index nr 50 is er geen pizza meer.

    //Op welke index de String gevonden is. -1 als de String niet gevonden is.
    console.log(someString.indexOf(search1));
    console.log(someString.indexOf(search2));

    //Zoekt vanaf de achterkant van de String.
    console.log(someString.lastIndexOf("i"));
}
