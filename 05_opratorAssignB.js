
console.log("1-----Greater number amongst two string----");
var greaterNumber = function(num1, num2){
    var result = num1 >= num2 ? num1 : num2
    console.log(`Greater number between 10 and -10 is: ${result}`);

}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("2-----Given no is even or odd ans in true and false----");
var isEvenOrOdd = function(arg){
 var result = arg%2 == 0 ? true : false;
 return result;
}
var returnValue = isEvenOrOdd(29);
console.log(`Given number 29 is even or odd:- ${returnValue}`);
console.log("---------------------------------------");
var returnValue = isEvenOrOdd(44)
console.log(`Given number 44 is even or odd:- ${returnValue}`);
console.log("---------------------------------------");
var returnValue = isEvenOrOdd(0)
console.log(`Given number 0 is even or odd:- ${returnValue}`);
console.log("---------------------------------------");
var returnValue = isEvenOrOdd(101)
console.log(`Given number 101 is even or odd:- ${returnValue}`);

console.log("3--------------Even or Odd-----------------");

var wordLength = function(str){
    var result = str.length%2==0 ? "EVEN" : "ODD";
    return result;
}

var stringLength = wordLength("JavaScript");
console.log(`Given wordLength is : ${stringLength}`);
console.log("---------------------------------------");
var stringLength = wordLength("developer");
console.log(`Given wordLength is : ${stringLength}`);
console.log("---------------------------------------");
var stringLength = wordLength("Google");
console.log(`Given wordLength is : ${stringLength}`);




