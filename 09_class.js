 class Student {
    // data members or properties of attributes or States
 constructor(fName, lName, stdCity){
    this.firstName = fName;
    this.lastName = lName;
    this.city = stdCity
}
//Member Function or Method or Actions
    details(){
        console.log(`details: ${this.firstName}, ${this.lastName}, ${this.city}`);
    }
 }

 const anil = new Student("Anil", "Sharma", "pune");
 anil.details();

 const sunil = new Student("sunil", "Job", "LA");
 sunil.details();
 
 const jenny = new Student("jenny", "Tipi", "LA");
 jenny.details();