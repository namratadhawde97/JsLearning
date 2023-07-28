console.log("----------------------------Step 1----------------------------");

var maleMarriageEligibility = function(gender,age,boyName){
    var result = (age >=21) ? `Hey ${boyName} you are eligible for marriage` : `Hey ${boyName} You are not eligible for marriage`
    console.log(result);
}
maleMarriageEligibility("male","21","Ram")
maleMarriageEligibility("male","25","Billgates")
maleMarriageEligibility("male","17","Stew jobs")

console.log("----------------------------Step 2----------------------------");

var femaleMarriageEligibility = function(gender,age,girlName){
    var result = (age >=18) ? `Hey ${girlName} you are eligible for marriage` : `Hey ${girlName} You are not eligible for marriage`
    console.log(result);
}
femaleMarriageEligibility('female','16','Jenifer')
femaleMarriageEligibility('female','27','Malinda Gates')


console.log("----------------------------Assignment NO 2----------------------------");

var interviewEligibility = function(gradScore, hscScore, sscScore, candidateName ){
    var result = gradScore>=70 || hscScore>= 80 || sscScore >=90 
     ? `Congrats ${candidateName} you are eligible for TCS interview.`
     :  `Unfortunately ${candidateName} you are not eligible for interview`;
     console.log(result);
 }
 
 interviewEligibility(80, 86, 90, 'Namrata');
 interviewEligibility(70, 65, 55, 'Apurva');
 interviewEligibility(60, 79, 88, 'Savita');





