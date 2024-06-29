const employeeInfoJSON = `{
"name": "Aleix Melon",
"id" : "E00245",
"role" : ["DEV", "DBA"],
"age" : "23",
"doj" : "11-12-2019",
"married" : false,
"address" : {
"street" : "32, Laham St.",
"city" : "Innsbruck",
"country": "Austria"
},
"referred-by" : "E0012"
}`

console.log(employeeInfoJSON);
const employee = JSON.parse(employeeInfoJSON);
console.log(employee);

console.log("-----------------------------------------------------------------");
console.log("Log on console role -> 'DEV'");
console.log(`Role: ${employee.role[0]}`);

console.log("-----------------------------------------------------------------");
console.log("Log the Last name on console  -> 'Melon'");
console.log(`Last name: ${employee.name.split(" ")[1]}`);

console.log("-----------------------------------------------------------------");
console.log("Log only joining year of employee  -> '2019'");
console.log(`Joining year: ${employee.doj.split("-")[2]}`);

