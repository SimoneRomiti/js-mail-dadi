// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

function myFunction(){

  var nomeUtente = prompt("Inserisci il tuo nome");
  var numeroUtente;
  var numeroPC;

  numeroUtente = Math.floor(Math.random() * 6 + 1);
  numeroPC = Math.floor(Math.random() * 6 + 1);

  console.log(numeroUtente);
  console.log(numeroPC);

  if(numeroUtente > numeroPC) {
    alert("Congratulazioni " + nomeUtente + " Hai vinto!");
  } else if(numeroUtente < numeroPC) {
    alert("Che peccato " + nomeUtente + " Hai perso!");
  } else {
    alert(nomeUtente + " la sfida è terminata con un pareggio!");
  }
  
}
