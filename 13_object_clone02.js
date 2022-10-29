console.log("********************* ASSIGNMENT 02 ****************************");
class bank{
    constructor(bankName,location,accountNumber,ifsc,interest_rate){
        this.bankName=bankName
        this.location=location
        this.accountNumber=accountNumber
        this.ifsc=ifsc
        this.interest_rate=interest_rate
    }
    details(){
        console.log((this.bankName),(this.location),(this.accountNumber),(this.ifsc),(this.interest_rate));
    }
}
let bank_axis=new bank("Axis Bank","Pune","60261119647","AXI676677","10%")
let bank_kotak=new bank("Kotak Bank","Mumbai","78261119647","KOB676677","18%")
let bank_sbi=new bank("SBI Bank","Sangola","89261119647","SBI676677","9%")
let bank_icici=new bank("ICICI Bank","Mahud","50261119647","ICI676677","12%")
let bank_hdfc=new bank("HDFC Bank","Vaki","00261119647","AXI676677","11%")
let bank_punjab=new bank("Punjab Bank","Shivne","10261119647","pub676677","13%")
console.log("******************* Bank name and Location************************");
let array=[bank_axis,bank_kotak,bank_sbi,bank_icici,bank_hdfc,bank_punjab]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log((element.bankName),(element.location));
}
        
console.log("******************* Kotak Bank Details ***************************");
console.log(bank_kotak);
console.log("*******************  Bank Details Using For Loop ************************");

for (const element of array) {
    console.log(element);
}