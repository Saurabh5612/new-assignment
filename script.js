// Assignment Code
var generateBtn = document.querySelector("#generate");
// create variables to hold numbers, symbols, uppercase characters, lowercase characters
// define function generatePassword()
// ask user how long should password be?
// ask user whether they would like numbers
// ask user whether they would like symobls
// ask user whether they would like uppercase
// ask user whether they would like lowercase
// FROM THOSE ANSWERS, generate a password

const lowercase = "abcdefghijklmnopqrstuvwxyz"
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "1234567890"
const symbols = "!@#$%^&*()<>?/"

function generatePassword() {
    var length = getLength()
    var availableCharacters = ""
    var wouldLikeSymbols = confirm("Would you like symbols in your password?")
    if (wouldLikeSymbols === true) {
        availableCharacters = availableCharacters + symbols;
    }
    var wouldLikeNumbers = confirm("Would you like numbers in your password?")
    if (wouldLikeNumbers === true) {
        availableCharacters = availableCharacters + numbers
    }
    var wouldLikeUppers = confirm("Would you like upper case characters in your password?")
    if (wouldLikeUppers === true) {
        availableCharacters = availableCharacters + uppercase
    }
    var wouldLikeLowers = confirm("Would you like lower case characters in your password?")
    if (wouldLikeLowers === true) {
        availableCharacters = availableCharacters + lowercase
    }
    // if the length of availableCharacters is 0, it means the user hasn't selected any characters to add to a password. this is invalid, so we should tell them they must select at least one type of character to include, and then re-ask them the entire generate password quest
    
    var newPassword = "";
    for (i = 0; i < length; i++) {
        newPassword += availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
    }
    return newPassword;
}

function getLength() {
    var length = parseInt(prompt("how many characters would you like?"))
    if (isNaN(length)) {
        alert("make sure you enter a number for your length, please")
        return getLength()
    }
    else if (length < 8 || length > 128) {
        alert("password must be at least 8 and no more than 128 characters")
        return getLength()
    }
    else {
        return length;
    }

}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
