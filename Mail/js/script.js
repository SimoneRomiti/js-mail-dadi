// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

var listaMail = ["pinco.pallino@gmail.com", "nome.cognome@gmail.com", "sr1992ei@gmail.com", "simone.romiti@gmail.com"];

var emailUtente = prompt("Inserisci la tua e-mail");
var i;
var answer = 0;

for(i = 0; i < listaMail.length; i++) {
  if(emailUtente == listaMail[i]) {
    answer = 1;
    i = 3;
  }
}

if(answer == 1) {
  alert("email OK");
} else {
  alert("e-mail non registrata");
}
console.log(answer);
