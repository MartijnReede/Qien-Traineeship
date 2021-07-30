/*
  Belangrijk om te weten in JavaScript is dat de onderstaande methode de waarde
  van x niet zal updaten. Wanneer we X meegeven als argument zal deze gekopieerd worden.
  Dit betekend dat de kopie van x geupdate wordt met 10, maar de originele x niet.
  console.log(x) zal dus de waarde 10 geven.
*/

{
  let x = 10;

  function func(x){
    x += x;
  }

  func(x);
  console.log(x);
}

/*
  Dit is anders wanneer we gebruik maken van een object. De waarde van een object
  is altijd een memory adres. Als we dit memory adres kopieeren zullen we,
  als we wijzigingen aanbrengen in de functie aan het object, wijzen naar
  het originele object.
*/

{

  	let person = {
      name: "Harry",
      age: 10
    };

    function func2(x){
      x.name = "Henk";
    }

    func2(person);

    console.log(person);

}
