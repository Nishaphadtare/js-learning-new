

const friendList = ["Stew", "Elon", "Bill", "Jenny"];
console.log(friendList);

console.log("======sort() in ascending order ================");
friendList.sort();
console.log(friendList);

console.log("======sort() in descending order ================");
friendList.reverse();
console.log(friendList);

const rollNum = [11, 55, 33, 77, 44, 99, 22];
console.log(rollNum);
rollNum.sort();
console.log(rollNum);
rollNum.reverse();
console.log(rollNum);

console.log("-------------------Other way to sort element in ascending order-------------------------------");
const array = [11, 105, 3, 77, 89, 99, 292];
console.log(array);
array.sort((n1, n2)=>{
    return  n1>n2 ? 1 : -1;
});
console.log(array);

console.log("----sorting in descending order----------------");
array.reverse();
console.log(array);

console.log("-----Other way to sort element in ascending order------");
const arrayNumbers = [11, 105, 3, 77, 89, 99, 292];
arrayNumbers.sort((n1, n2)=>{
    return n1>n2 ? -1 : 1;
});
console.log(arrayNumbers);
