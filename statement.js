let N = 15;

//If statement;
if(N>10){
    console.log("True");
}
else{
    console.log("False");
}

//else if;
// Result card;
let mark = 80;

if(mark>49 && mark<60){
    console.log("D");
}
else if(mark>-1 && mark<50){
    console.log("Fail");
}
else if(mark>59 && mark<64){
    console.log("D+");
}
else if(mark>64 && mark<70){
    console.log("C");
}
else if(mark>69 && mark<74){
    console.log("C+");
}
else if(mark>74 && mark<79){
    console.log("B");
}
else if(mark>79 && mark<84){
    console.log("B+");
}
else if(mark>84 && mark<89){
    console.log("D+");
}
else if(mark>89 && mark<100){
    console.log("A+");
}
else{
    console.log("Undefined Value");
}