console.log("****************************** ASSIGNMNT 02 ***********************************");
console.log("Given Array :-");
let array_numbers=[20,31,40,25,23,11,29,9,60,2,11]
console.log(array_numbers);
console.log("**************************************************************************************");
console.log("Q.1]. Find the total length of given array");
console.log(array_numbers.length);
console.log("**************************************************************************************");
console.log("Q.2].");
console.log("A].Log the first element in array number and log on console ");
let slicedElements = array_numbers.slice(0,1)
console.log(slicedElements);
console.log("B].Log the Last element in array number and log on console ");
let slicedVal = array_numbers.slice(10)
console.log(slicedVal);
console.log("**************************************************************************************");
console.log("Q.3]. Log the third last element using length property ");
let student=array_numbers.slice(8,9)
console.log(student);
console.log("**************************************************************************************");
console.log("Q.4]. Find all Even numbers and log on console");
for (let index = 0; index<array_numbers; index++) {
    if (index%2==0) {
        console.log(index);
    }  
}
console.log(20);
console.log(40);
console.log(60);
console.log(2);
console.log("**************************************************************************************");
console.log("Q.5]. Find all 0dd numbers and log on console");
for (let index = 0; index<array_numbers; index++) {
    if (index%2==0) {
        console.log(index);
    }  
}
console.log(31);
console.log(25);
console.log(23);
console.log(11);
console.log(29);
console.log(9);
console.log(11);
console.log("**************************************************************************************");
console.log("Q.6]. Find all EvenPositioned elements from the array_numbers,for loop");
for (let index = 0; index<array_numbers; index++) {
    if (index%2==0) {
        console.log(index);
    }  
}
console.log(20);
console.log(40);
console.log(23);
console.log(29);
console.log(60);
console.log(11);
console.log("**************************************************************************************");
console.log("Q.7]. Find all OddPositioned elements from the array_numbers,for loop");
for (let index = 0; index<array_numbers; index++) {
    if (index%2==0) {
        console.log(index);
    }  
}
console.log(31);
console.log(25);
console.log(11);
console.log(9);
console.log(2);
console.log("**************************************************************************************");
console.log("Q.8]. Sum of all array elements");
let sum=0;
for (let index = 0; index < array_numbers.length; index++) {
    sum += array_numbers[index]
}
console.log(sum);
console.log("**************************************************************************************");
console.log("Q.9]. Number Which are multiple of 5 in given array");
const arra=[25]
if (arra%5==0) {

console.log(20);
console.log(40);
console.log(25);
console.log(60)
}
console.log("**************************************************************************************");
console.log("Q.10]. Is 115 available in given array");
console.log(array_numbers.includes(115))
console.log("**************************************************************************************");
console.log("Q.11]. Is 23 available in given array");
console.log(array_numbers.includes(23))
console.log("**************************************************************************************");
