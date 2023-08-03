
console.log("---------------------------------Assignment No=01-------------------------------");
console.log("---------------Step 01---------------------");

const arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"]
let element1 =arrayFruits[0];
console.log(`In a Given string First element is: ${element1}`);
let arrayLength = arrayFruits.length;
let elementLast = arrayFruits[arrayLength-1];
console.log(`In a Given string Last element is : ${elementLast}`);

console.log("---------------Step 02---------------------");
arrayFruits.unshift("Papaya");
console.log(`Add element "Papaya" before element "Banana": ${arrayFruits}`);

console.log("---------------Step 03---------------------");
let removedElement = arrayFruits.splice(4,1);
console.log(arrayFruits);
console.log(`Remove "Mango" in given string: ${removedElement}`);

console.log("---------------Step 04---------------------");
arrayFruits.push("Pineapple");
console.log(`Add element Pineapple at last Position:${arrayFruits}`);

console.log("---------------Step 05---------------------"); 
var addElement = ['Papaya', 'Banana', 'Orange', 'Apple', 'Water Melon', 'Pineapple'];
addElement.splice(4, 0,'Dragon Fruit')
console.log(arrayFruits);
console.log(`Inset 'Dragon Fruit'before 'Water Melon' :${addElement}`);

console.log("---------------Step 06---------------------");
var replaceElement = ['Papaya', 'Banana', 'Orange', 'Apple', 'Water Melon', 'Pineapple'];
replaceElement.splice(2,1,'Kiwi')
console.log(arrayFruits);
console.log(`Replace an element 'Orange' with 'Kiwi: ${replaceElement}`);

console.log("---------------Step 07---------------------");

for (let index = 1; index <=4; index++) {
    const element = arrayFruits[index];
    console.log(`${element}`); 
}

console.log("---------------Step 08---------------------");
var lastThreeElement = ['Papaya', 'Banana', 'Orange', 'Apple', 'Water Melon', 'Pineapple'];
lastThreeElement.splice(0,3);
console.log(arrayFruits);
console.log(`Last Three element is :[${lastThreeElement}] `);

console.log('---------------------------------------Assignment No=02---------------------------');

const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
let  arrayNumbersLength = arrayNumbers.length
console.log(`The total number of length is:${arrayNumbersLength}`);

let element = arrayNumbers[0];
let arrayLengths = arrayNumbers.length;
let elementLasts = arrayNumbers[arrayLengths-1];
console.log(`First element is: ${element} & Last element is : ${elementLasts}`);

let arrayLengthss = arrayNumbers.length;
let elementLastss = arrayNumbers[arrayLengthss-3];
console.log(`Third Last element is : ${elementLastss}`);

console.log('----------even position---------');
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2==0) {
        const element = arrayNumbers[index];
        
        console.log(element); 
    }
}
console.log('----------odd position---------');

for (let index = 1; index < arrayNumbers.length; index++) {
    if (index%2==0) {
        const element = arrayNumbers[index];       
        console.log(element); 
    }
}

    let arr = [20,31,40,25,23,11,29,9,60,2,11];
    let totalSum = 0;
     for (let index = 0; index <arr.length; index++) {
         totalSum += arr[index]
     }
     console.log("Total Sum is " + [totalSum]);

     console.log('--------------------');

     let arrayy = [20,31,40,25,23,11,29,9,60,2,11];
     let arrayyLength=arrayy.length
     for (let index = 0; index < arrayy.length; index=index+5) {
        if (index%5==0) {
            const element = arrayy[index];
            console.log(element); 
        }
    }