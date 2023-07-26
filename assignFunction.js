console.log("===============Step 1=================");
function show(){
    console.log('My name is Namrata');
    console.log("I am From Shirur");
}
show(); // Function Invocation

console.log("===============Step 2=================");
function personalDetails(firstName, lastName, collegeName){
var fullname=("firstName, lastName, collegeName");
return 'fullname';
}
var firstName="Namrata";
var lastName= "Dhawde";
var collegeName="SRCOE";
console.log(fullname=("First Name=Namrata  Last Name=Dhawde  College Name=SRCOE") );

console.log("===============Step 3====================");
var value1 = "Virat";
var value2 = "Anushka";
console.log('Before Swap' ,'value1- ', value1, 'value2- ', value2);
var temp=value1;
value1=value2;
value2=temp;
console.log('After Swap' ,'value1- ', value1, 'value2- ', value2);

var value1 = "1000";
var value2 = "2000";
console.log('Before Swap' ,'value1- ', value1, 'value2- ', value2);
var temp=value1;
value1=value2;
value2=temp;
console.log('After Swap' ,'value1- ', value1, 'value2- ', value2);

console.log("===============Step 4====================");
function addThreeValue(arg1, arg2, arg3){
    var result = arg1 + arg2 + arg3;
    return result;
}
var res =  addThreeValue(10.23,600,40);
console.log('Addition is ', res);

var res= addThreeValue('Hello','Good','Morning');
console.log('Addition is ', res);


console.log("******************************ASSIGNMENT NO:02**************************************");

function bankDetails(bankName,accountNum,location,pinCode){
var bankdetails=(bankName,accountNum,location,pinCode);
return 'bankdetails';
}
console.log("Bank Name=CITI Bank Account Number=3456782345  Location=Pune  Pin Code= 431202");
console.log("Bank Name=Axis Bank Account Number=7856782345 Location=Mumbai  Pin Code= 441202");
console.log("Bank Name=HDFC Bank Account Number=8956782345  Location=Pune  Pin Code= 631202");