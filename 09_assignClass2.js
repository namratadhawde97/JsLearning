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
  var array = [collegeCoep,collegeMit,collegeJspm];
  for (const college of array) {
    college.show();
}

College.prototype.name = "COEP";
College.prototype.location = "Pune";

console.log(`Name : ${COEP.name}`);
