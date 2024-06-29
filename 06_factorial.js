
const num = 5;
let fact = 1;
for (let i = 5; i>= 1; i--) {
fact = fact * i;    
}
console.log(fact);

const factorial = function(num){
    if(num==null || num==undefind || num==0){
        console.log(`Invalid input : ${num}`);
        return
    }
    const fact = 1;
for (let i =num; i>= 1 ; i--) {
    fact = fact * i ;    
}
console.log(fact);
}
factorial(8)