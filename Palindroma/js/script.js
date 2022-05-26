// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const textInput = prompt("Inserisci la parola");
const palindromeOutput = document.getElementById("output");

function isPalindrome(text) {
  let letterArray = text.split("");
  for (let i = 0; i < letterArray.length; i++) {
    if (letterArray[i] !== letterArray[letterArray.length - i - 1]) {
      return false;
    }
  }
  return true;
}

if (isPalindrome(textInput)) {
palindromeOutput.innerHTML = `La parola ${textInput} e' palindroma`;
}else
palindromeOutput.innerHTML = `La parola ${textInput} non e' palindroma`;