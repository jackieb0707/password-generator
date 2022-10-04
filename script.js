// Assignment Code
var generateBtn = document.querySelector("#generate");
// displaying the min and max for the values
function randomInt(min, max) {
if (!max) {
  max = min
  min = 0
}
  var rand = Math.random()
 return Math.floor(min *(1 - rand) + rand*max)
}
// function to get random numbers
function getRandomItem(list) {
  return list[randomInt(list.length)]
}

// function for the password to generate
function generatePassword(){
  
while (true) {
  // 
  var userInput = window.prompt("How long do yo want your password to be?")
  // user exited the prompt
  if (userInput === null){
    return
  }
 var passwordlength = parseInt(userInput)
// this if statement is for if the user doesn't input the correct infromation
if (isNaN(passwordlength)) {
window.alert("That's not a number!")
 } else if (passwordlength < 8 || passwordlength> 120){
 window.alert("Invalid password length. Length should be between 8 and 120 characters.")
 } else {
  break
 }

}
// strings for password input
var userWantNumber =window.confirm("would you like to include numbers in your password?")
var userWantSymbols =window.confirm("would you like to include symbols in your password?")
var userWantLowercase =window.confirm("would you like to include lowercase in your password?")
var userUppercase =window.confirm("would you like to include uppercase in your password?")
// arrays for password inputs
var Listnumber = ["0","1","2", "3", "4","5","6", "7", "8", "9"]
var Listsymbol = ["!","@","#", "+", "%","$","*", "/", "("]
var Listlowercase = ["a","b","c", "d", "e","f","g", "h", "i","j","k","l", "m", "n","o","p", "q", "r", "s", "t", "u","v","w","x","y","z"]
var Listuppercase = []

var optionsCart = []

for (var i = 0; i < Listlowercase.length; i++){
  Listuppercase[i] = Listlowercase[i].toUpperCase()
} 
// if statements that are generating what type of input
if (userWantNumber === true) {
  optionsCart.push(Listnumber)
}
if (userWantSymbols === true) {
  optionsCart.push(Listsymbol)
}
if (userWantLowercase === true) {
  optionsCart.push(Listuppercase)
}
if (userUppercase === true) {
  optionsCart.push(Listuppercase)
}

if (optionsCart.length === 0){
  optionsCart.push(Listlowercase)
}
 var generatePassword = ""

 for (var i= 0; i < passwordlength; i++) {
// variables for getting a random number
 var randomList = getRandomItem(optionsCart)
 var randomChar = getRandomItem(randomList)
 generatePassword += randomChar

 }
// returning the password that was genertated
 return generatePassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
// saying if password is not true to return
  if (!password) return

if (password) {
  passwordText.value = password;
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
