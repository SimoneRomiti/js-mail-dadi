// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
function myFunction(){

  var listaMail = ["pinco.pallino@gmail.com", "nome.cognome@gmail.com", "sr1992ei@gmail.com", "simone.romiti@gmail.com"];

  var emailUtente = document.getElementById("input").value;
  console.log(emailUtente);
  var i;
  var answer = 0;

  for(i = 0; i < listaMail.length; i++) {
    if(emailUtente == listaMail[i]) {
      answer = 1;
      i = 3;
    }
  }

  if(answer == 1) {
    document.getElementById("control").style.color = "green";
    document.getElementById("control").innerHTML = "Accesso consentito!";
  } else {
    document.getElementById("control").style.color = "red";
    document.getElementById("control").innerHTML = "Accesso negato!";
  }
  console.log(answer);

}
