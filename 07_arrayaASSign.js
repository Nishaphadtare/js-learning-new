console.log("----------1 Log first and last element on console------------");

const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`First element : ${fruits_seasonal[0]}`);
console.log(`Last element : ${fruits_seasonal[4]}`);

console.log("------------------------------------------------------------------------");
console.log("2 element before the Banana");
fruits_seasonal.unshift("'Papaya'");
console.log( fruits_seasonal);

console.log("------------------------------------------------------------------------");
console.log("3.Remove 'Mango from the array ");
let sliceElement= fruits_seasonal.slice(0, 4)
console.log(fruits_seasonal.slice(0, 4));

console.log("------------------------------------------------------------------------");
console.log("4 insert element 'Pineapple' at the last position");
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);

console.log("------------------------------------------------------------------------");
console.log("5 insert element 'Dragon Fruit' before 'Water Melon'");
let spliceElement= fruits_seasonal.splice(5, 0, 'Dragon Fruit');
console.log(fruits_seasonal);

console.log("------------------------------------------------------------------------");
console.log("6. replace an element `orange` with `Kiwi`");
let splicedElement = fruits_seasonal.splice(2, 1, 'kiwi');
console.log(fruits_seasonal);

console.log("------------------------------------------------------------------------");
console.log("7.log the elements starting from index 1 to 4");
fruits_seasonal.slice(1, 4)
console.log(fruits_seasonal.slice(1, 4));

console.log("------------------------------------------------------------------------");
console.log("8.Only select last 3 element and log on console: Use the length property");
let findLength = fruits_seasonal.length;
// console.log(fruits_seasonal.length);
// fruits_seasonal.slice(5);
console.log(fruits_seasonal.slice(fruits_seasonal.length-3))