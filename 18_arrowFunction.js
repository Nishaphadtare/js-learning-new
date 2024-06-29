 let add = function(){
    console.log(10+10);
    // console.log(this);
 }
 add();

 //Arrow function

let multiply = ()=>{
 console.log(2*2);
}
multiply()

let multiply1 = (n1,n2)=>{
    const result = n1*n2;
    return result;
   }
const value = multiply1(2, 9);
console.log(value);