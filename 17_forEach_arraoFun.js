const array_numbers=[1,-7,40,502,-77,91,0,108,89,-601]
console.log("Given array is :",array_numbers);
console.log("1].Array element with index value");
array_numbers.forEach(function(currentvalue,index){
console.log("current value is : ",currentvalue," ;","Index value is : ",index);
});
console.log("2].Positive Numbers");
array_numbers.forEach(function(currentvalue,index){
    if (currentvalue>0) {
console.log("current value is : ",currentvalue," ;","Index value is : ",index);
       
        
    }
    });
console.log("3].Negative Numbers");
array_numbers.forEach(function(currentvalue,index){
    if (currentvalue<0) {
console.log("current value is : ",currentvalue," ;","Index value is : ",index);
       
        
    }
    });
    console.log("4].Even Numbers");
array_numbers.forEach(function(currentvalue,index){
    if (currentvalue%2==0) {
console.log("current value is : ",currentvalue," ;","Index value is : ",index);
       
        
    }
    });
    console.log("5].Sum of all array Numbers");
    let sum=0
    for (let index = 0; index < array_numbers.length; index++) {
        sum += array_numbers[index]
    }
    console.log(sum);

    console.log("6].Even positioned values");
    array_numbers.forEach(function(currentvalue,index){
        if (index%2==0 ) {
    console.log("current value is : ",currentvalue," ;","Index value is : ",index);
            }
        });
        console.log("7].odd positioned values if it is negative");
    array_numbers.forEach(function(currentvalue,index){
        if (index%2==1 && currentvalue<0 ) {
    console.log("current value is : ",currentvalue," ;","Index value is : ",index);
            }
        });