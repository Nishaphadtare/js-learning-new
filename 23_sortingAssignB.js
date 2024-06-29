
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company ){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika,  emp_viny, emp_mahi];
// console.log(JSON.stringify(arrayEmployees));
arrayEmployees.sort((obj1, obj2)=>{
    return obj1.emp_id >= obj2.emp_id ? -1 : 1;
})
// console.log(arrayEmployees);
arrayEmployees.forEach(currentValue => {
    console.log(`Id:- ${currentValue.emp_id},  Name:- ${currentValue.emp_name}, Department:- ${currentValue.emp_dept}`);
});

console.log("---------------------------------------------------------------------------------------");
console.log("2. Ascending order of employee department");
arrayEmployees.sort((emp1, emp2)=>{
    return emp1.emp_dept >= emp2.emp_dept ? 1 : -1
})

arrayEmployees.forEach(currentValue =>{
    console.log(`Id:- ${currentValue.emp_id}, Department:- ${currentValue.emp_dept}, Company:- ${currentValue.emp_company}`);
});
console.log("---------------------------------------------------------------------------------------");
console.log("2. Descending order of employee Salary");
arrayEmployees.sort((sal1, sal2)=>{
    return sal1.emp_salary >= sal2.emp_salary ? -1 : 1;
})
arrayEmployees.forEach(currentValue=>{
    console.log(`Name: ${currentValue.emp_name}, Salary: ${currentValue.emp_salary}, Company: ${currentValue.emp_company}`);
})
