console.log("Q.1]. ****************** Create 5 objects from vehicle class and log on console *******************")
class Vehicle {
    company
    model
    colour
    type
    constructor(mycompany, mymodel, mymode, mytype) {
        this.company = mycompany
        this.model = mymode
        this.colour = mymode
        this.type = mytype
    }
}
let suhas=new Vehicle("Mahindra","Thar","Black","4-Wheeler")
console.log(suhas);
let ganesh=new Vehicle("Hero","Splender","Red","2-Wheeler")
console.log(ganesh);
let mohit=new Vehicle("BMW","Coupe","Black","4-Wheeler")
console.log(mohit);
let onkar=new Vehicle("Tata","Punch","White","4-Wheeler")
console.log(onkar);
let sachin=new Vehicle("Ashok Leyland","Truck","Red","12-Wheeler")
console.log(sachin);

console.log("Q.2]. ****************** Create 4 objects from copllege class and log on console ****************")

class College {
    collegeName
    studCapacity
    city
    pinCode
    constructor(mycollegeName, mystudCapacity, mycity, mypinCode) {
        this.collegeName = mycollegeName
        this.studCapacity=mystudCapacity
        this.city= mycity
        this.pinCode = mypinCode
    }
}
let amar=new College("SMS Colleage","500+","Sangola","413317")
console.log(amar);
let ranjeet=new College("VVK colleage","400+","Satara","23232")
console.log(ranjeet);
let sharma=new College("MPC College","700+","Sangli","257267")
console.log(sharma);
let tend=new College ("KBP College","900+","Pandharpur","276777")
console.log(tend);
console.log("************************************************************");

console.log("Q.3].--------- Traverse Object ---------");
const person= {
    collegeName:"SMS Colleage",
    studCapacity:"500+",
    city:"Sangola",
    pinCode:"413317"
    
}
for (const key in person) {
        const element = person[key];
        console.log(element);
}
console.log("************************************************************");
const raju= {
    collegeName:"VVK colleage",
    studCapacity:"400+",
    city:"Satara",
    pinCode:"23232"
    
}
for (const key in raju) {
        const element = raju[key];
        console.log(element);
}
console.log("************************************************************");
const sujit= {
    collegeName:"MPC College",
    studCapacity:"700+",
    city:"Sangli",
    pinCode:"257267"
    
}
for (const key in sujit) {
        const element = sujit[key];
        console.log(element);
}
console.log("************************************************************");
const om= {
    collegeName:"KBP College",
    studCapacity:"900+",
    city:"Pandharpur",
    pinCode:"276777"
    
}
for (const key in om) {
        const element = om[key];
        console.log(element);
}