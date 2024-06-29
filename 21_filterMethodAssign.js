
console.log("1. Find out all the numbers which are greater than 50 and log on console");
const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
let arr = arrayNumbers.filter((element)=>{
    return element>50
})
console.log(arr);

console.log("------------------------------------------------------------------");
console.log("2. Find out all the even numbers and log on console");
let evenNum = arrayNumbers.filter((even)=>{
    return even%2==0;
});
console.log(evenNum);

console.log("------------------------------------------------------------------");
console.log("3.  Find out all the odd numbers and log on console");
let oddNumbers = arrayNumbers.filter((oddNum)=>{
    return oddNum%2!==0;
});
console.log(oddNumbers);

console.log("------------------------------------------------------------------");
console.log("4. Find out all the numbers which are multiple of 5");
 let array = arrayNumbers.filter((element)=>{
    return element%5==0;
 })
console.log(array);

console.log("------------------------------------------------------------------");
console.log("5. Find out all the numbers which are between 20 and 50");
let numbers = arrayNumbers.filter((element)=>{
    return element>=20 && element<=50;
});
console.log(numbers);