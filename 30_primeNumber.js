
function isPrime(num){
    for (let index = 2; index <num; index++) {
       if(num%index==0){
        return false;
       }
    }
    return true;
}
var res = isPrime(7);
console.log(`Given number 7 is prime: ${res}`);

var res = isPrime(9);
console.log(`Given number 9 is prime: ${res}`);

console.log("---------------------------------------------------------");
let array = [3, 9, 7, 6, 19, 29, 53]
let count = 0;
for (const num of array) {
    if(isPrime(num)){
        count = count +1
    };
}
console.log(count);