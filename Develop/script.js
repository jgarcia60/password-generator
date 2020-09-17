// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var numbers =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '_', '`', '~', '<', '>', '/', ';', ':', "'", '.', '[', ']', '{', '}'];

 
  var validLength = false;

  while (validLength !== true) {
    var passwordLength = prompt("How long do you want your password to be?");
    var passwordLength = parseInt(passwordLength);
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Sorry, you must choose a password of at least 8 characters in length but less than 128 characters");
    } else validLength = true;
  }
  var includeNumbers = confirm("Do you want your password to include numbers?");
  var includeSpecialChars = confirm("Do you want your password to include special chracters?");
  var includeUpperCase = confirm("Do you want your password to include upper case letters?");
  var password = "";
  var randomGeneratorLimit;

  if (includeNumbers && includeSpecialChars && includeUpperCase || includeNumbers && includeSpecialChars) {
    randomGeneratorLimit = characters.length + numbers.length + specialCharacters.length;
  } else if (includeUpperCase && includeSpecialChars) {
    randomGeneratorLimit = characters.length + specialCharacters.length;
  } else if (includeSpecialChars && includeUpperCase) {
    randomGeneratorLimit = characters.length + specialCharacters.length;
  }

// need a conditional in the for loop for a 50/50 random generator for upper case, if the random number is within the characters length 
  for (var i = 0; i < passwordLength; i++) {
    var indexOfPassword = Math.floor(Math.random()*)
  }
  

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
