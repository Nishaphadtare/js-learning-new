


// let Homework = function(){
//     console.log("Elon is playing");
//     console.log("Jenny called back Elon");
//     console.log("Elon came and copied his homework");
// }

console.log('Started');
setTimeout(function(){
    console.log("Elon is playing");
    console.log("Jenny called back Elon");
    console.log("Elon came and copied his homework");
}, 1000);

console.log('Callback Hell...');
setTimeout(function() {
    console.log("invoked after 2 sec");

    setTimeout(function() {
        console.log("invoked after 5 sec");

        setTimeout(function(){
            console.log("invoked after 7 sec");
            
        }, 7000)
    }, 5000);

}, 2000);