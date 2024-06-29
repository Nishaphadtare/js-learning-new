
let array = [ 10, 20, 30, 40, 15];
array.forEach( (currentValue, index, array)=> {
    console.log(currentValue, index, array);
} );

console.log("============== Sum the array element ===============");
let sum = 0;
array.forEach( (element)=> {
    sum = sum + element
} )
console.log(sum);
console.log("============== Log only even array element ===============");
array.forEach( (value)=>{
    if (value%2==0) {
        console.log(value);
    }
});

console.log("============== Log the array element which is multiple of 3===============");
array.forEach(( element) =>{
    if (element%3==0) {
        console.log(element);
    }
});
console.log("======= traversing set ===============");
const setRollNum = new Set();
setRollNum.add(10);
setRollNum.add(20);
setRollNum.add(30);
setRollNum.add(20);
setRollNum.add(15);
console.log(setRollNum);
setRollNum.forEach((element)=>{
    console.log(element);
});

console.log("======= traversing set ===============");
const map = new Map();
map.set("rollNumber", 10);
map.set("city", "LA");
map.set("age", 22);
map.set("luckyNum", 22);
console.log(map);
map.forEach((value, key)=>{
console.log(`${key}, ${value}`);
})