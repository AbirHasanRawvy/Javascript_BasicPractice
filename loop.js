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