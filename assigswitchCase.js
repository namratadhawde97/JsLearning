console.log("----------------------------Assignment No:01----------------------------");
var monthOfYear = function (month){
    switch (month){
        case 1:
        console.log(`${month} - January`);
        break;
        case 2:
        console.log(`${month} - February`);
        break;
        case 3:
        console.log(`${month} - March`);
        break;
        case 4:
        console.log(`${month} - April`);
        break;
        case 5:
        console.log(`${month} - May`);
        break;
        case 6:
        console.log(`${month} - June`);
        break;
        case 7:
        console.log(`${month} - Jully`);
        break;
        case 8:
        console.log(`${month} - August`);
        break;
        case 9:
        console.log(`${month} - September`);
        break;
        case 10:
        console.log(`${month} - Octomber`);
        break;
        case 11:
        console.log(`${month} - November`);
        break;
        case 12:
        console.log(`${month} - December`);
        break;
        default:
            console.log(`${month} - In valid input`);
            console.log(`Please provide valid data `);
          break;
    }
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);

console.log("---------------------------------Assignment No:02-----------------------------");

function marriageEligibility(age){
    if (age>=21 || age>=18) {
        console.log(`Your age is ${age} you are eligible for marriage`);
    }
    if (age>35 || age <=17) {
        console.log(`Your age is ${age} you are not eligible for marriage`);
    }
}
marriageEligibility(17);
marriageEligibility(25);
marriageEligibility(28);
marriageEligibility(35);
marriageEligibility(41);

console.log("---------------------------------Assignment No:03-----------------------------");


function leapYear(year){
    if ((0==year%4) &&(0!=year%100)||(0==year%400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
leapYear(2020)
leapYear(1600)
leapYear(1999)
leapYear(2022)
leapYear(1945)
leapYear(1950)
