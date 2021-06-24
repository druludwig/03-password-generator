//Character options
let numericOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialOptions = ["*", "(",")", "@", "%", "^", "&", "-", "=", "_", "+", "#", "$"];
let lowerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
let passwordLength = prompt ("How many characters long?\nMinimum: 8\nMaximum: 128");
// Check that the user entered a value
if (!enter) {
  alert("This needs a value");
  //Make sure the value is in range
} else if (enter < 8) {
  enter = parseInt(prompt("You must choose above 8"));
} else {
  enter = parseInt(prompt("You must choose below 128"));}
}

let numberOption = confirm ("Would you like to include numbers?");
let specialOption = confirm ("Would you like to include special characters?");
let lowerOption = confirm ("Would you like to include *lowercase* letters?");
let upperOption = confirm ("Would you like to include CAPITAL letters?");

let userSelections = [];
let password = [];

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

for (var i = 0; i < passwordLength; i++) {
     let randomNum = Math.floor(Math.random() * userSelections.length);
          password = password + userSelections[randomNum]; 
}
return password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);