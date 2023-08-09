

let result = 1; 
for (let index = 1; index <= 5; index++) {
    result = result * index;
}
console.log(`Factorial of 5 is ${result}`);


function factorial(num){
   if(num==1) {
    return 1;
   } else {
   return num * factorial(num-1); 
   } 
}
let five = factorial(5);
console.log(`Factorial of 5 is: ${five}`);

function factorial(num){
    if(num==1) {
     return 1;
    } else {
    return num * factorial(num-1); 
    } 
 }
 let nine = factorial(9);
 console.log(`Factorial of 9 is: ${nine}`);

 function factorial(num){
    if(num==1) {
     return 1;
    } else {
    return num * factorial(num-1); 
    } 
 }
 let eleven = factorial(11);
 console.log(`Factorial of 11 is: ${eleven}`);

 function factorial(num){
    if(num==1) {
     return 1;
    } else {
    return num * factorial(num-1); 
    } 
 }
 let seven = factorial(7);
 console.log(`Factorial of 7 is: ${seven}`);


 console.log("-------------Assignment No=02---------------");


 