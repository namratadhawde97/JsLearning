console.log("__________________Assignment RestParameter_____________");

 function sum( ...theArgs ){
    let total=0;
     for (const arg of theArgs) {
        total+= arg;      
     }
     return total;
 }
 console.log(sum(5,6));
 console.log(sum(9,5,6));
 console.log(sum(78,90,51,68));
 console.log(sum(89, 90, 45,78, 90, 51, 68));

 console.log("__________________Assignment RestParameter_____________--");


function add(...num){
   let total=0
   for (let index = 0; index < num.length; index++) {
    total += num[index]   
   }
   console.log(total);
}
add(5,6);
add(9,5,6);
add(78,90,51,68);
add(89, 90, 45,78, 90, 51, 68);
