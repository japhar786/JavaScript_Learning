console.log("*********************************** ASSIGNMENT 01 *************************************");
console.log("Given Array :-");
const fruits_seasonl=["Banana","Orange","Apple","Mango","Water Melon",];
console.log(fruits_seasonl);
console.log("**************************************************************************************");
console.log("Q.1].");
console.log("A]. Log the First element on console");
let slicedElements =  fruits_seasonl.slice(0,1)
console.log(slicedElements);
console.log("B]. Log the Last element on console");
let slicedValues =  fruits_seasonl.slice(4)
console.log(slicedValues);
console.log("**************************************************************************************");
console.log("Q.2]. Add element Pappay before the element Banana ");
fruits_seasonl.splice(0,0,"Pappaya")
console.log(fruits_seasonl);
console.log("**************************************************************************************");
console.log("Q.3].Remove Mango from the array ");
fruits_seasonl.splice(4,1)
console.log(fruits_seasonl);
console.log("**************************************************************************************");
console.log("Q.4].Insert element 'pineapple' at the last position");
fruits_seasonl.push("pineapple")
console.log(fruits_seasonl);
console.log("**************************************************************************************");
console.log("Q.5].Insert an element 'Dragon Fruit' before 'Water Melon");
fruits_seasonl.splice(4,0,"Dragon Fruit")
console.log(fruits_seasonl);
console.log("**************************************************************************************");
console.log("Q.6].Replace an element 'Orange' with 'Kivi");
fruits_seasonl.splice(2,1,"Kivi")
console.log(fruits_seasonl);
console.log("**************************************************************************************");
console.log("Q.7].Log the elements starting from index 1 to 4");
let student=fruits_seasonl.slice(1,4)
console.log(student);
console.log("**************************************************************************************");
console.log("Q.8].Only select last 3 element and log on console.use length property");
let mohit=fruits_seasonl.splice(4)
console.log(mohit);
console.log("**************************************************************************************");
