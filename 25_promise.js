
const isPrepared =true; 
const notesPromise = new Promise((resolve, reject)=>{
    if (isPrepared){
        resolve("Buddies take this one and also prepared your notes")
    }
    reject("Sorry, guys, e=will not be able to share the notes")
});
notesPromise.then((success)=>{
    console.log(success);
    console.log("Thank you so much");
}).catch((failure)=>{
    console.log(failure);
    console.log("Bahot khadus tes\ache hai...Hatt yarr");
}).finally(()=>{
    console.log("finally....Need to prepare my notes as well");
})