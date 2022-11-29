console.log("NAME : JAPHAR MUJAWAR");
console.log("ASSIGNMENT :- REDUCE METHOD");
console.log("****************************************************************************************");
const array_numbers=[20,11,40,25,37,49,9,90,60,2,19]
console.log("Given Array :-",array_numbers);
console.log("Q.1] Sum of all array");
let sum=array_numbers.reduce((value,runingTotal)=>{
    return value+runingTotal
})
console.log(sum);
console.log("****************************************************************************************");

console.log("Q.2] Find the sum of all even array");
const array_number=[20,11,40,25,37,49,9,90,60,2,19]
let even_number=array_number.filter((element)=>{
    return element%2==0
})
console.log("Even number array : -",even_number);

const sumOf=even_number.reduce((runningTotal,value)=>{
    return runningTotal+value
})
console.log("Sum of even number array :-",sumOf);
console.log("****************************************************************************************");
