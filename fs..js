const fs = require("fs");

fs.writeFile(
  "amazing.txt",
  "We are  amazing!!!",
  "utf-8",
  function logError(error) {
    console.log("Hello!!!");
    console.log("An error occured!!");
    console.log("here it is:" + error.message);
  }
);
