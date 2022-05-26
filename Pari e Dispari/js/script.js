// Pari e Dispari
// L’utente sceglie pari o dispari tramite un prompt
// L’utente inserisce anche un numero da 1 a 5.
// Generiamo poi un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri (quello inserito dall’utente e quello random del computer)
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto. Se l’utente aveva scelto pari e la somma è pari, 
// ha vinto l’utente, altrimenti il computer

let pickInput = prompt("pari o dispari?");
let userWinner

while (pickInput.toUpperCase() !== "PARI" && pickInput.toUpperCase() !== "DISPARI"){
  pickInput = prompt("hai inserito un valore non valido, scegli, pari o dispari?");
}

let numberInput = parseInt(prompt("scegli un numero da 1 a 5"));

while (numberInput > 5 || numberInput < 1){
  numberInput = parseInt(prompt("hai inserito un valore non valido, scegli un numero da 1 a 5"));
}

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let cpuPick = randomRange(1, 5);

console.log(cpuPick);

let cpuUserSum = cpuPick + numberInput;

function even(number){
  if (number % 2 === 1){
    return false
  }
  return true
}

if (pickInput.toUpperCase() === "PARI" && even(cpuUserSum)){
  userWinner = alert(`La CPU ha scelto il numero ${cpuPick} e la somma tra i vostri numeri e' ${cpuUserSum} pertanto 
  HAI VINTO!`);
}else if (pickInput.toUpperCase() === "DISPARI"){
  userWinner = alert(`La CPU ha scelto il numero ${cpuPick} e la somma tra i vostri numeri e' ${cpuUserSum} pertanto 
  HAI VINTO!`);
}else{
  userWinner = alert(`La CPU ha scelto il numero ${cpuPick} e la somma tra i vostri numeri e' ${cpuUserSum} pertanto 
  HAI PERSO!`);
}
