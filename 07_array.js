let arrayRollNum = [10, 20, 30, 40, 15];
console.log(arrayRollNum);
console.log(`Length of the array, total no. of array ${arrayRollNum.length}`);

console.log("======Accessing array values using index");
const element0th = arrayRollNum[0];
console.log(element0th);
console.log(arrayRollNum[2]);
const len = arrayRollNum.length
console.log(arrayRollNum[len-1]);

console.log("======update array values using index");
arrayRollNum[3]=100;
console.log(arrayRollNum);

console.log("======Add element at the end of the array");
let array = [10, 20, 30, 40, 15];
console.log(`original array${array}`);
array.push(200);
console.log(`After array: ${array}`);

console.log("======Add element at the beginning of the array");
array.unshift(20);
console.log(`unshift array: ${array}`);

console.log("======remove first element at the beginning of the array");
array.shift();
console.log(`shift array: ${array}`);

console.log("======remove last element of the array");
array.pop();
console.log();
