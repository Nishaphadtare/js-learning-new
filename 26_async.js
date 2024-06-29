
function giveMeMoney(){
    console.log("Let me arrange for you..");
    return new Promise ((resolve,reject)=>{
        resolve("Take this 10000 Rs")
    })
    
}
const promise = giveMeMoney();
console.log(promise);

// console.log("Thank you...");

// async function giveMeMoney(){
//     console.log("Let me arrange for you..");
//     return "Take this 10000 RS";
// }

async function arrangeMoney(){
    try {
        const result = await giveMeMoney();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
arrangeMoney();