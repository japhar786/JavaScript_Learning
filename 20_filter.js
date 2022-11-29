
console.log("FILTER ASSIGNMENT");
console.log("NAME : JAPHAR MUJAWAR");
console.log("****************************************************************************************");
console.log("Q.1] Find out all number greater than 50");
const array_numbers=[20,11,40,25,37,49,9,90,60,2,19]
let newArray=array_numbers.filter((element)=>{
return element>50
});
console.log(newArray);
console.log("****************************************************************************************");

console.log("Q.2] Find out all Even number ");
let newwArray=array_numbers.filter((element)=>{
return element%2==0
});
console.log(newwArray);
console.log("****************************************************************************************");

console.log("Q.3] Find out all odd number ");
let newarrays=array_numbers.filter((element)=>{
return element%2==1
});
console.log(newarrays);
console.log("****************************************************************************************");

console.log("Q.4] Find out all the number which are multiple of 5 ");
let newMultiple=array_numbers.filter((element)=>{
return element%5==0
});
console.log(newMultiple);
console.log("****************************************************************************************");

console.log("Q.5] Find out all the number which are between 20 and 50 ");
let newBet=array_numbers.filter((element)=>{
return element>20 && element<50
});
console.log(newBet);
console.log("****************************************************************************************");
