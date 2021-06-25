//Character options
let numericOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialOptions = ["*", "(",")", "@", "%", "^", "&", "-", "=", "_", "+", "#", "$"];
let lowerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let letters = ["/^[A-Za-z]+$/;"]

// Assignment Code
let generateBtn = document.querySelector("#generate");
let copyButton = document.querySelector("#copy");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword(){
//Start user inputs
let passwordLength = prompt ("How many characters long?\nMinimum: 8\nMaximum: 128\n\rNote: Inputs out of range will automatically round up to 8 or down to 128 respectively.");
//If user inputs a length out of range, the app will autoselect the closest option available
if (passwordLength < 8) {
  passwordLength = 8;
  alert("Your entry was automatically rounded up to 8.")
}
if (passwordLength > 128){
  passwordLength = 128;
  alert("Your entry was automatically rounded down to 128.")}

//User inputs (cont.)
let numberOption = confirm ("Would you like to include numbers in your password?");
let specialOption = confirm ("Would you like to include special characters in your password?\nExample: ! @ # $ % ^ & * ( ) - _ +");
let lowerOption = confirm ("Would you like to include *lowercase* letters in your password?");
let upperOption = true;
// If user declines first three options, then app autoselects the remaining option
if (!numberOption && !specialOption && !lowerOption){
  let upperOption = true;
} else{
  upperOption = confirm ("Would you like to include CAPITAL letters in your password?");
}
//Variables to be populated
let userSelections = [];
let password = [];

//Compiling the userSelections array
if (numberOption){
  userSelections = userSelections.concat(numericOptions)
}
if (specialOption){
  userSelections = userSelections.concat(specialOptions)
}
if (lowerOption){
  userSelections = userSelections.concat(lowerOptions)
}
if (upperOption){
  userSelections = userSelections.concat(upperOptions)
}
//Repeat this for as many times as the user input
for (var i = 0; i < passwordLength; i++) {
     let randomNum = Math.floor(Math.random() * userSelections.length);
          password = password + userSelections[randomNum]; 
}

return password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Copy password button
function copyPassword() {
  var copyText = document.getElementById("password");
  //If there's a password, copy it and alert user
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Your password was copied.\nYou may paste it wherever you choose.")
  }
  ;


copyButton.addEventListener("click", copyPassword);