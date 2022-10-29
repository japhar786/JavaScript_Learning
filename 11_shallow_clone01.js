console.log("Q.1].---------- Shallow Cloning ---------");
const array_nums=[20,3,4,56,90,400,49];
let rohit=array_nums;
console.log(array_nums);
array_nums.push(55);
array_nums.push(56);
console.log("---------- Updated Cloning ---------");
console.log(array_nums);

console.log("Q.2].---------- Deep Cloning using spread operator ---------");
array_nums.push(10)
array_nums.push(25)
console.table(array_nums);
console.log(rohit);

console.log("Q.4].---------- Employee Details ---------");

const employee_info={
    epm_id : 27,
    emp_name : "John Doe",
    salary:{
        july_month:"40,0000INR",
        avg_month:"50,0000INR",
        jun_month:"65,0000INR",
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokli,431202",
        },
        city:"Mumbai",
        state:"Maharahtra",
        country:"India"
    },
    mobiles:["+91 2454 4344 44","3434 3434 34","+2343 3334 34"]
}
let student={...employee_info}
console.log("Given object is :- ",employee_info);
console.log("Q.3].---------- Employee Details ---------");
console.table(employee_info);
console.log("Q.5.A].---------- Employee Details ---------");
console.table( employee_info.address);
console.log("Q.5.B].---------- Employee Mobile Number Details ---------");
console.table(employee_info.mobiles);

console.log("Q.6].---------- Deep Clone Using Operator ---------");
console.log("Q.6.A].---------- Update Street  ---------");
student.address.locality.street="Chinch Pokali,431202",
console.log( student.address.locality.street);
console.log( employee_info.address.locality.street);
console.table(student);
console.table(employee_info);
console.log("After update of street and mobile number in main object it also updated in the cloned object."),
console.log('Due to spread operator deep cloning not done for nested object ans array in the "employee_info"object');
console.log("Q.7.A].---------- ---------");

console.table(employee_info);


console.log("Q.7.B.---------- Updated July Month salary and country To 80,000 and United Kingdom ---------");
employee_info.salary.july_month="80,000"
employee_info.address.country="United Kingdom"
console.log(employee_info.salary.july_month);
employee_info.address.country="United Kingdom"
console.log(employee_info.address.country);
console.table(employee_info);

