console.log("---------------------Step 1-----------------------");
let arrowFun = ()=>{
    console.log(`"Good morning,Today is Tuesday"`);
}
let value = arrowFun();
//console.log(value);

console.log("---------------------Step 2-----------------------");
let multiply = (num1,num2,num3)=>{
    console.log(`The multiplication of 5,5,2 is = ${num1*num2*num3}`);
    //console.log(`The multiplication of 10,4,1 is = ${num1*num2*num3}`);
}
multiply(5,5,2);
//multiply(10,4,1);

let multiplyication = (num1,num2,num3=1)=>{
    console.log(`The multiplication of 10,4 is = ${num1*num2*num3}`);
}
multiplyication(10,4);

console.log("---------------------Step 3-----------------------");
let add =(num1,num2,num3,num4,num5)=>{
    console.log(`Addition is= ${num1+num2+num3+num4+num5}`);
}
add(100,100,200,349,756);
add("I am"," learning "," ES6 "," features "," in depth ");