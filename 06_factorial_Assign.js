
const factorialOfNum = function(arg){
    if (arg==null || arg==undefined || arg==0) {
        console.log(`Invalid Input:- ${arg}`);
        return;
    }
    let fact = 1;
    for (let i = arg; i>= 1; i--) {
        fact = fact * i;
    }
    console.log(fact);
}
console.log("=====factorial 5 is=======");
factorialOfNum(5);
console.log("=====factorial 3 is=======");
factorialOfNum(3);
console.log("=====factorial null is======");
factorialOfNum(null);
console.log("======factorial 8 is========");
factorialOfNum(8);
console.log("======factorial undefined is======");
factorialOfNum(undefined);
console.log("======factorial 9 is======");
factorialOfNum(9);
console.log("======factorial 0 is======");
factorialOfNum(0);




