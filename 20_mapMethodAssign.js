
console.log("1. Add 10 into each element and log new array result on console"); 
const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
const newArr = arrayNumbers.map((element)=>{
    return element + 10;
})
console.log(newArr);

console.log("-------------------------------------------------------------------");
console.log("2. Cube the each element and log on console"); 
const cube = arrayNumbers.map((element)=>{
    return element * element * element;
});
console.log(cube);


console.log("------------------------------------------------------------------");
console.log("3. Add the index into its corresponding each array element and log new array result on console"); 
let map = arrayNumbers.map((element, index)=>{
    return element + index;
});
console.log(map);