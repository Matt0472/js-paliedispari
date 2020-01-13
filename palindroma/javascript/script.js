// Scrivi una funzione per capire se la parola è palindroma
var userWord = prompt('Inserisci una parola palindroma');

var polindroma = parolaContrario(userWord);


if (userWord == reverseWord) {
  console.log('La parola è polindroma');
  document.getElementById('parola_polindroma').innerHTML = userWord + ':' + ' questa parola è polindroma';
} else {
  console.log('La parola non è polindroma');
  document.getElementById('parola_polindroma').innerHTML = userWord + ':' + ' questa parola non è polindroma';
}


// funzioni
function parolaContrario(parola1, parola2) {
  var reverseWord = '';
  for (var i = userWord.length - 1; i >= 0; i--) {
    reverseWord += userWord[i];
  }
  return reverseWord;
}
