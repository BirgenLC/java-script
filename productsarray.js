//Given an array of numbers, return an array where each element is the product of all the elements in the original array except the current element.
function getWeights(arr) {
  const finalArr = [];
  for (let index = 0; index < arr.length; index++) {
    console.log("Current number:" + arr[index]);
    for (
      let innerLoopIndex = 0;
      innerLoopIndex < arr.length;
      innerLoopIndex++
    ) {
      if (index !== innerLoopIndex) {
        productOfOtherElements = productOfOtherElements * arr[innerLoopIndex];
      }
    }
    finalArr.push(productOfOtherElements);
  }
  return finalArr;
}

const result = getWeights([1, 2, 3, 4, 5]);
console.log(result);

const resultTwo = getWeights([
  122, 32, 767, 23, 444, 34, 90, 434, 243, 545, 23,
]);
console.log(resultTwo);
