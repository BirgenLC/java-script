const email = "albert@eldohub.co.ke";

function reverseString(sentence) {
  const arrayOfCharacters = sentence.split("");
  console.log(arrayOfCharacters);
  const reversedArrayOfCharacters = arrayOfCharacters.reverse();
  console.log(reversedArrayOfCharacters);

  return reversedArrayOfCharacters.join("");
}

console.log(reverseString(email));
console.log(reverseString("hello world"));
console.log(reverseString("isaiah"));
