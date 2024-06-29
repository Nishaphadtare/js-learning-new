let array = [10, 20, 30, 40, 15];
console.log(array);

const setRollNum = new Set();
setRollNum.add(10);
setRollNum.add(20);
setRollNum.add(30);
setRollNum.add(15);
setRollNum.add(20);
console.log(setRollNum); //duplicate element can not 
console.log(setRollNum.size);//size means Length of set 

setRollNum.delete(30);
console.log(setRollNum); //delete element form set

console.log(setRollNum.has(30)); //how to see whether particular element is present or not

console.log("Traversing set");
for (const element of setRollNum) {
    console.log(element);
}
console.log("To remove duplicate element from the array");
let array1 = [40, 20, 30, 40, 15, 30, 20];
const mySet = new Set();
for (const element of array1) {
    mySet.add(element)
}
console.log(mySet);
const newArray = []; //Travers
for (const value of mySet) {
    newArray.push(value)
}
console.log(newArray);

console.log("To remove duplicate element from the array");
let arrayA = [40, 20, 30, 40, 50, 30, 20];
    arrayA = [...new Set(arrayA)]; //...spread element
console.log(arrayA);

