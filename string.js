//String and methods:

//Character at;
let country = "Bangladesh";

console.log(country.charAt(5));


//concatanation method;
let fname = "Abir";

let lname = "Hasan";

let funame = fname.concat(" ", lname);
console.log(funame);

//includes: If have a word under string or not;
let text = "Try to lern JavaScript";

console.log(text.includes("JavaScript"));

//Index of: Find out the index number of the word;
console.log(text.indexOf("JavaScript"));

//Last index of: 
console.log(text.lastIndexOf("lern"));

//Start with : search of string;
console.log(text.startsWith("Try"));

//EndWith;
console.log(text.endsWith("JavaScript"));

//Match
// let email = "My gmail address is abirhasanrawvy@gmail.com";

// let r8 = email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

// console.log(r8);

//In match there have a correction in future;

//repalce method;
let newText = "Best try to learn something old";

let Ntext = newText.replace("old", "new");

console.log(Ntext);

//replaceall(search value and new value);
const text1 = "Saint Martin is a beutifull place. Saint Martin will be more beutifull in future.";

let r9 = text1.replaceAll("Saint Martin", "St.Martin");

console.log(r9);

//Slice method(begining index, ending index);
let text2 = "Bangladesh";

let r10 = text2.slice(0,6);

console.log(r10);

//Split(separator);
let sentence1 = "I, am, learning, JavaScript.";

const words1 = sentence1.split(",");

console.log(words1);

//Substring(start point, end point);
let text3 = "0Programing0";
const sub1 = text3.substring(0, 5);
console.log(sub1);

//toLowerCase method;
const low = text1.toLowerCase();
console.log(low);

//toUpperCase method;
const up = text1.toUpperCase();
console.log(up);

//trim method;
const text4 = "    Hello Bangladesh";
let r11 = text4.trim();
console.log(r11);

//trimStrat/trimLeft method;
let r12 = text4.trimStart();
console.log(r12);

//trimEnd/trimRight method;
let r13 = text4.trimEnd();
console.log(r13);

//valueOf method;
const strObj = new String("Bangladesh.");

console.log(strObj.valueOf());

//toString method;
const number2 = 123;

let r14 = number2.toString();

console.log(typeof(result));

//length method;
console.log(text2.length);