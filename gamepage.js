// valor aleatorio generado
  var y =Math.floor(Math.random() *10 + 1);

  var x = document.getElementById("guessfield").value;

  if(x == y)
  {
    alert("¡¡¡FELICIDADES!!!"+playername+"LO ADIVINASTE BIEN¡¡¡¡!!!!¡¡¡!!" + guess + "INTENTO")

    guess= 1;
  }
  else if(x > y)
  {
    guess++;
    alert("OOPS LO SIENTO INENTA UN NUMERO MAS PEQUEÑO!!");
  }
  else if(x > y)
  {
    guess++;
    alert("OOPS LO SIENTO INENTA UN NUMERO MAS GRANDE!!");

  }
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}