
// function isPalindrome(str){
//     return str = str.split('').reverse().join('');
   
// }
// var result = isPalindrome('madam')
// console.log(`Given string madam:  ${result}`);
// var result = isPalindrome('141')
// console.log(`Given string 141:  ${result}`);
// var result = isPalindrome('Sunday')
// console.log(`Given string sunday:  ${result}`);
// var result = isPalindrome('mom')
// console.log(`Given string mom:  ${result}`);
// var result = isPalindrome('Listen')
// console.log(`Given string Listen:  ${result}`);
// var result = isPalindrome('dad')
// console.log(`Given string dad:  ${result}`);

// function isPalindrome(str){
//     let reverseStr = str.split().reverse().join("") ;
//     if (str==reverseStr) {
//       return str +  ' is palindrome'
//     }else {
//         return str + 'is not palindrome'

//     }
// }
// var result = isPalindrome('madam')
// console.log(`Given string madam: ${result}`);

function isPalindrome(str){
    const reverseStr = str.split("").reverse().join("")
    if (str==reverseStr) {
        return str + 'is palindrome'
    }else {
        return str + 'is not palindrome'
    }
}
var result = isPalindrome('madam:');
console.log(`Given string ${result}`);
console.log("--------------------------------------------");
var result = isPalindrome('141:');
console.log(`Given string ${result}`);
console.log("--------------------------------------------");

var result = isPalindrome('Sunday:');
console.log(`Given string ${result}`);
console.log("--------------------------------------------");

var result = isPalindrome('mom:');
console.log(`Given string ${result}`);
console.log("--------------------------------------------");

var result = isPalindrome('Listen:');
console.log(`Given string ${result}`);
console.log("--------------------------------------------");

var result = isPalindrome('dad:');
console.log(`Given String ${result}`);