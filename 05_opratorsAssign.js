console.log("==================step1============================");
function squareOfWordLength(arg1){
    var result = arg1.length;
    // var result = arg2.length;
    // var result = arg3.length;

    return result
}
var returnValue = squareOfWordLength("Javascript");
console.log(`length of Javascript is: ${returnValue} and  and the square is ${returnValue*returnValue}`);
var returnValue = squareOfWordLength(" Google Chrome");
console.log(`length of Google Chrome is: ${returnValue} and  and the square is ${returnValue*returnValue}`);
var returnValue = squareOfWordLength("Developer Smart");
console.log(`length of Developer Smart is: ${returnValue} and  and the square is ${returnValue*returnValue}`);

console.log("==============================================");
var show = function (){
    var str = "I am angular Developer"
    console.log(`Given string is: "${str}"`);

    console.log("==================step2============================");


    var len = str.length;
    console.log(`string length is: "${len}"`);

    var totalWords = str.split(" ").length;
    console.log(`available numbers : ${totalWords}`);

    var result = len / totalWords;
    console.log(`Divided by total words : "${result}"`);

    var returnMultiple = len * totalWords;
    console.log(`multiple by 4 and result is : "${returnMultiple}"`);


    
}
show();

// console.log("==================step1============================");
