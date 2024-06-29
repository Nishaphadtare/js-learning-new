
// function greet(callback){
//     console.log("Good Morning");
//     callback();
//     return function() {
//         console.log(`see you soon..`);
//     }
// }

// let sayBye = function(){
//     console.log("Bye..");
// }
// greet(sayBye)();
// let result = greet(sayBye);
//  result()

function greet(callback){
    console.log("Good Morning");
    callback();
    let innerFunction = function() {
       console.log(`see you soon..`);
    }
    return innerFunction;
}

let sayBye = function(){
    console.log("Bye..");
}
greet(sayBye)();
