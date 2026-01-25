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
};

//Squre;
// var x6 = 10;
// var result2 = x6 * x6;
// console.log(result2);

//with function;
function squ(x6){
    return x6*x6;
}
console.log(squ(10));

//Qube;
function qub(y6){
    return y6 * y6 * y6;
}
console.log(qub(12));

//1 to 10 integer showing by using the for loop;
for(var i1 = 0; i1 <=10; i1++){

    console.log(i1);
}

//Array with function;
function sumOfBook(arr){
    var total = 0;
    for (var i=0; i<arr.legth; i++) {
        total = total + arr[i];
        
    }
    //return arr;
    return total;
};
var data = [10,20,30,40,50,60];
console.log(sumOfBook(data));
//console.log(data.length);