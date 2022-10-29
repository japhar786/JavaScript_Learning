console.log("----------------------- Asignment  01 ----------------------------");
console.log("Q.1.");
console.log("----------------  Male marriage Eligibility ------------------------");
var maleMarriageEligibility = function(gender,age,boyName){
    var result = gender="male" && age>=21   ? "Hey Bill Gates you are eligible for marriage"
     : " you are not eligible for marriage";
console.log(result);
}
maleMarriageEligibility("male",25,"Billgates")

var maleMarriageEligibility = function(gender,age,boyName){
    var result = gender="male" && age>=21   ? "Hey you are eligible for marriage"
     : " Hey Stev Jobs you are not eligible for marriage";
console.log(result);
}
maleMarriageEligibility("male",17,"Stev Jobs")
console.log("--------------  Female marriage Eligibility -----------------------");

var femaleMarriageEligibility = function(gender,age,boyName){
    var result = gender="female" && age>=18  ? "Hey Jenifer you are eligible for marriage"
     : " Hey  Jenifer you are not eligible for marriage";
console.log(result);
}
femaleMarriageEligibility("female",16,"Billgates")

var femaleMarriageEligibility = function(gender,age,boyName){
    var result = gender="female" && age>=18  ? "Hey Malinda Gates you are eligible for marriage"
     : "Hey malinda Gates you are not eligible for marriage";
console.log(result);
}
femaleMarriageEligibility("female",27,"Malinda Gates")