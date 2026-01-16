
console.log("===================Array=============");
//Array: when we try to took multiple data we use array;
let fruits = ["Apple", "Orrange", "Banana", "Graps"];
console.log(fruits);
console.log(fruits[2]);

///array methods;
//array at method;
const realNumber = [10, 20, 30, 40, 50];

console.log(realNumber.at(3));

//array concatanation;
const fruits3 = ["Apple", "Banana"];
const vagetables = ["carrot", "Tomato"];

const result = fruits3.concat(vagetables);
console.log(result);

//array every;
const results = realNumber.every((num)=> num > 0);
console.log(results);

//array filter;
const nu = [1, 2, 3, 4, 5];

const re = nu.filter((num) => num %2 === 0)
console.log(re);

//array find: When it execute the condition choose the first element;
const numb = [5, 120, 8, 130, 44];

const resu = numb.find((num)=> num > 10);
console.log(resu);

//Array findindex: find out the index number;
const resul = numb.findIndex((num)=> num > 10);
console.log(resul);