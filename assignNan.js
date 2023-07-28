console.log("-------------------Assignment No : 01---------------------------");

var result = '3' + 2;
console.log(`Result is ${result} and 2 is number type is implicit converted to string ` );


var result = '3' + true;
console.log(`Result is ${result} and true is a boolean type is implicit converted to string`);


var result = '3' + undefined;
console.log(`Result is ${result} and undefined is implicitly coverted to string`);


var result = '3'+null;
console.log(`Result is ${result} and null is implicitly converted to string`);

console.log("-------------------Assignment No : 02---------------------------");

var result = '4'-true;
console.log(`Result is ${result} because true is boolean value so 4-1=3` );

var result = 4 + true;
console.log(`Result is ${result} because true is boolean value so 4+1=3`);

var result = 4 + false;
console.log(`Result is ${result} because false is boolean value so 4+0=4`);

console.log("-------------------Assignment No : 03---------------------------");

var result = '4'-'2';
console.log(`Result is ${result} when we subtract any two string value then string value converted into number value so result is 2`);

var result = '4'-2;
console.log(`Result is ${result} when we substract string value and number value then string value converted into number value so result is 2 `);

var result = '4'*2;
console.log(`Result is ${result} when we multiplying string value and number value then string value converted into number value so result is 8`);

var result = '4'/2;
console.log(`Result is ${result} when we Divide string value and number value then string value converted into number value so result is 2`);

console.log("-------------------Assignment No : 04---------------------------");

var result = 0=='';
console.log(`Result is ${result} space is get converted to number implicitly`);

var result = 0=='0';
console.log(`Result is ${result} 0 is converted to string implicitly`);

var result = 0==false;
console.log(`Result is ${result} false is converted to number`);

var result = null==undefined;
console.log(`Result is ${result} loosely equal as both having different type`);

var result = 1==[1];
console.log(`Result is ${result} both are same type that is number`);

var result = 1==true;
console.log(`Result is ${result} and true is converted into number`);

var result = 1=='1';
console.log(`Result is ${result} and 1 is string converted to number implicitly`);
