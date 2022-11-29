console.log("NAME : JAPHAR MUJAWAR");
console.log("ASSIGNMENT :- Sort() METHOD");
console.log("****************************************************************************************");
console.log("Q.1] Reverse the array");
const array=[113,45,56,11,32,45,109,799,56,45]
array.reverse();
console.log(array);
console.log("****************************************************************************************");
console.log("Q.2] Sort the array without logic");
array.sort()
console.log(array);
console.log("****************************************************************************************");
console.log("Q.3] Ascending sort array");
array.sort((first,second)=>{
    return (first>second)?1:-1
})
console.log(array);
console.log("****************************************************************************************");
console.log("Q.4] Descending sort array");
const new_array=array.sort((first,second)=>{
    return (first<second)?1:-1
})
console.log(new_array);
console.log("****************************************************************************************");
console.log("Q.5] Descending sort order array using reverse method");
new_array.reverse()
console.log(new_array);
console.log("****************************************************************************************");
console.log("Q.6] Greatest number from the array");
const max=Math.max(...array);
console.log(max);
console.log("****************************************************************************************");
console.log("Q.7] Smallest number from the array");
const min=Math.min(...array);
console.log(min);
console.log("****************************************************************************************");
console.log("Q.7] Remove duolicate array");
const Unique=[...new Set(array)]
console.log(Unique);