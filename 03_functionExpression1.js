console.log("Que.1----------------------");
var square = function(arg1){
    console.log("square of",arg1,"=",arg1*arg1);
}
square(5)
square(10)
square(15)

console.log("Que.2----------------------");
console.log("Typeof function is:",typeof square);

console.log("Que.3----------------------");

var areaoftriangle = function(arg1,arg2){
var aot = (1/2) * arg1 * arg2;
console.log("Area of Triangle:1/2*",arg1,"*",arg2,"=",aot);
}
areaoftriangle(45,34)

console.log("Que.4----------------------");
var areaofreactangle = function(arg1,arg2){
var aor = arg1 * arg2;
console.log("Area of Reactangle:",arg1,"*",arg2,"=",aor);
}
areaofreactangle(499,917)

console.log("Que.5.----------------------");

var swap_values = function(arg1,arg2){
    var temp;
    console.log("Values Before Swapping");
    console.log("",arg1,arg2);
    
    temp=arg1
    arg1=arg2
    arg2=temp
    console.log("Values After Swapping");
    console.log("",arg1,temp);
}
swap_values("Virat","Anushka")
swap_values(1000,2000)

console.log("Que.5.----------------------");

var string =("JavaScript the most popular language")
console.log(string);

var count =(string.length);
console.log("A. Total Character in given string is =",count);

var tipu = string.indexOf("S");
console.log("B. The Index of character 'S'is =",tipu);

var mohit = string.indexOf("lang");
console.log("C. The Index of string 'lang'is =",mohit);

var last_character = string.charAt(string.length-1)
console.log("D. Last character of string is =",last_character)


var last_third = string.charAt(string.length-3)
console.log("E. Third Last Character is =",last_third)
