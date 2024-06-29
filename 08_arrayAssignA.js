console.log("----------------------------------------------------------------------");
console.log("1. Find the total element available or length and log on the console");
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers);
let arrayLength = arrayNumbers.length;
console.log(`Total element in array: ${arrayLength}`);

console.log("----------------------------------------------------------------------");
console.log("2. Log the first and last element arrayNumbers and log on the console");
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`First index :  ${arrayNumbers[0]}`);
console.log(`Last index : ${arrayNumbers[10]}`);

console.log("----------------------------------------------------------------------");
console.log("3. Log the third last element using length property");
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
arrayNumbers.length;
console.log(`${arrayNumbers.splice(-3, 1)}`);

console.log("----------------------------------------------------------------------");
console.log("4. Find the all even numbers using for of loop and log on the console");
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
for (const evenNumber of arrayNumbers) {
    if (evenNumber%2==0) {
        console.log(evenNumber);
    }
}

console.log("----------------------------------------------------------------------");
console.log("5. Find the odd numbers using for of loop and log on the console");
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
for (const oddNumber of arrayNumbers) {
    if (oddNumber%2!=0) {
        console.log(oddNumber);
    }
}

console.log("----------------------------------------------------------------------");
console.log("6. Find all even positioned elements from  arrayNumbers, sum it and log on the console");
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (index%2==0) {
        // console.log("Sum of even positioned elements");
            sum = sum + element;
    }
}
console.log(sum);

console.log("----------------------------------------------------------------------");
console.log("7. Find all odd positioned elements from  arrayNumbers, sum it and log on the console");
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
var sumOdd = 0;
 for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (index%2==1) {
        sumOdd = sumOdd + element
    }
 }
 console.log(sumOdd);

 console.log("----------------------------------------------------------------------");
 console.log("8. Find the sum of all elements from  arrayNumbers and log on console");
 var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
 var sumArr = 0;
 for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sumArr = sumArr + element
 }
console.log(sumArr);

console.log("----------------------------------------------------------------------");
console.log("9. Find the number which are multiple of 5");
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
for (const element of arrayNumbers) {
    if (element%5==0) {
        console.log(element);
    }
}

console.log("----------------------------------------------------------------------");
console.log("10. Is number 115 available in arrayNumbers?");
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
const element = arrayNumbers.includes(155);
console.log(element);

console.log("----------------------------------------------------------------------");
console.log("11. Is number 23 available in arrayNumbers?");
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
var num = arrayNumbers.includes(23);
console.log(num);

console.log("----------------------------------------------------------------------");
console.log("12. Insert number 55, 66 at the index 3 and log array on console");
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
arrayNumbers.splice(3, 0, 55, 66);
console.log(arrayNumbers);

console.log("----------------------------------------------------------------------");
console.log("13. Delete 3 element starting from index 4 and log arrayNumbers on console");
arrayNumbers.splice(4, 3);
console.log(arrayNumbers);





