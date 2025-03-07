function removeDuplicates(strings) {
  return [...new Set(strings)];
}

const array = ["apple", "banana", "apple", "orange", "banana"];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray);
