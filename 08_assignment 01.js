console.log("================= Assignment 01 ======================");
console.log("Q.1. Count the total no.of vowels using include() for string");
var myString = "Good Morning IT Champ"
var vowelsLoveCase ="aeiou"
var vowelsUpperCase ="AEIOU"
var vowelsCount=0;
for (let index = 0; index < myString.length; index++) {
    var char = myString.charAt(index);
    var isLoverAvilable =vowelsLoveCase.includes(char);
    var isUpperAvilable= vowelsUpperCase.includes(char);
        if (isLoverAvilable  || isUpperAvilable){
        vowelsCount= vowelsCount+1;
        }
}
console.log("Total no. of vowels in given string using includes() : ", vowelsCount);
console.log("_____________________________________________________________________");
console.log("Q.2.WAP to count vowels from the given string")
var myString = "Good Morning IT Champ"
var vowelsLoveCase ="aeiou"
var vowelsUpperCase ="AEIOU"
var vowelsCount=0;
for (let index = 0; index < myString.length; index++) {
    var char = myString.charAt(index);
    var isLoverAvilable =vowelsLoveCase.includes(char);
    var isUpperAvilable= vowelsUpperCase.includes(char);
        if (isLoverAvilable  || isUpperAvilable){
        vowelsCount= vowelsCount+1;
        }
}
console.log("Total count of vowels in given string : ", vowelsCount);
console.log("_____________________________________________________________________");

console.log("Q.3.Write a function expression to Sum of all numbers from 1 to 10");

var add=0;
for (let index = 0; index <=10; index++) {
    add=add+index
    
}
console.log("The sum of 1 to 10 number is :",add);
console.log("_____________________________________________________________________");

console.log("Q.4. Write a function to Sum of all Square numbers from 1 to 5");
var square =1;
var addistion =0;
for (let index = 1; index <=5; index++) {
    square=index*index
    addistion=addistion+square
    
}
console.log("The sum of square of 1 to 5 number is :",addistion);
console.log("_____________________________________________________________________");

console.log("Q.5. Even position numbers")

function evenPositionChars(myString){
    for (let index = 0; index < myString.length; index++) {
        var chh=myString.charAt(index)
        if (index%2==0 && chh!=" "){
           
            console.log(chh);
        }
        
    }
}
console.log('A]. Even Position Number of string,"Hard Work Always pays back"');
evenPositionChars("Hard Work Always pays back")
console.log('B]. Even Position Number of string,"Soon I Will be Angular IT"');
evenPositionChars("Soon I Will be Angular IT")

console.log("Q.5. odd position numbers")

function oddPositionChars(myString){
    for (let index = 1; index < myString.length; index++) {
        var chh=myString.charAt(index)
        if (index%2!==0 && chh!=" "){
           
            console.log(chh);
        }
        
    }
}
console.log('A]. odd Position Number of string,"Hard Work Always pays back"');
oddPositionChars("Hard Work Always pays back")
console.log('B]. odd Position Number of string,"Soon I Will be Angular IT"');
oddPositionChars("Soon I Will be Angular IT")