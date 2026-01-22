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
let email = "My gmail address is abirhasanrawvy@gmail.com";

let r8 = email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

console.log(r8);

//In match there have a correction in future;

//repalce method;
let newText = "Best try to learn something old";

let Ntext = newText.replace("old", "new");

console.log(Ntext);