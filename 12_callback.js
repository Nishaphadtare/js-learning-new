
let jennyHomework = function(callback){
    console.log('jenny started homework');
    console.log('jenny took an hour');
    console.log('Finally she completed her homework');
    callback();
    
}
let elonCopyHomework = function(){
    console.log("Elon is playing");
    console.log("Jenny called back Elon");
    console.log("Elon came and copied his homework");
}

jennyHomework(elonCopyHomework);