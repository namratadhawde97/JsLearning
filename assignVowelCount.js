
function vowelCount(str){
    var result="  "
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {     
            count = count + 1;
             result = result.concat(char).concat("  ")
        }
    }
    console.log(`Vowels in Given String is-${result}`);
    console.log(`Total number of vowels is: ${count}`)
}
vowelCount("I am very good IT Developer");

console.log("---------------------------------------------------");

let sum = function(){
    let totalSum = 0;
     for (let index = 1; index <=5; index++) {
         totalSum =totalSum + index*index*index;
     }
     console.log(`Sum of cube of numbers from 1 to 5 is : ${totalSum}`);
 }
 sum();

 let sum1 = function(){
    let totalSum = 0;
     for (let index = 1; index <=8; index++) {
         totalSum = totalSum + index*index*index;
     }
     console.log(`Sum of cube of numbers from 1 to 8 is : ${totalSum}`);
 }
 sum1();

 console.log('------------------------------------------------');
 
var string = function(str){
    let index=1;
    let char=0;
    var result="";
    while(index<=str.length){
        let char= str.charAt(index);
        if(index%2!=0 && char!==(" ")){
            result=result.concat(char).concat(",");
        }
        index++;
    }
    console.log(`Given String is= ${str}`);
    console.log(`odd positioned character are= ${result}`);
}
string("hard work always pays back")
string('Soon I will be Angular IT Champ')


console.log('-----------------Assignment 2-------------------');
function oddPositionedChars(str){
    let reverse =" ";
    for (let index = str.length-1; index >=0; index--) {
        const char = str.charAt(index);
        reverse = reverse.concat(char).concat("");    
    }
    console.log(`Given String is= ${str}`);
    console.log(`Revers of string is=${reverse}`);
}
oddPositionedChars('Hard work always pays back')
oddPositionedChars('Soon I will be Angular IT Champ')