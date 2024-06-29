 function display() {
    console.log("hello");
 }
 display(); //function with no argument nad no return value

 function show(){
    console.log("hay....I'm Nisha");
 }
 show()

 console.log("=================== Square() =======================");

 function square() {
    console.log("Find the square of 10:");
    var result = 10 * 10;
    console.log("square is", result);
 }
 square(); 
 
 console.log("=================== SquareNumber() =======================");
 //2.function with argument nad no return value

function squareNumber(num) {
    console.log("given square is:", num);
    var result = num * num;
    console.log("square is", result);
}
squareNumber(5);
squareNumber(25)

console.log("=================== SquareNumber() =======================");
//WRF with name areaOfRectangle and it's two arguments namely as length and width

function areaOfRectangle(length, width) {
    console.log("Given length and width is:", length, width);
    var result = length * width ;
    console.log("Area of rectangle is:", result);
}
areaOfRectangle(30, 20)
 
//3. Named function with argument and return value

//WAF to find the cube of given number

function cubeOfNum(num) {
    console.log("Given number is:", num);
    var res = num * num * num;
    return res;
}
var cube = cubeOfNum(3);
console.log("cube is:", cube);


// function with no argument and no return value
// function display(){
//     console.log("Hi.. there i am using js");
// }
// display();

// function with argument and no return value

// function name(num) {
//     lo
// }