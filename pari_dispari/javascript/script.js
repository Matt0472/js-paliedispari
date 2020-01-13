// Gioco Pari e dispari:
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).

var userChoice = prompt('Cosa scegli: Pari o Dispari?');
var userNumber = parseInt(prompt('Ora, scegli un numero da 1 a 5'));
console.log(userNumber);
var cpuNumber = Math.floor(Math.random() * 5) + 1;
console.log(cpuNumber);

var whoWon = checkOddEven(userChoice);
if (userChoice == whoWon) {
  alert('Hai Vinto');
} else {
  alert('Hai Perso');
}

function checkOddEven(numero) {
  var addNumber = userNumber + cpuNumber;
  if (addNumber % 2 == 0) {
    return 'pari';
  } else {
    return 'dispari';
  }
}
