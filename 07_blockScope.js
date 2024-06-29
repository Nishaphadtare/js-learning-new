console.log(".Block scope means declaring a variable inside the block or curly brackets can not be accessible from outside the block");
console.log(".Variable declared using let and const has the block scope");

if (true){
    let message = "Hello";
    const PI = 3.1413;
}

console.log(message); //Not allowed as variable 'message' and 'PT' defined 
                    // using let and const keyword hence it has block scope

if(true){
    var greet = "Good Morning";
}
console.log(greet); // Allowed as variable 'greet' defined
                    // Using var keyword hence it has function scope