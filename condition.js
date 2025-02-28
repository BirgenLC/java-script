//Conditional statements - allow executionof code depending on some state/condition/result/comparison

//if else , switch

let birthYear = 1950;

if (2025 - birthYear > 55) {
  console.log("You are too old for this!!");
} else if (2025 - birthYear > 18) {
  console.log("Old enough to access site!!");
  console.log("Hi , Welcome!");
} else {
  console.log("You are too young and not allowed here!!");
}

//grading marks --- >80 A, >65 B, >50 C, >40 D, <40 E ----

let marks = 155;
if (marks <0 || >100 || typeof !== "number"){
    console.log("Error:-Invalid mark!!");
}else if (marks >= 80) {
  console.log("A");
} else if (marks >= 65) {
  console.log("B");
} else if (marks >= 50) {
  console.log("C");
} else if (marks >= 40) {
  console.log("D");
} else if (marks < 40) {
  console.log("E");
}
