console.log("1. meaningful msg with no arg and no return value, log msg on console inside arrow function");

let display = ()=>{
    console.log(  "  Good Morning Today is friday");
}
display();
console.log("---------------------------------------------------------");


console.log("2. with 3 arg no return value, for received 3 parameters perform the multiplication");

let multiply = (n1, n2, n3=1)=>{
    console.log(n1*n2*n3);
    // const result = n1*n2*n3;
    // return result;
}
console.log("   a. value to be passed => 5, 5, 2");
const value = multiply(5, 5, 2);
console.log(`       multiplication : ${value}`);
console.log("---------------------------------------------------------");

console.log("   b. Invoke the same function for values=> 10, 4 [Note: assign default value to 3rd arg as 1]");
const val = multiply(10, 4);
console.log(`       multiplication : ${val}`);

console.log("---------------------------------------------------------");
console.log("3. with 5 arg and return value such as, for received params it should do the addition");
let add = (a1, a2, a3, a4, a5)=>{
    const res = a1 + a2 + a3 + a4 + a5;
    return res;
}
console.log("   a. values to be passed=> 100, 100, 200, 349, 756"); 
const addition = add(100, 100, 200, 349, 756);
console.log(`       Addition : ${addition}`);

console.log("---------------------------------------------------------");
console.log('   c. Invoke the same arrow function for values => "I am", "learning", "ES6", "Feature", "In depth"'); 
const addstr = add("I am", "learning", "ES6", "Feature", "In depth");
console.log(`       Words Addition: ${addstr}`);