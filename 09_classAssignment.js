
class Vehicle {
    constructor(type, name,  color, model, tires){
        this.type = type
        this.name = name
        this.color = color
        this.model = model
        this.tires = tires
    }
    details(){
        console.log(`details: ${this.type}, ${this.name}, ${this.color}, ${this.engine}, ${this.tires}`);
    }
}
const vehicles = new Vehicle("Car", "Tesla", "Red","Model3", "Tires-4" )
console.log(vehicles);

console.log("-------------------------------------------------------------------------");
class College {
    constructor(name, department, principal, location){
        this.name = name
        this.department = department
        this.principal = principal
        this.location = location
    }
    display(){
        console.log(`Details: ${this.name}, ${this.department}, ${this.principal}, ${this.location}`);
    }
}

const collegeDetails = new College("DSG College", "BCA", "Kamble Sir", "Solapur")
console.log(collegeDetails);