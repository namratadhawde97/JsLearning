

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