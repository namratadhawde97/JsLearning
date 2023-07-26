console.log("----------------------------------------------Step 1--------------------------------------------");
var square = function(num){
    var result = num * num;
    console.log(`Square of 5 is ${result}`);
}
square(5);

var square = function(num){
    var result = num * num;
    console.log(`Square of 6 is ${result}`);
}
square(6);

var square = function(num){
    var result = num * num;
    console.log(`Square of 25 is ${result}`);
}
square(25);

var square = function(num){
    var result = num * num;
    console.log(`Square of 100 is ${result}`);
}
square(100);

console.log("----------------------------------------------Step 2--------------------------------------------");

var square = function(){
    console.log(typeof square);
}
console.log(`The type of function is ${typeof square}`);

console.log("----------------------------------------------Step 3--------------------------------------------");

var areaOfReactangle = function(length,width){
    var result= length*width;
console.log(`Area of Reactangle is ${result}`);
}
areaOfReactangle(499,917)

console.log("----------------------------------------------Step 4--------------------------------------------");

var name1 = "Mahi";
var name2 = "Raina";
console.log('Before Swap' ,'name1- ', name1, 'name2- ', name2);
var temp=name1;
name1=name2;
name2=temp;
console.log('After Swap' ,'name1- ', name1, 'name2- ', name2);

console.log("----------------------------------------------Step 5--------------------------------------------");

var num1 = "55";
var num2 = "77";
console.log('Before Swap' ,'num1- ', num1, 'num2- ', num2);
var temp=num1;
num1=num2;
num2=temp;
console.log('After Swap' ,'num1- ', num1, 'num2- ', num2);

console.log("----------------------------------------------Step 6--------------------------------------------"); 

var name1 = "JS the most popular language of internet"
var result= name1;
console.log(`Given String is= ${result}`);
var lengthresult= result.length;
console.log('The total character available in string is:', lengthresult);


var charAtIndex = name1.charAt(lengthresult-6);
console.log(`The Char of 6  is = ${charAtIndex} `);


var charAtIndex = name1.charAt(lengthresult-11);
console.log(`The Char of 11  is = ${charAtIndex} `);

var charAtLastIndex = name1.charAt(lengthresult-1);
console.log(`The Last Char is =  ${charAtLastIndex} `);

var charAt0 = name1.charAt(0);
console.log(`Char at First index is = ${charAt0}`);

var charAtLastIndex = name1.charAt(lengthresult-3);
console.log(`The Third Last Char is =  ${charAtLastIndex} `);

var wordCount = function(word){
    var words = word.split(" ");
    var wordCount  = word.length;
    console.log(`In Given String - ${word}`);
    return wordCount;
 }
 var result = name1.split(' ');
var words = result.length;
console.log(`Total number of words are : ${words}`);









