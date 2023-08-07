

class  vehicle {
    constructor(vehicleName,vehicleSpeed,companyName,Average,vehicleColour){
       this. vehicleName=vehicleName;
       this. vehicleSpeed=vehicleSpeed;
       this.companyName=companyName;
       this.Average=Average;
       this.vehicleColour;
    }
    show(){
        console.log(`Vehicle Details is Vehicle Name: ${this. vehicleName} , vehicle Speed: ${this.vehicleSpeed}
        company Name: ${this.companyName}, Average: ${this.Average},Color:${this.vehicleColour}`);
      }
    
  }

  let vehicleErtiga = new vehicle("Ertiga", 200, "Maruti", "25", "White");
  let vehicleSwift = new vehicle("Swift",180,"Maruti","27","Red");
  let vehicleEnova = new vehicle("Enova",250,"Toyota","20","Gray")
  const array = [vehicleErtiga,vehicleSwift,vehicleEnova];
  for (const vehicle of array) {
    vehicle.show();
}

console.log("-------------------Assignment No:02--------------------")

class  college {
    constructor(collegeName,location,establishYear,founder){
       this. collegeName=collegeName;
       this. location=location;
       this.establishYear=establishYear;
       this.founder=founder;
    }
    show(){
        console.log(`College Details is College Name: ${this. collegeName} , Location: ${this.Location}
        establish Year: ${this.establishYear},founder : ${this.founder}`);
      }
    
  }

  let collegeCoep = new college("COEP","Pune", "1975", "ABCD");
  let collegeMit = new college("MIT","Pune","1980","wxyz");
  let collegeJspm = new college("JSPM","Pune","1985","pqrs")
  let array = [collegeCoep,collegeMit,collegeJspm];
  for (const college of array) {
    college.show();
}
