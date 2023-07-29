console.log("--------------------------------Assignment No 01---------------------------");
console.log("---------------------Step 1-------------------------");

var num = 45;
var result = num%2==0 ? "EVEN" : "ODD";
console.log(`45 is ${result} Number`);

var num = 70;
var result = num%2==0 ? "EVEN" : "ODD";
console.log(`70 is ${result} Number`);

var num = 67;
var result = num%2==0 ? "EVEN" : "ODD";
console.log(`67 is ${result} Number`);

var num = 98;
var result = num%2==0 ? "EVEN" : "ODD";
console.log(`98 is ${result} Number`);

console.log("---------------------Step 2-------------------------");

var num = "JavaScript - ES6"
var result= num
var lengthresult= result.length;
if (lengthresult >= 10) {
    console.log(`Given string is greater than 10 characters`);
} else {
    console.log(`Given string is not greater than 10 character`);
}

console.log("---------------------Assignment N0 02-------------------------");

function voteEligibility (age){
    if (age<=0) {
        console.log(`your age is invalid`);
    }else {
        if (age >= 18) {
        console.log(`you are eligible for vote`);
    } else {
        console.log(`you are not eligible for vote`);
    }
}
}
voteEligibility(18)
voteEligibility(15)
voteEligibility(20)
voteEligibility(17)
voteEligibility(40)
voteEligibility(-10)

console.log("---------------------Assignment N0 03-------------------------");

function gradeCalculation(mark){
    var markValue= +mark
   if (mark>=90) {
    console.log(`Funtastic Marks ${mark} your grade is A+`);
   } else {
    if (mark>=75 && mark <=90) {
        console.log(`Excellent marks ${mark} your grade is A `);
    } else {
        if (mark>=50 && mark<=75) {
            console.log(`Good Mark ${mark} your grade is B`);
        } else {
            if (mark>=29 && mark<50) {
                console.log(`Mark is ${mark} your grade is C, Need to improvement`);
            }
        }
        if (mark=0 || mark<0 || mark>100 ||isNaN(markValue)) {
            console.log(`Please Provide The Valid Marks`);
        }
    }
   }
}
gradeCalculation(98)
gradeCalculation(80)
gradeCalculation(90)
gradeCalculation(0)
gradeCalculation(50)
gradeCalculation(-7)
gradeCalculation(35)
gradeCalculation(29)
gradeCalculation(64)
gradeCalculation(49)
gradeCalculation("Eighty")
gradeCalculation(91)
gradeCalculation(undefined)
gradeCalculation(null)
   