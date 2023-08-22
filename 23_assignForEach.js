
class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha = new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi = new Employee(5522,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_vinay = new Employee(88,"Vinay","IT",75000,"TCS");
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy");

console.log("-------------------------------Step1-------------------------------");

const arrayEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahi];
for (const employee of arrayEmployee ) {
    if (employee.emp_company=='TCS') {
        console.log(`Employee Name ${employee.emp_name}, Company is ${employee.emp_company}`);
    }
}
console.log("-------------------------------Step2-------------------------------");
for (const employee of arrayEmployee) {
    if (employee.emp_dept=='Finance') {
        console.log(`Employee Name is ${employee.emp_name}, Department is ${employee.emp_dept}`);
    }
}
console.log("-------------------------------Step4-------------------------------");
for (const employee of arrayEmployee) {
    if (employee.emp_salary>75000) {
        console.log(`Employee Name is ${employee.emp_name} and company is ${employee.emp_company} Salary is ${employee.emp_salary}`);
    }
}
console.log("-------------------------------Step5-------------------------------");
for (const employee of arrayEmployee) {
    if (employee.emp_salary>=50000 && employee.emp_dept=='IT') {
        console.log(`Employee Name is ${employee.emp_name} and Department is ${employee.emp_dept} Salary is ${employee.emp_salary}`);
    }
}
console.log("-------------------------------Step6-------------------------------");
for (const employee of arrayEmployee) {
    if (employee.emp_company=='Infy') {
        console.log(`Employee Name is ${employee.emp_name} and Company is ${employee.emp_company}`);
    }
}