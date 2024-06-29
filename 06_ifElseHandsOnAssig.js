console.log("-------------------------------------------------");
var isEvenOrOdd = function (num){
    if (num%2==0) {
        return "EVEN";
    }else {
        return "ODD";
    }
}

var value = isEvenOrOdd(45);
console.log(`Given value is 45 : ${value}`);
var value = isEvenOrOdd(70);
console.log(`Given value is 70 : ${value}`);
var value = isEvenOrOdd(67);
console.log(`Given value is 67 : ${value}`);
var value = isEvenOrOdd(98)
console.log(`Given value is 98 : ${value}`);

console.log("-------------------------------------------------");

var voteEligibility = function (age) {
    if (age >= 18) {
        console.log(`you are Eligible for the vote`);   
    }else {
        console.log(`you are not Eligible for the vote`);   

    }
}
var vote = voteEligibility(18);
console.log(`age is 18: ${vote}`);
voteEligibility(20);
console.log(`age is 20: ${vote}`);
voteEligibility(17);
console.log(`age is 17: ${vote}`);
voteEligibility(40);
console.log(`age is 40: ${vote}`);

console.log("-------------------------------------------------");

var strLength = function(str){
    if(str.length){
        console.log(`Given string contains 10 or more than Characters: ${str}`);
    }
    else{
        console.log(`Given string does not contains 10 or more than Characters: ${str}`);

    }
}
strLength("Javascript-ES6");

console.log("-------------------------------------------------");

var word = function(str){
    if(str.startsWith("java")) {
        console.log(`Given string starts with word: "java" ${str}:  `);
    } else {
        console.log(`Given string does not starts with word: "java" ${str}:  `);

    }
}
word("javascript Language");
word("Programming Language");
