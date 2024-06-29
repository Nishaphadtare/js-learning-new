console.log("*1. Count the total no of vowels.");
var str = "I am very good IT Developer";
var vowels = "aeiou";
var counter = 0;
for (let index = 0; index < str.length; index++) {
    var ch = str.charAt(index);
    var chLowerCase = ch.toLowerCase();
    if (vowels.includes(chLowerCase)) {
        counter++;
    }  
}
console.log(`      Total number of vowels: ${counter}`);

console.log("--------------------------------------------------------------------------------");

console.log("*2. WAF to get the sum of cube of numbers from 1 to 5.");
 function sumOfCuber(){
    var sumOfCube = 0;
    for (let i= 1; i <=5 ; i++) {
         var cube = i * i * i;
         sumOfCube = sumOfCube + cube;
    }
 console.log(sumOfCube);
}
sumOfCuber();

console.log("--------------------------------------------------------------------------------");

console.log("*3. Odd position characters with one argument ");

function oddPositionedChars(str){
    var result = "";
    for (let index =0; index < str.length; index++) {
        var ch = str.charAt(index);
        result = result + ch;
    if (index%2==1 && ch != ' ') {
        console.log(ch);
    }        
    }
    // console.log(result);

}
oddPositionedChars('Hard work always pays back');
oddPositionedChars('Soon I will be UI IT champ');

// console.log("Reverse the string");
// var word="javascript";
// var str = "";
// for (let index = word.length-1; index >= 0; index--) {
//     var ch = word.charAt(index);
//     str = str + ch;
// }
// console.log(str);