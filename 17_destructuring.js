
const student = {
    stdName: "jenny",
    rollNum: 107,
    city : "pune",
    isMarried: false
}
// let stdName = student.stdName;
// let city = student.city;
// let isMarried = student.isMarried;
//Object Destructuring
var {stdName, city, isMarried} = student;
console.log(`student name: ${stdName}, city : ${city}, Married Status: ${isMarried}`);

//Object Destructuring with default value
var {stdName, city, isMarried, PIN=411057} = student;
console.log(`student name: ${stdName}, city : ${city}, Married Status: ${isMarried}, PIN: ${PIN}`);


const array = [11, 22, 33, 44]
// let n0 = array[0]
// let n1 = array[1]
// let n2 = array[2]
// let n3 = array[3]

const [n0, n1, n2, n3=0, n4=0] = array; 
console.log(n0, n1, n2, n3, n4);

