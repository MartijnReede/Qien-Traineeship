/*

*/

{

  let user = {
    active: true,
    getMembership: function(){
      console.log(this.membership);
    }
  };

  let silverUser = {
    membership: "silver"
  };

  let goldUser = {
    membership: "gold",
    //Override methode
    getMembership: function(){
      console.log("I'm the best with my " + this.membership.toUpperCase() + " membership!");
    }
  };

  Object.setPrototypeOf(silverUser, user);
  Object.setPrototypeOf(goldUser, user);


  //Onderstaand behandelen we beide users als user. Hierop kunnen we de methode
  //getMembership aanroepen met beide verschillende uitkomsten.
  let userList = [silverUser, goldUser];

  userList.forEach(function(e){
    e.getMembership();
  });




}
