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

//function with the object return its also called Named function;
function getStudentInfo(name1, marks){
    return {
        name1: name1,
        marks: marks,
        grade: marks >= 80 ? 'A+' : marks >= 60 ? "B" : "C", 
    }
};
const studentData = getStudentInfo("Abir", 30);
console.log(studentData);

//calculate something;
function calculatorFun(length, width){
    return length + width;
}
const result3 = calculatorFun(5,3);
console.log(result3);

//more practice with another way;
const calculateFun1 = function (length1,width1){
    return length1 + width1;
};

const result4 = calculateFun1(2,3);
console.log(result4);

//Annonymous functuion;
const sayHello1 = function(){
    console.log("Hello Abir");
};
console.log(sayHello1());

//set timeout function;
setTimeout(function(){
    console.log("Hi, Welcome to JavaScript!");

}, 2000);//the output come 2 second left;

//use map for return;
const numbers1 = [1, 2, 3, 4, 5];
const doubled = numbers1.map(function(num){
    return num * 2;
});
console.log(doubled);

//Arow function;
function add11(A1, B1){
    return A1 + B1;
}
const doubled1 = (A1, B1) => A1 + B1;
console.log(doubled1(2,2));