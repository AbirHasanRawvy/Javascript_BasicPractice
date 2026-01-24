//JavaScript Numbers;

//Expomnential;
let n1 = 123456;
console.log(n1.toExponential());

//tofix;
let n2 = 3.14159;
console.log(n2.toFixed());

//toLocalString;
let n3 = 1234567.89;
console.log(n3.toLocaleString("en-us"));
console.log(n3.toLocaleString("bn-bd"));

//toPrecision: define the number room;
let n4 = 10000;
console.log(n4.toPrecision(4));

//toString method: convert number to the string;
let n5 = 100000;
let rr = n5.toString();
console.log(typeof(rr));

//valuOf: return natural value;
let n6 = 50;
let rrr = n6.valueOf();
console.log(rrr);

//parseInt: string convert to real value;
let str = "123.45";
let rrrr = parseInt(str);
console.log(typeof(rrrr));

//parseFloat: 
let str1 = "123.45";
let rrrrr = parseInt(str1);
console.log(typeof(rrrrr));

//String;
let n7 = 100;
let r5r = String(n7);
console.log(typeof(r5r));

//Max value;
console.log(Number.MAX_VALUE());

//Min value;
console.log(Number.MIN_VALUE());

//Nan
let n8 = "hello" / 2;
console.log(n8);