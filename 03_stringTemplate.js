var firstName = "Jenny";
var lastName = "Sharma";
var marks = "90%"

console.log(`First Name is: ${firstName}, Last Name is: ${lastName}, Marks ${marks}`);

var num1 =100;
var num2 = 200;

console.log(`Number 1: ${num1}, Number 2: ${num2} `);
console.log(`Addition is ${num1 + num2}`);

console.log(`My "Life", My Rule`);

var greet = "Good Morning";

console.log(`Find the total number of characters`);
var totalChar = greet.length;
console.log(`Total char is: ${totalChar}`);

console.log("======================charAt()=========================");
var char = greet.charAt(3);
console.log(`char at index 3 is: ${char}`);

console.log("======================indexOf()=========================");
var index = greet.indexOf("M");
console.log(`index of char m is: ${index}`);

console.log("======================concat()=========================");
var firstName = "Jenny";
var lastName = "Sharma";
var result = firstName.concat(lastName);
console.log(`concatenated name are: ${result}`);

console.log("======================UpperCase()=========================");

var lastName = "Sharma"
var result = lastName.toUpperCase();
console.log(`Last name in upper case: ${result}`);

console.log("======================UpperCase()=========================");
var lastName = "Sharma"
var result = lastName.toLowerCase();
console.log(`Last name in upper case: ${result}`);

console.log("======================replace()=========================");

var greet = "Good Morning";
var result = greet.replace("Good", "Afternoon");
console.log(`After replace : ${result}`);

console.log(`========== trim() ==============`);
var city = "  Pune   ";
console.log(`Length before trim is: ${city.length}`);
city = city.trim();
console.log(`Length after trim is: ${city.length}`);

console.log(`========== Includes() ==============`);

var greet = "Good Morning";
var result = greet.includes("nin");
console.log(`Is "nin" includes: ${result}`);

var result = greet.includes("z");
console.log(`Is "z" includes: ${result}`);

var myName = " Gajanan Kharat"
var result = myName.split(" ");
console.log(`${result}`);

var myName = "Gajanan Kharat";
var result = myName.split(" ");
console.log(`Total number of words: ${result}`);

var word = "My Life My Rule";
var result = myName.split(" ");
console.log(`Total number of words: ${result.length}`);
