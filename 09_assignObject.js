console.log("------------------Assignment N0:01---------------------");

let sbiBank = {
    bankName: "SBI Bank",
    accountNumber: 12345673,
    ifsc: "SBIN000567",
    interestRate: 6.57,
    showDetails: function(){
        console.log(`SBI Bank: ${this.bankName},${this.accountNumber},${this.ifsc}, ${this.interestRate}`);
    }
}
console.log(sbiBank);
sbiBank.showDetails();

let axisBank = {
    bankName: "Axis Bank",
    accountNumber: 1234783673,
    ifsc: "AXISN000567",
    interestRate: 7.55,
    showDetails: function(){
        console.log(`Axis Bank: ${this.bankName},${this.accountNumber},${this.ifsc}, ${this.interestRate}`);
    }
}
console.log(axisBank);
axisBank.showDetails()

let hdfcBank = {
    bankName: "HDFC Bank",
    accountNumber: 3462345673,
    ifsc: "HDFCN000567",
    interestRate: 5.98,
    showDetails: function(){
        console.log(`HDFC Bank: ${this.bankName},${this.accountNumber},${this.ifsc}, ${this.interestRate}`);
    }
}
console.log(hdfcBank);
hdfcBank.showDetails()

let yesBank = {
    bankName: "YES Bank",
    accountNumber: 12345673,
    ifsc: "YESN000567",
    interestRate: 6.98,
    showDetails: function(){
        console.log(`YES Bank: ${this.bankName},${this.accountNumber},${this.ifsc}, ${this.interestRate}`);
    }
}
console.log(yesBank);
yesBank.showDetails()

console.log("------------------Assignment N0:02---------------------");

let professor={
    professorName:"Merry",
    EmpID: 12345,
    salary: "65K",
    degree:("enginnering","CSC","PHD","Adv Computing"),
    totalexperience:"14 years",
    certificate :["Hacker Rank Participation", "Certificate in IFE Course","Certificate in Adv Programming"],
    teacherDegree: function(){
        console.log(`Teacher Degrees=${this.degree}`),
    },
}
console.log(professor);
professor.teacherDegree();
professor.certificate;



console.log("------------------Assignment N0:03---------------------");



let sbiBank={
    bankName:"SBI Bank",
    location:"Pune",
    accountNo:"12334546",
    IFSC:"SBINO005678",
    InterestRate:"3.00%-7.10%p.a",
    showDetails:function () {
       console.log(`The Bank Details :${this.bankName},${this.location},${this.accountNo},${this.IFSC},${this.InterestRate}`);
    }
}
let axisBank={
bankName:"AXIS Bank",
location:"Mumbai",
accountNo:"3429495859",
IFSC:"AXISNO0065743",
InterestRate:"3%-3.5%p.a",
showDetails:function () {
   console.log(`The Bank Details :${this.bankName},${this.location},${this.accountNo},${this.IFSC},${this.InterestRate}`);
}
}