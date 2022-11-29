console.log("Q.1].Add 10 into each element");
const arrayOfNumbers=[20,11,40,25,23,11,9,31,60,2,19]
const newArray=arrayOfNumbers.map((element,index)=>{
    if (index<=10) {
        return element+10
    }
    return element
})
console.log("Given array",arrayOfNumbers);
console.log("New array",newArray);
console.log("Q.2].Square of each element");
const neArray=arrayOfNumbers.map((element,index)=>{
    if (index<=10) {
        return element*element
    }
    return element
})
console.log("Given array",arrayOfNumbers);
console.log("New array",neArray);
console.log("Q.3].Adding index value of ");
const nevArray=arrayOfNumbers.map((element,index)=>{
    if (index<=10) {
        return element+index
    }
    return element
})
console.log("Given array",arrayOfNumbers);
console.log("New array",nevArray);