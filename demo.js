/*console.log("Japhar Dilawar Mujawar")
console.info("My Hobbies are-1.Reading 2.Travelling 3.Drawing")
console.log("My Strength- 1.Creativity. 2.Leadership skills 3.Ability to work in a team ")
console.log("My Weaknesses- 1.Too Direct 2.Public Speaking 3.Insecure ")
console.log("Result of addition of (30+50):  80");
console.log("Result of multiplication of (20*20):  400");*/
const array_numbers=[20,11,40,25,23,11,9,90,60,2,19];
const sum=array_numbers.reduce((runningTotal,value,index)=>{
runningTotal=runningTotal+value;
return runningTotal;
})
console.log("Array : [20,11,40,25,23,11,9,90,60,2,19]");
console.log("sum of all numbers :",sum);
const array_numbers1=[20,11,40,25,23,11,9,90,60,2,19];
const even_numbers2=array_numbers1.filter((element)=>{
return element%2==0;

})

console.log("Even no. form Array :",even_numbers2);
const add_n=even_numbers2.reduce((runningTotal,value)=>{
runningTotal=runningTotal+value;
return runningTotal;
})
console.log("Addition of All Even no. :",add_n);