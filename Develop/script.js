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

  //these numbers are strings because they will be concatenated to the password. We don't want to "add" the numbers.
  var numbers =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
  var specialCharacters = [' ', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '_', '`', '~', '<', '>', '/', '?', ';', ':', "'", '.', '[', ']', '{', '}', "\\"];
  //googled how to add the backsash '\' by adding one more '/' in the string.
 
  //initializing password length validity for while loop
  var validLength = false;
  //repeating the prompt for password length until they give an acceptable response
  while (validLength !== true) {
    var passwordLength = prompt("How long do you want your password to be?");
    var passwordLength = parseInt(passwordLength);
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Sorry, you must choose a password of at least 8 characters in length but less than 128 characters");
    } else validLength = true;
  }

  //initializing choice validity for the while loop
  var validChoice = false;
  //repeating the prompt for character types if they don't select at least one type for their password
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
  //setting the for loop limit based on the total amount of possible characters we have. Based on the user selections,
  //these conditionals will select the appropriate number of possible characters.
  if (includeNumbers && includeSpecialChars && includeUpperCase || includeNumbers && includeSpecialChars) {
    randomGeneratorLimit = characters.length - 1 + numbers.length - 1 + specialCharacters.length - 1;
  } else if (includeUpperCase && includeSpecialChars || includeSpecialChars) {
    randomGeneratorLimit = characters.length - 1 + specialCharacters.length - 1;
  } else if (includeNumbers) {
    randomGeneratorLimit = characters.length - 1 + numbers.length - 1;
  } else {
    randomGeneratorLimit = characters.length - 1;
  }

  
  for (var i = 0; i < passwordLength; i++) {
    var indexOfPassword = Math.floor(Math.random() * randomGeneratorLimit);
    //adding a log so I can make sure the index is working properly
    console.log(indexOfPassword);
    //starting with the alphabet, starting from 0. Checking if random number is within the alphabet
    if (indexOfPassword < 26) {
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
      //if the random number is greater than the characters array length but less than 
      //characters.length + numbers.length and if numbers were selected by user
    } else if (indexOfPassword > 26 && indexOfPassword < 36 && includeNumbers) { 
        password += numbers[indexOfPassword - characters.length];
        //if numbers were not selected by user, then indexOfPassword > 27 will result in a special character
    } else if (indexOfPassword > 26 && !includeNumbers) {
        password += specialCharacters[indexOfPassword - characters.length];
    } else {
      password += specialCharacters[indexOfPassword - numbers.length - characters.length];
    }
  }
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
