function generatePassword() {

  
  var length = "0";
  while( !(parseInt(length) >= 8  && parseInt(length) <= 128) ){
   
      length = prompt("Enter how many characters you want the password to be. Choose between 8 and 128.");
      if(!length){
        return "Your Secure Password";
      }
  }
  //console.log(typeof length);

  var useLower;
  var useUpper;
  var useNumbers;
  var useSpecial;

  while( !useLower && !useUpper && !useNumbers && !useSpecial )
  {
    useLower = confirm("Do you want to use lowercase letters?");

    useUpper = confirm('Do you want to use uppercase letters?');
  
    useNumbers = confirm('Do you want to use numbers ?');
  
    useSpecial = confirm('Do you want to use special characters ?');

    if(!useLower && !useUpper && !useNumbers && !useSpecial){
      alert("You must choose atleast one type of character option"); 
    }   

  }

var lowerCase =  ['q','a','z','x','s','w','e','d','c','v','f','r','t','g','b','n','h','y','u','j','m','k','i','o','l','p'];

var upperCase = ['Z','X','C','V','B','N','M','L','K','J','H','G','F','D','S','A','Q','W','E','R','T','Y','U','I','O','P'];
  
var specialChar = ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','{','|','}','~' ]; //length is 28

var charTypes = [];

if(useLower)
{
   charTypes.push("lowerCase");
}
if(useUpper){
   charTypes.push("upperCase");
}
if(useNumbers){
   charTypes.push("number");
}
if(useSpecial){
   charTypes.push("specialChar");
}

//console.log(charTypes);

var randomPassword ="";

var randomType;
var randomChar;
var i;

var pwdLength = parseInt(length);

for(i=0; i < pwdLength; i++)
{
  //console.log(i + "at top of for loop");

  randomType = Math.floor(Math.random() * 10) % charTypes.length;

  //console.log("randomType is " + randomType);

  if(charTypes[randomType] === "number"){

    randomChar = Math.floor(Math.random() * 10).toString();
   // console.log("in if(... === number) randomChar is " + randomChar);
    randomPassword += randomChar;

  }
  if(charTypes[randomType] === "lowerCase"){

    randomChar = lowerCase[(Math.floor(Math.random() * 100)) % 26];
    //console.log("in if(... === lowerCase) randomChar is " + randomChar);
    randomPassword += randomChar;

  }

  if(charTypes[randomType] === "upperCase"){

    randomChar = upperCase[(Math.floor(Math.random() * 100)) % 26];
   // console.log("in if(... === upperCase) randomChar is " + randomChar);
    randomPassword += randomChar;

  }

  if(charTypes[randomType] === "specialChar"){

    randomChar = specialChar[(Math.floor(Math.random() * 100)) % 28];
   // console.log("in if(... === specialChar) randomChar is " + randomChar);
    randomPassword += randomChar;

  }
}
    return randomPassword;
 
};

// Write password to the #password input
function writePassword() {
 // console.log("in writePassword");
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click" , writePassword);
