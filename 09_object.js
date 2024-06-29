
const student = {
    stdName : "Jenny",
    rollNum : 107,
    city : "Mumbai", 
    isMarried : false,
    friendsList : ["Elon", "Bill", "Stew"],
    address : {
        flatNum : 1005,
        society: "Horizon",
        street : "wakad",
        PIN : 411057
    }
};
console.log(`Accessing element from object`);
console.log(`Studet Name : ${student.stdName}`);
console.log(`Married status: ${student.isMarried}`);
console.log(`city : ${student["city"]}`);
console.log(student.address.street);

console.log(`Accessing new entry`);
student.mobilee = "9988 5544 11 ";
console.log(student);
// console.table(student);
//  console.trace(student);

console.log(`update new entry`);
student.isMarried = true;
console.log(student);

student.friendsList[1]= "Bill gates";

console.log("add new element in address object");
student.address.city = "Pune";
console.log(student);

console.log("Delete perticular address");
delete student.city;
console.log(student);


const person = {
    firstName : "Anil",
    lastName : "Sharma",
    City : "Mumbai",
    display: function(){
        console.log(`${this.firstName}, ${this.lastName}`); // 
    }
}
person.display()