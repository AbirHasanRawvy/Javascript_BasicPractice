//Live date find out;
//today date;
const now = new Date();
console.log(now);

//Manualy;
const now1 = new Date("2001-01-20");
console.log(now1);

//year;
console.log("Year: ", now.getFullYear());

//month;
console.log("Month: ", now.getMonth());

//date;
console.log("Date: ", now.getDate());

//houre;
console.log("Hour: ", now.getHours());

//minute;
console.log("Minute: ", now.getMinutes());

//second;
console.log("Second: ", now.getSeconds());


//manualy input;
const now2 = new Date();

now2.setFullYear(2025);
now2.setMonth(0);
now2.setDate(23);

console.log(now2);

//Time fasetame;
const now3 = new Date();

console.log(now3.getTime());

//start-end date;
const start1 = new Date("2024-05-05");
const end = new Date("2026-30-02");

const diffarence = end - start1;

const diffarence1 = diffarence/(1000*60*60*24);

console.log(diffarence1);

//find out the bd time;
const now4 = new Date();

let bdTime = now4.toLocaleDateString("en-BD");

console.log(bdTime);