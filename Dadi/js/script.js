// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

function myFunction(){

  var nomeUtente = prompt("Inserisci il tuo nome");
  var numeroUtente;
  var numeroPC;

  numeroUtente = Math.floor(Math.random() * 6 + 1);
  numeroPC = Math.floor(Math.random() * 6 + 1);

  document.getElementById("giocatore").innerHTML = "Numero Giocatore <br>" + numeroUtente;

  document.getElementById("pc").innerHTML = "Numero PC <br>" + numeroPC;


  console.log(numeroUtente);
  console.log(numeroPC);

  if(numeroUtente > numeroPC) {

    document.getElementById("answer").style.color = "green";
    document.getElementById("answer").innerHTML = "Congratulazioni " + nomeUtente + " Hai vinto!";

  } else if(numeroUtente < numeroPC) {

    document.getElementById("answer").style.color = "red";
    document.getElementById("answer").innerHTML ="Che peccato " + nomeUtente + " Hai perso!";

  } else {

    document.getElementById("answer").style.color = "white";
    document.getElementById("answer").innerHTML = nomeUtente + " la sfida è terminata con un pareggio!";

  }

}
