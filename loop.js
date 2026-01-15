//Loop
//for loop: first condition then work;

for(let p=0; p<5; p++){

    console.log(p);

}
//same practice;
for(let q=0; q<11; q++){

    console.log(q+". Hello Bangladesh");

}

//for loop with break;
for(let r = 1; r<=10; r++){
    console.log(r);
    if(r===5){
        break;
    }//When r value will be 5 it will break;
};

//Continue 

// for(let r = 1; r<=10; r++){
//     console.log(r);
//     if(r===5){
//         Continue;
//     }//When r value will be 5 it will break;
//     if(r===10){
//         break;
//     };
// };


//While Loop;
let o = 1;

while(o <= 5){
    console.log("Number is",o);
    o++;
};

//Do While Loop: First work then condition;

do {
    console.log("The number is ", o);
    o++;
} while(o <= 5);

//For in Loop:When we access the value or property into the javascript we can use the for in loop;
let studentUni = {
    name: "Abir Hasan",
    age: 25,
    grade: 3.51,
}

for(let key in studentUni){
    //for access property;
    console.log(key);

    //for value access;
    console.log(studentUni[key]);
    console.log("000000000000000000000000");
    console.log(key + ":" + studentUni[key]);
}

//for of loop: which is use for array;
let fruits1 = ["Apple1", "Orrange1", "Banana1", "Graps1"];

for(const fruits2 of fruits1){
    console.log(fruits2);
}
console.log("==================================");
