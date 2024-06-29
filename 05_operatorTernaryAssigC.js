
function maleMarriageEligibility(gender, age, boyName){
 var result= (gender== "Male" && age >=21)
  ? `Hay ${boyName} you are eligible for marriage`
  : ` ${boyName} you are not eligible for marriage `
  return result;
   
}
var message = maleMarriageEligibility("Male", 25, "Billgates");
console.log(message);
var message = maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log(message);

console.log("---------------------------------------------------------------");

function maleMarriageEligibility(gender, age, girlName){
var result= (gender=="Female", age >=18) 
? `${girlName} Hay you are eligible for marriage` 
: `${girlName} else you are not eligible for marriage`;
return result;
}
var message = maleMarriageEligibility("Female", 16, "Jenifer");
console.log(message);
var message = maleMarriageEligibility("Female", 27, "Malinda gates");
console.log(message);