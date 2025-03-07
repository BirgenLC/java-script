//higher order functions have two main x-tics
//1. They take other functions as arguments
//2.They could return a funtion

function validatePassword(password) {
  //more than 8 characters , conatins numbers
  if (password.length < 8) {
    console.log("Weak Password!Must contain more than 8 characters");
  }
  console.log("Done checking!");
}

const result = validatePassword("unitedisred");

console.log(result);

function removeDuplicates(listOfWords) {
  //loop through words
  //add unique words to new array
}

function calculateInterest(amount, rate) {
  //return interest=rate/100 * amount
}

function contactPerson(userDetails, sendEmail, sendMessage) {
  //userDetails {name: Albert, phone: 0723142433, email:"albert@eldohub.co.ke", age:39, isKenyan: true}
  //validate phone format

  //other tasks --- conditional statements
  //sendEmail - a funtion to be called with email
  sendEmail(userDetails.email);
  //sendMessage - a function to be called with phone number
  sendMessage(userDetails.phone);
}

function mailerFunction(email) {
  //sending email logic here
  console.log("Sending drafted email to:" + email);
}

function smsSender(phone) {
  //africa's talking
  //sending messages logic here + api interaction
  console.log("Sending drafted sms to:" + phone);
}
