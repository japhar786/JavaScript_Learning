console.log("********************* ASSIGNMENT 01 ***************************");
console.log("********************* Clone Using Object.assign() mehod ***************************");
const bank_sbi={
         bankName:"State Bank Of India",
        accountHolderName:"Japhar Dilawar Mujawar",
        accountNumber:"60261119647",
        contactNumber:9359810449,
        street:"kadlas Road",
        city:"Sangola",
        pin_code:413307,
        state:"Maharashtra"

    }
    let bank_clone= Object.assign({},bank_sbi)
console.table(bank_clone);
console.log("********************* Clone Using Sparde operator {...} ***************************");
let obj2= {...bank_sbi}
console.table(obj2);
console.log("********************* Merge Srep-1,Step-2 and Step-3 ***************************");
var rateOfInterest={
    home_lone_interest:'14.6%',
    personal_lone_interest:'12.3%',
    due_interest:'14.6%'
}
let mergeObject=Object.assign({},bank_sbi,rateOfInterest)
console.table(mergeObject);
console.log("********************* Traversing SBI_details using For Of Loop ***************************");

for (let element  in bank_sbi  ) {
console.log(`${element}:${bank_sbi[element]}`);
}