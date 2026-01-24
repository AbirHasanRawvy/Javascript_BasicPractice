//Fun
console.log("=============================");
//Mnualy sum;
var x = 10;
var y = 20;

var result1 = x + y;

console.log("SUM is: "+ result1);

//sum with function;
function sum(x,y){
    return x + y;
}
console.log("Sum is: "+sum(20,10));

//substraction 
function sub(x1,y1){
    return x1 - y1;
}
console.log("Sub is: "+sub(20,10));

//Multification;
function mul(x2,y2){
    return x2*y2;
}
console.log("Mul: "+mul(20,3));

//divition;
function div(x3,y3){
    return x3/y3;
}
console.log("Div: "+div(21,3));

//Odd or even number;
var x4 = 10;

if(x4 % 2 === 0){
    console.log("Even Number!");
}else{
    console.log("Odd Number!");
}

//for odd number;
var y4 = 11;
if(y4 % 2 === 0){
    console.log("Even Number!");
}else{
    console.log("Odd Number!");
}

//number is possitive or negative;
var x5 = -10;

if(x5>0){
    console.log("Possitive Number!");
}else{
    console.log("Negative Number!");
}

//For Possitive Number;
var y5 = 10;

if(y5>0){
    console.log("Possitive Number!");
}else{
    console.log("Negative Number!");
}