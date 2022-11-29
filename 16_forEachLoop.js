//const arrayNumbers=[10,20,30,40,20,10]
arrayNumbers.forEach(function(currentvalue,index,array){
    console.log(currentvalue,index,array);
});//

arrayNumbers.forEach((currentvalue)=>{
    console.log(currentvalue);
});

console.log("===== Traversing map using forEach() =====");
let map = new Map();
map.set(22, "Sachin");
map.set(11, "Dravid");
map.set(33, "Gaungully");
map.set(77, "Dravid");
map.forEach( (key, value) => {
    console.log(key, value);
} );

console.log("***************************************");
const arrayNumbers=[2,3,4,5,6,1];
let newArray=arrayNumbers.filter((element)=>{
    return element>=4;
});
console.log(newArray);
console.log("====== reduce()=====");
let sum =  arrayOfNumbers.reduce( (value, runningTotal) => {
    return  value + runningTotal;
} );
console.log(sum);
