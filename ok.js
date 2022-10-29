var myNumber=100;
if(100>0){
    console.log("positive");
    if(100%2==0){
        console.log("even");

    }
}

$  ||

class bank{
    constructor(bankName,accountHolderName,accountNumber){
        this.bankName=bankName
        this.accountHolderName=accountHolderName
        this.accountNumber=accountNumber
    }
    details(){
        console.log((this.bankName),(this.accountHolderName),(this.accountNumber));
    }
}
let bank_sbi=new bank("State Bank Of India","Japhar Dilawar Mujawar","60261119647")
console.log(bank_sbi);
console.table(bank_sbi);
console.log(`First Name : ${fName} and Last Name: ${lName}`);