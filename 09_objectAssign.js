
const professor = {
    collegelName : "DSG College",
    depatrment : "BCA",
    univercity : "Solapure",
    degree : {
        engineering: "CSC",
        phd : "Adv Computing",
        course : "Javascript",
    },
    certificates : [
    "Haker Rank Participation", 
    "Certificate in IFE course", 
    "Certificate in Adv Programming"
]

}
console.log(professor);
// console.log("--------------------------------------------");

console.log(`CollegeName: ${professor.collegelName}`);
console.log(`Department: ${professor.depatrment}`);
console.log(`Univercity: ${professor.univercity}`);

console.log("--------------------------------------------");
console.log("2.include Nested Object");
console.log(`Engineering: ${professor.degree.engineering}`);
console.log(`PHD: ${professor.degree.phd}`);
console.log(`Course: ${professor.degree.course}`);

console.log("--------------------------------------------");
console.log("3.Add One Array");
console.log(`Certificates: ${professor.certificates }`);

console.log("--------------------------------------------");
console.log("4. Add New Property");
 professor.totalExperience = "14 Years";
 console.log(`new Property: ${professor.totalExperience}`);

 console.log("--------------------------------------------");
 console.log("5. Modify any existing property");
 professor.degree.course = "Angular";
 console.log(`Modify property:${professor.degree.course}`);

 console.log("--------------------------------------------");
 console.log("6. Add new certificate");
 let add = professor.certificates.splice(2, 0, "Oracle Certification")
 console.log(professor.certificates);

 console.log("--------------------------------------------");
 console.log("7. log the last element of the array");
 const len = professor.certificates.length;
 console.log(`last Certification:`, JSON.stringify(professor.certificates[len-1]));

 console.log("--------------------------------------------");
 console.log("8. log the complete object");
 console.log(`Complete Object`, JSON.stringify(professor));

 console.log("--------------------------------------------");
 console.log("9. Traverse array ");
    for (const certificate of professor.certificates) {
        console.log(JSON.stringify(certificate));
 }

