/*

  Met bind kunnen we een functie waarin we this toewijzen aan iets, samen met
  de argumenten samenvoegen in een nieuwe functie. Pas als we de nieuwe functie
  aanroepen zal deze worden úitgevoegd.

*/

{

  let martijn = {
    name: "Martijn",
    age: 30,
    city: "Amsterdam"
  }

  function printGegevens(){
    console.log(this);
  }

  let printMartijn = printGegevens.bind(martijn);

printMartijn();


}
