
console.log("=== slice() =====");
var array = [10, 20, 30, 40, 15];
const sliceFrom2 = array.slice(2);
console.log(sliceFrom2);

console.log("=== slice() =====");
const sliceFrom1To3 = array.slice(1, 3);
console.log(sliceFrom1To3);

console.log("=== slice() =====");
var array = [10, 20, 30, 40, 15];
const deleteElement = array.splice(2);
console.log(array);
console.log(deleteElement);

console.log("Remove the middle element from the array");
var array = [10, 20, 30, 40, 15];
const deleteElements = array.splice(2, 2)
console.log(deleteElements);

console.log("insert element an element without removing any existing element ");
var array = [10, 20, 30, 40, 15];
array.splice(2, 0, 500);
console.log(array);

console.log("insert element an element without removing any existing element ");
var array = [10, 20, 30, 40, 15];
array.splice(1, 0, 400, 900, 200) 
console.log(array);

console.log("insert element an element without removing any existing element ");
var array = [10, 20, 30, 40, 15];
array.splice(1, 0, 400, 900, 200) 
console.log(array);

console.log("Insert an element by deleting or removing few elements");
var array = [10, 20, 30, 40, 15];
console.log(array);
array.splice(2, 1, 700, 800);
console.log(array);

console.log("Remove multiple elements");
var array = [10, 20, 30, 40, 15];
console.log(array);
array.splice(1, 3, 500);
console.log(array);

console.log("For in loop");
var array = [10, 20, 30, 40, 15];
for (const index in array) {
   console.log(array[index]);
}
console.log("---------------------------------");

console.log("for of Loop ");
for (const element of array) {
    console.log(element);
}
console.log("---------------------------------");
var array = [10, 20, 30, 40, 15];
const result = array.join(",");
console.log(result);