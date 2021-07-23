{
    //Om een exponentiele notatie te krijgen:
    let x = 59595959;
    console.log(x.toExponential(5));

    //Om bijvoorbeeld een geld weergave te hebben met twee getallen achter de komma.
    let y = 54.4242;
    console.log("$ " + y.toFixed(2));

    //Print het getal op een "vriendelijke" manier.
    let z = 1234325235;
    console.log("$" + z.toLocaleString());
}

//Het math object kan soms handig zijn om te gebruiken:

{
  let abs = Math.abs(-36);        // 36
  let goUp = Math.ceil(0.00001)   // 1
  let goDown = Math.floor(0.9999) // 0
  let powerUp = Math.pow(3, 2)    // 9  (3*3)
  let roundUp = Math.round(4.9)   // 5
  let roundDown = Math.round(4.1) // 4
  let getInt = Math.trunc(4.9999) // 4
}
