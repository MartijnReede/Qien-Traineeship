/*
  Om met tijd te rekenen kunnen we gebruikmaken van de Unix Timestamp. Deze is
  van start gegaan op 1 januari 1970. In mijn browser wordt het aantal ms getoond
  sommige andere programmas tonen het aantal secondes.


  We kunnen dus ook uitrekenen hoe lang iets heeft geduurd. Om het aantal dagen
  te berekenen moeten we uitzoeken hoeveel miliseconds er in een dag passen. Als
  we het aantal miliseconds daardoor delen komen we uit op het aantal dagen.
*/

{

  let myDate = new Date();
  console.log(myDate);

  let miliSecondsFromUnixTimestamp = Date.now();
  console.log(miliSecondsFromUnixTimestamp);

  let myBirthDay = new Date(1990, 10, 30);

  console.log("Ik ben " + ((miliSecondsFromUnixTimestamp - myBirthDay) / 1000).toFixed(0) +
              " seconden oud.");

  let start = Date.now();

  let counting = 0;
  for (let i = 0; i < 1000000; i++){
    for (let j = 0; j < 1515; j++){
      counting ++;
    }
  }

  let end = Date.now();

  console.log("Aantal miliseconds verschil: " + (end - start));
}
