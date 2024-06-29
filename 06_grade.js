var gradeCalculation = function(marks){
    var typeOf = typeof marks;
    if (marks<=0 || marks > 100 || marks == undefined || typeOf != "number" || "number" ){
        console.log(`In valid Marks: ${marks}`);
    //    if (marks>=91) {
    //     var number = "91";
    //     var result = +number;
    //     console.log(`Fantastic Marks: ${result} Your grade is A+`);

    //    }
    }else{
        if (marks>=90){
            console.log(`Fantastic Marks: ${marks} Your grade is A+`);
        }
        if (marks>=75 && marks <90){
            console.log(`Excellent Marks: ${marks} Your grade is A`);
    }
           if (marks>=50 && marks <75){
        console.log(`Good Marks: ${marks} Your grade is B`);
    }
    if (marks>=35 && marks <50){
        console.log(`Marks : ${marks} Your grade is c need improvement`);
}
    if (marks >=0 && marks<35){
        console.log(`Failed... Marks ${marks}`);
    }
   
}
  }
gradeCalculation(98);
console.log("--------------------------------------");
gradeCalculation(80);
console.log("--------------------------------------");
gradeCalculation(90);
console.log("--------------------------------------");
gradeCalculation(0);
console.log("--------------------------------------");
gradeCalculation(150);
console.log("--------------------------------------");
gradeCalculation(-7);
console.log("--------------------------------------");
gradeCalculation(35);
console.log("--------------------------------------");
gradeCalculation(29);
console.log("--------------------------------------");
gradeCalculation(64);
console.log("--------------------------------------");
gradeCalculation(49);
console.log("--------------------------------------");
gradeCalculation("91");
console.log("--------------------------------------");
gradeCalculation("Eighty");
console.log("--------------------------------------");
gradeCalculation("Undefind");
console.log("--------------------------------------");
gradeCalculation("Null");