class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name,
            this.emp_dept = emp_dept,
            this.emp_salary = emp_salary,
            this.emp_company = emp_company
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS")
const emp_radha = new Employee(33, "Radha", "HR", 74000, "wipro")
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS")
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy")
const emp_monika = new Employee(77, "Monika", "IT", 45000, "wipro")
const emp_vinay = new Employee(88, "Vinay", "IT", 75000, "TCS")
const emp_mahi = new Employee(99, "Mahi", "HR", 85000, "Infy")
arrayEmployees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahi]
console.log("Q.1] Wipro Company Employees");
let wiproCom=arrayEmployees.filter((Employee)=>{
    if (Employee.emp_company=="wipro") {
        console.log(`Employee Name:-${Employee.emp_name}${"     "}Company Name:-${Employee.emp_company}`);
    } 
        
})
console.log("Q.2] All the Employees from IT and HR department");
let it_hr=arrayEmployees.filter((Employee)=>{
    if ((Employee.emp_dept==="IT") || (Employee.emp_dept==="HR")) {
        console.log(`Employee Name:-${Employee.emp_name}${"     "}Company Name:-${Employee.emp_dept}`);
    } 
        
})
console.log("Q.3] Find the Employees whose ID's number grater than 50");
let id=arrayEmployees.filter((Employee)=>{
    if ((Employee.emp_id>50)) {
        console.log(`Employee Name:-${Employee.emp_name}${"     "}Company Name:-${Employee.emp_id}`);
    } 
        
})
console.log("Q.4] Find the Employees names start with 'A','V' or 'M'");
let start_name=arrayEmployees.filter((Employee)=>{
    if (Employee.emp_name.startsWith("A")||Employee.emp_name.startsWith("V")||Employee.emp_name.startsWith("M")) {
        console.log(`Employee ID:-${Employee.emp_id}${"     "}Employee Name:-${Employee.emp_name}${"     "}Employee Department:-${Employee.emp_dept}${"     "}Company Name:-${Employee.emp_company}${"     "}Salary:-${Employee.emp_salary}`);
    } 
        
})
console.log("Q.5] Find the average salary of all employees");
const emp_salary=[50000,74000,47000,45000,40000,75000,85000]
const new_array4=emp_salary.reduce((value,runingTotal)=>{
    return value+runingTotal;
})
  console.log("Sum of all employees salary :-",new_array4);
  console.log("Average salary of the employee for all the department :-",new_array4/emp_salary.length);
  console.log("Q.] Find the average salary of IT Departments employees");
const it=arrayEmployees.filter((Employee)=>{
    if(Employee.emp_dept=="IT"){
        console.log(`Salary:-${Employee.emp_salary}`);

    }
});
 
 