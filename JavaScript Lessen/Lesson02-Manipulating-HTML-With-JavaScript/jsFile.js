//Door middel van document.getElementById refereren we aan een id. Id's worden
//vastgesteld in de html tags. Met de onderstaande code veranderen we de inhoud van
//de paragraph tag en daarna zorgen we dat de button niet meer zichtbaar is.

document.getElementById("button").onclick = function(){
  document.getElementById("par").innerHTML = "Order is confirmed!";
  document.getElementById("button").style.display = "none";
}
