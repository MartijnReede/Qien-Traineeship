/*
  Werkt hetzelfde als in Java, we hoeven alleen geen Exception e op te schrijven.
  Dit kan overigens wel, alleen schrijven we dan alleen (e);
*/

{

  //Runtime error, zal een exception veroorzaken.
  try {
    doesntExist;
  }catch{
    console.log("Catched")
  }finally {
    console.log("This will allways run!");
  }

  //We kunnen ook zelf een exception throwen. We doen dit door een error object
  //te throwen:

  function  throwError(){
    throw {error: "This is broken",
           code: -1};
  }

  try {
    throwError();
  } catch (e) {
    console.log("ERROR!");
    console.log(e); //Hiermee printen we het error object uit.
  } finally {
    console.log("Wrapping things up");
  }

  // We kunnen ook een error maken d.m.v. een constructor. Er zijn allerlei
  //verschillende soorten zoals:

  throw new Error();
  throw new SyntaxError();

  // etc etc etc...

}
