// //High Fun
// console.log("Something!");

// //Function;
// function functionName(){
//     console.log("Hello!");
// }
// functionName();

// //add with function;
// function add1(a1,b1){//a1,b1 is parameters.
//     const sum1 = a1+b1;
//     return sum1;
// };

// console.log(add1(4,5));//4,5 is arguments.

// //use template literal;//``
// function guestFun(name, age=25){
//     return `Hello! ${name}, your age is: ${age}`; 
// }
// const greetGuest = guestFun("Abir",22);//override;
// console.log(greetGuest);
// //The undefine mean declear something but not assined;

// //function with the object return its also called Named function;
// function getStudentInfo(name1, marks){
//     return {
//         name1: name1,
//         marks: marks,
//         grade: marks >= 80 ? 'A+' : marks >= 60 ? "B" : "C", 
//     }
// };
// const studentData = getStudentInfo("Abir", 30);
// console.log(studentData);

// //calculate something;
// function calculatorFun(length, width){
//     return length + width;
// }
// const result3 = calculatorFun(5,3);
// console.log(result3);

// //more practice with another way;
// const calculateFun1 = function (length1,width1){
//     return length1 + width1;
// };

// const result4 = calculateFun1(2,3);
// console.log(result4);

// //Annonymous functuion;
// const sayHello1 = function(){
//     console.log("Hello Abir");
// };
// console.log(sayHello1());

// //set timeout function;
// setTimeout(function(){
//     console.log("Hi, Welcome to JavaScript!");

// }, 2000);//the output come 2 second left;

// //use map for return;
// const numbers1 = [1, 2, 3, 4, 5];
// const doubled = numbers1.map(function(num){
//     return num * 2;
// });
// console.log(doubled);

// //Arow function;
// function add11(A1, B1){
//     return A1 + B1;
// }
// const doubled1 = (A1, B1) => A1 + B1;
// console.log(doubled1(2,2));

// //Map for return;
// const numbers2 = [1, 2, 3, 4, 5];
// const doubled2 = numbers2.map((num) => num * 2);

// console.log(doubled2);

console.log("===============================");
//something more;
const numbers3 = [1, 2, 3, 4, 5];
const doubled3 = numbers3.map((num) => {
    const process = "Multifiction";
    return `${process} : ${num * 2}`;
});
console.log(doubled3);

console.log("===============================");

//another way;
const numbers4 = [10, 20, 30, 40, 45];
const doubled4 = numbers4.map((num1) => `Multiplication: ${num1 * 2}`);
console.log(doubled4);

console.log("===============================");

//Even Numbers;
const evenNumber = numbers4.filter((num3) => num3 % 2 === 0);
console.log(evenNumber);

console.log("===============================");

//basic 
const firstName1 = "Abir";
const lastName1 = "Hasan";
const fullName1 = firstName1 + lastName1;
console.log(fullName1);

//advance: Template string;
const fullName2 = `${firstName1} ${lastName1}`;
console.log(fullName2);

console.log("===============================");
//arow function;
const fullName3 = (firstName1, lastName1) => {
    return `My full name is ${firstName1} ${lastName1}`;
}
const myName = fullName3("Abir", "Hasan");
console.log(myName);

console.log("===============================");
//for of loop;
const randomAges = [20, 30, 13, 12];
for(let age1 of randomAges){
    console.log(`My age is ${age1}`);
};

///Start here the advance functon execution way;

//IIFE(Immeduately Invoked function Expressions);

//Basic;
// function myNoun(name4){
//     console.log(name4)
// }
// myNoun();
//IIFE;
console.log("===============================");
(function(){
    console.log("My name is Abrar.");
})();

console.log("===============================");
//IIFE with parameter;
(function (name2, age2){
    console.log(`Name: ${name2}, Age: ${age2}`);//this full line have a name String Interpolation;
})("Abir", 25);

console.log("===============================");
//genarator function: when we concrol the function its called genarator function;
function* myGenerator() {
    yield "First Value";
    yield "Second Value";
    return "Completed";
    yield "Third value";
    return "Completed";
};

const gen = myGenerator();

console.log(gen.next());//gf give me value and done name bulian value;
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
//third value is not showing because of we not console it out;

console.log("===============================");
//another one;
function* simpleGenerator() {
    yield 1;//Assiging the value;
    yield 2;
    yield 3;
    return "Done";
};

const gen1 = simpleGenerator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


console.log("===============================");
//another one with showing the for loop;
function* colorGenerator() {
    yield "Red";
    yield "Green";
    yield "Blue";
}
for (let color1 of colorGenerator()) {
    console.log(color1);
} 

console.log("===============================");
//another one with showing the array;
function* fruitsGenerator() {
    yield "Apple";
    yield "Orange";
    yield "Mango";
}

const fruit1 = [...fruitsGenerator()];
console.log(fruit1); 

console.log("===============================");
//How use it into the real life;
//ID Genarator;
function* idGenerator(prefix = "ID") {
    let count = 0;
    while (true) {
        count++;
        yield `${prefix}_${count.toString().padStart(4,0)}`;
    }
}

const userIdGen = idGenerator("USER");
const prodIdGen = idGenerator("PROD");
const idGen = idGenerator();
console.log(userIdGen.next().value);
console.log(userIdGen.next().value);
console.log(userIdGen.next().value);
console.log(prodIdGen.next().value);
console.log(userIdGen.next().value);
console.log(prodIdGen.next().value);
console.log(idGen.next().value);
console.log(idGen.next().value);

console.log("===============================");

//Recursive Function;
function countdown(num) {
    if(num <= 0) {
        console.log("Done!");
        return;
    }
    console.log(num);
    countdown(num - 1);
};
countdown(5);

//factorial;
function factorial(n){
    if(n <= 1){
        return 1;
    }
    return n * factorial(n-1);
}
console.log(factorial(5));