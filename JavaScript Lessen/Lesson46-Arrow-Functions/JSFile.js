/*

  Met een arrow function gebruiken we geen {} en ook geen return keyword. Als we
  gebruik maken van meerdere statements gebruiken we wel {}.

*/
{
  let func1 = (a, b) => a + b;
  console.log(func1(1, 5));

  let func2 = (c, d) => {
    console.log(c);
    console.log(d);
  }

  func2(2, 3);
}

/*

  De waarde van this is altijd hetzelfde in arrow functions namelijk het window
  object.

  Mocht een arrowfunction vanuit een object worden aangeroepen veranderd dit niet!

*/

{

  let arrow = () => this;
  console.log(arrow());



}
