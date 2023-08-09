

let personalDetails = {
    Myname :"Namrata",
    Mysurname: "Dhawde",
    address:"Shirur",
    dist:"Pune",
}
let collegeDetails ={
    collegeName: "SRCOE",
    location: "Wagholi",
    degree:"BE Electrical",
}
let mergedObject = Object.assign({} ,personalDetails , collegeDetails);
console.table(mergedObject);


  const array = ['Namrata','Kavya','Mrunmayee','Apurva'];
  for (const iterator of array) {
    console.log(array);
  }

  function reverseOrderChars(str){
    let reverse =" ";
    for (let index = str.length-1; index >=0; index--) {
        const char = str.charAt(index);
        reverse = reverse.concat(char).concat("");    
    }
    console.log(`Given String is= ${str}`);
    console.log(`Revers of string is=${reverse}`);
}
reverseOrderChars('Codemind Technology')

console.log("--------------------------Assignment No-02---------------------------");

let bankSbi = {
  bankName: "SBI Bank",
  accountNumber: 12345673,
  ifsc: "SBIN000567",
  interestRate: 6.57,
}
let bankLocation ={
  street: "Shirur",
  city: "Pune",
  pinCode:"412210",
}
let mergeObject = Object.assign({} ,bankSbi ,  bankSbi);
console.table(mergeObject);

let rateOfInterest = {
  homeLoan: "5.67",
  personalLoanInterest: "6.78",
  dueInterest: "6.59",
}
let mergeeObject = Object.assign({},bankSbi,bankSbi,rateOfInterest)
console.table(mergeeObject);
