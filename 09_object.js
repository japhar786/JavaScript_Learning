let variable_name=""
let person={
    fullName:"Sachin  Tendulkar",
    city:"Mumbai",
    isMarried:true,
    address:{
        city:"pune",
        pincode:2345345,
        state:"hfhjh"

    },
    eat:function() {
        console.log("I am Vegeterian");
    },
    details:function() {
        console.log(this.city);
    },
    details:function() {
        let persondetails='De'
    }

}
person.details();

person.eat();
console.log(person.fullName);
let personFullName=person.fullName
console.log(personFullName);
console.log(person.fullName);
console.log( person.city)
console.log( person.isMarried)
console.log( person.address);
console.log( person.address);

let