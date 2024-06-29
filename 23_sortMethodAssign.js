
console.log("1. Reverse the array");
const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
arrayRollNumbers.reverse((n1, n2)=>{
    return n1>n2 ? -1 : 1
});
console.log(arrayRollNumbers);

console.log("-------------------------------------------------------------------");
console.log("2. Use the sort() Method as is it without any custom sorting logic(Without passing any argument)&notice the issue");
arrayRollNumbers.sort();
console.log(arrayRollNumbers);

console.log("-------------------------------------------------------------------");
console.log("Sort the array in ascending order, by writing your custom logic ");
arrayRollNumbers.sort((n1,n2)=>{
    return n1>n2 ? 1 : -1;
});
console.log(arrayRollNumbers);

console.log("-------------------------------------------------------------------");
console.log("4. Find the Greatest number from the array");
const len = arrayRollNumbers.length;
console.log(JSON.stringify(arrayRollNumbers[len-1]));

console.log("-------------------------------------------------------------------");
console.log("4. Find the smallest number from the array");
let newArr = arrayRollNumbers.length;
let smallNum = arrayRollNumbers[0];
for (let i = 1; i < newArr; i++) {
if (newArr> smallNum[i]) {
    newArr = smallNum[i]
}    
}
console.log(smallNum);

console.log("-------------------------------------------------------------------");
console.log("5. Remove duplicates from  array");

const newArray = new Set()
for (const element of arrayRollNumbers) {
    newArray.add(element)
}
console.log(newArray);
