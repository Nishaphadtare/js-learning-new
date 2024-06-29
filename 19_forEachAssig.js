
console.log("1. Log the array element with it's index using forEach() with arrow function");
const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
 arrayNumbers.forEach((element, index)=>{
    console.log(`Element At index ${index}: ${element}`);
});

console.log("--------------------------------------------------------------------");
console.log("2. Find the positive numbers and log on console");
    console.log("a.  Using forEach() with arrow function");
  arrayNumbers.forEach((element)=>{
    if (element>=0) {
        console.log(element);;
    }
})


console.log("--------------------------------------------------------------------");
console.log("3. Find the negative numbers, add into new array and log new array on console using arrow function");
arrayNumbers.forEach((element)=>{
    if (element<=0) {
        console.log(element);
    }
})

console.log("--------------------------------------------------------------------");
console.log("4. Find the even numbers and log on console using foreach() with arrow function");
arrayNumbers.forEach((element)=>{
    if (element%2==0) {
        console.log(element);
    }
})



console.log("--------------------------------------------------------------------");
console.log("5. Find the sum of all elements from arrayNumbers and log sum value on console");
let sum = 0;
arrayNumbers.forEach((element)=>{
    sum = sum + element;
})
console.log(sum);

console.log("--------------------------------------------------------------------");
console.log("6. Log the only even index array value on console using foreach() with arrow function preferred");
arrayNumbers.forEach((element, index)=>{
    if (index%2==0) {
        console.log(element);
    }
})