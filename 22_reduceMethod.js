
let array = [3, 6, 5, 2]; // 3+6=9 9+5=14
array.reduce((runningTotal, value)=>{
    return runningTotal + value;
}, 0);

// const sum = array.reduce((runningTotal, value)=>{
//     return runningTotal + value;
// }, 0);
// console.log(sum);