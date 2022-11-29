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
const emp_monika = new Employee(77, "Monika", "IT", 45000, "Wipro")
const emp_vinay = new Employee(88, "Vinay", "IT", 75000, "TCS")
const emp_mahi = new Employee(99, "Mahi", "HR", 85000, "Infy")
console.log("************************************************************************************************************************");
console.log("1.].");
const arrayOfEmployes=[emp_anil,emp_radha,emp_rishi, emp_sonali,emp_monika, emp_vinay,emp_mahi]
for (const employee of arrayOfEmployes) {
    if (employee.emp_company==="TCS") {
        console.log(`Employee Name:-${employee.emp_name}${"     "}Company Name:-${employee.emp_company}`);
        
    }
}
console.log("******************************************************************************************************************************");
console.log("2.].");
for(const employee of arrayOfEmployes) {
    if (employee.emp_dept==="Finance") {
        console.log(`Employee Name:-${employee.emp_name}${"     "}Department Name:-${employee.emp_dept}`);
        
    }
}
console.log("**********************************************************************************************************************************");
console.log("3.].");

for(const employee of arrayOfEmployes) {
    if (employee.emp_name.startsWith("R")) {
        console.log(`Employee ID:-${employee.emp_id}${"     "}Employee Name:-${employee.emp_name}${"     "}Employee Department:-${employee.emp_dept}${"     "}Company Name:-${employee.emp_company}${"     "}Salary:-${employee.emp_salary}`);
        
    }
}
console.log("**********************************************************************************************************************************");
    
console.log("4.].");
for(const employee of arrayOfEmployes) {
    if (employee.emp_salary>=70000) {
        console.log(`Employee Name:-${employee.emp_name}${"     "}Company Name:-${employee.emp_company}${"     "}Salary:-${employee.emp_salary}`);
        
    }
}
console.log("***************************************************************************************************************************************");
console.log("5.].");
for(const employee of arrayOfEmployes) {
    if (employee.emp_salary>=50000 && employee.emp_dept=="IT") {
        console.log(`Employee ID:-${employee.emp_id}${"     "}Employee Name:-${employee.emp_name}${"     "}Employee Department:-${employee.emp_dept}${"     "}Company Name:-${employee.emp_company}${"     "}Salary:-${employee.emp_salary}`);
        
    }
}
console.log("***********************************************************************************************************************************");
console.log("6.].");
for(const employee of arrayOfEmployes) {
    if (employee.emp_company==="Infy") {
        console.log(`Employee ID:-${employee.emp_id}${"     "}Employee Name:-${employee.emp_name}${"     "}Employee Department:-${employee.emp_dept}${"     "}Company Name:-${employee.emp_company}${"     "}Salary:-${employee.emp_salary}`);
        
    }
}
console.log("***********************************************************************************************************************************");
