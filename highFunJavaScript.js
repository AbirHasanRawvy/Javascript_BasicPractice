//High Fun
console.log("Something!");

//Function;
function functionName(){
    console.log("Hello!");
}
functionName();

//add with function;
function add1(a1,b1){//a1,b1 is parameters.
    const sum1 = a1+b1;
    return sum1;
};

console.log(add1(4,5));//4,5 is arguments.

//use template literal;//``
function guestFun(name, age=25){
    return `Hello! ${name}, your age is: ${age}`; 
}
const greetGuest = guestFun("Abir",22);//override;
console.log(greetGuest);
//The undefine mean declear something but not assined;

//
function getStudentInfo(name1, marks){
    return {
        name1: name1,
        marks: marks,
        grade: marks >= 80 ? 'A+' : marks >= 60 ? "B" : "C", 
    }
}
const studentData = getStudentInfo("Abir", 30);
console.log(studentData);