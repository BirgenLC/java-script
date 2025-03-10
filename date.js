const { log } = require("util");

console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleTimeString());
console.log(new Date().toUTCString());

//Knowing users/clients timezone
const date = new Date();

//Use Intl.DateTimeFormat to get the time zone
const timeZone = Intl.DateTimeFormat().resolvedOptions().timezone;

console.log("Time Zone:", timeZone);

const receivedDate = new Date("03/08/2025");

console.log(receivedDate.getFullYear());
console.log(receivedDate.getMonth());
console.log(receivedDate.getDate());
console.log(receivedDate.getDay());
