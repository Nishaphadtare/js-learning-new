
console.log("1. WAP to print numbers from 5 to 15 by incrementing 1");
for (let index = 5; index <= 15; index++) {
    console.log(index);
}
console.log("-----------------------------------------------");
console.log("2. WAP to print numbers from 50 to 40 by decrementing 1");
for (let index = 50; index >= 40; index--) {
    console.log(index);
}
console.log("-----------------------------------------------");
console.log("3. WAP to find first 15 odd numbers");
for (let index = 1; index <=30; index++) {
    if (index%2!==0) {
        console.log(index);
    }
}

console.log("-----------------------------------------------");
console.log("4. WAP to find first 10 even numbers");
for (let index = 1; index <= 20; index++) {
    if (index%2==0) {
        console.log(index);
    }
}

console.log("-----------------------------------------------");
console.log("5. WAP to print table of 5 like 5, 10, 15, 20, 25.... 50");
for (let index = 5; index <=50 ; index=index+5) {
    console.log(index);
}

console.log("-----------------------------------------------");
console.log("6. WAP to print table of 10 like 10, 20, 30, 40.... 100 ");
for (let index = 10; index <= 100; index=index+10) {
    console.log(index);
}

console.log("-----------------------------------------------");
console.log("7. WAP to print table of 10 reverse order like 100, 90, 80, 70.... 10");
for (let index = 100; index>= 10; index=index-10) {
console.log(index);    
}