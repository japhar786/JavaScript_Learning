/*let x="NaN";
console.log(x);
console.log(typeof x);
console.log("*****************************************************");
let hour=0;
if (hour < 1) {
    greeting = "Good day";
    console.log(greeting);
  }
  else {
    greeting = "Good evening";
    console.log(greeting);
  }
console.log("*****************************************************");
var time=5;
if (time < 10) {
    greeting = "Good morning"
}*/

/*function details(name,age,number,city) {
  console.log(name);
  console.log(age);
  console.log(number);
  console.log(city);
  return number;
  
}
var hii=details("Japhar",55,65675868578,"Pune")
console.log(hii);*/
/*function my_function(){
  console.log("I love Dancing and Travelling");
  console.log("Prabhu deva and Remo D'souza");
}
my_function();
console.log("===============================================");

function dance_india(){
console.log("Hello Everyone");
console.log("Good Morning");
console.log("Good Evening")
}
dance_india();
console.log("===============================================");

function swap_values(arg1,arg2){
console.log("=======================Befor Swap=======================");
console.log(arg1,arg2);
var temp =arg1;
arg1=arg2;
arg2=temp;
console.log("=======================After Swap=======================");
console.log(arg1,arg2);
}
swap_values ("Virat","Anushka");
swap_values (1000,2000);

console.log("================Addition Values==============");
//Add the three number or string and return
function add_three_number(arg5,arg6,arg7){
console.log("===================");
var add = arg5+arg6+arg7;
console.log("Addition of three number is =" +add);
return add;
}

add_three_number(10,20,30);
add_three_number(40,50,60);
add_three_number("Hello" ,"Good" ,"Morning");


function test(arg1,arg2,arg3) {
console.log(arg1,arg2,arg3);
return arg1+arg2+arg3;


}
 test(40,220,30);
console.log(test(40,220,30));*/
/*
function name(firstName, lastname) {
  console.log("==============Concat=================");
  console.log(firstName + lastname);


}
name("Komal", "Dhone")
function add_three_numbers(arg1,arg2,arg3){
  console.log("========addition Of 3 Numbers with Return ========");
console.log(arg1,arg2,arg3);
console.log(arg1+arg2+arg3);
return arg1+arg2+arg3

}
let hii=add_three_numbers("10.23","600","40")
console.log(hii);

var number = 2;
switch (number) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednsday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        break;
}

let i = 1;
for (let i=1;i<=5; i++) {
  if (i == 3){ 
    continue;
  }
  console.log(i);
}

console.log("**************");

function mohit(a,b) {
console.log(a*b);
  return a*b
  
}
mohit(4,4,)*/
class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;

  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS")
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro")
const emp_Rushi = new Employee(55, "Rushi", "Finance", 47000, "TCS");
const emp_Sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const  emp_Monika  = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_Vinayak = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_Mahesh = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_emps=[emp_anil,emp_radha,emp_Rushi, emp_Sonali , emp_Monika , emp_Vinayak ,emp_Mahesh]
console.log("1.Employees From Wipro : ");
const new_array=array_emps.filter((Employee)=>{
  if (Employee.emp_company=="Wipro") {
      console.log(`Name : ${Employee.emp_name}  Company : ${Employee.emp_company}`);
  }
})