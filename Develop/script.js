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
  console.log("characters length is " + characters.length);
  console.log("numbers length is " + numbers.length);
  console.log("specialCharacters length is " + specialCharacters.length);
 
  var validLength = false;

  while (validLength !== true) {
    var passwordLength = prompt("How long do you want your password to be?");
    var passwordLength = parseInt(passwordLength);
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Sorry, you must choose a password of at least 8 characters in length but less than 128 characters");
    } else validLength = true;
  }

  var validChoice = false;
  while (validChoice !== true) {
    var includeNumbers = confirm("Do you want your password to include numbers?");
    var includeSpecialChars = confirm("Do you want your password to include special characters?");
    var includeUpperCase = confirm("Do you want your password to include upper case letters?");
    var includeLowerCase = confirm("Do you want your password to include lower case letters?")
    if (!includeNumbers && !includeSpecialChars && !includeUpperCase && !includeLowerCase) {
      alert("Sorry, you must select at least one character type for your password.");
    } else validChoice = true;
  }

  var password = "";
  var randomGeneratorLimit;

  if (includeNumbers && includeSpecialChars && includeUpperCase || includeNumbers && includeSpecialChars) {
    randomGeneratorLimit = characters.length - 1 + numbers.length - 1 + specialCharacters.length - 1;
  } else if (includeUpperCase && includeSpecialChars || includeSpecialChars) {
    randomGeneratorLimit = characters.length - 1 + specialCharacters.length - 1;
  } else if (includeNumbers) {
    randomGeneratorLimit = characters.length - 1 + numbers.length - 1;
  } else {
    randomGeneratorLimit = characters.length - 1;
  }

// need a conditional in the for loop for a 50/50 random generator for upper case, if the random number is within the characters length 
  // var indexOfPassword = Math.floor(Math.random() * randomGeneratorLimit);
  // console.log(indexOfPassword);
  for (var i = 0; i < passwordLength - 1; i++) {
    var indexOfPassword = Math.floor(Math.random() * randomGeneratorLimit);
    console.log(indexOfPassword);
    if (indexOfPassword < 27) {
      if (includeUpperCase && includeLowerCase) {
        // coin flip for upper or lower case 
        var caseType = Math.floor(Math.random() * 2) + 1;
        if (caseType === 1) {
          // already lower case, don't need to use toLowerCase()
          password += characters[indexOfPassword];
        } else { // upper case letter
          password += characters[indexOfPassword].toUpperCase();
        }
      } else if (includeUpperCase) { //if only upper case was selected
        password += characters[indexOfPassword].toUpperCase();
      } else { //only thing remaining is if only lower case was selected
        password += characters[indexOfPassword];
      }
    }
  }
  

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
