// Assignment code here


// Password length prompt
function verifyLength()
{  	
  var pwLength = prompt("Please select password length between 8 and 128 characters");
   if(pwLength >= 8 && pwLength <= 128)
      {  	
        console.log(pwLength);
        verifyLower();
  } else
      {  
	      alert("Password length must be at least 8 characters and no more than 128"); 		
        verifyLength(); 
      }  
}

/// Password criteria prompts
function verifyLower()
{
   if (confirm("Do you want to include lower case letters?") == true)
   {
    pwLowerCase = "abcdefghijklmnopqrstuvwxyz";
    verifyUpper();
    } else
    {
    pwLowerCase = "";
    verifyUpper();
      }
}

function verifyUpper()
{
  if (confirm("Do you want to include UPPER case letters?") == true)
  {
    pwUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    verifyNum();
  } else
  {
    pwUpperCase = "";
    verifyNum();
  }
}

function verifyNum()
{
  if (confirm("Do you want to include numbers?") == true)
  {
    pwNumeric = "0123456789";
    verifySpecChar();
  } else
  {
    pwNumeric = "";
    verifySpecChar();
  }
}

function verifySpecChar()
{
 if (confirm("Do you want to include special characters?") == true)
 {
    pwSpecChar = "!@#$%^&*()";
    generatePassword();
 } else
 {
    pwSpecChar = "";
    generatePassword();
  }
}

// Get random function
function generatePassword()
{
  var password = "";
  var chars = pwLowerCase + pwUpperCase + pwNumeric + pwSpecChar;
  // console.log(pwLength) => cannot pass into for stmt
  // var range = (pwLength) - 1
  // set to 10 for functionality
  for (var i = 0; i <= 10; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
   console.log(chars);
   console.log(password);
   document.getElementById("password").value = password;   
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", verifyLength);
