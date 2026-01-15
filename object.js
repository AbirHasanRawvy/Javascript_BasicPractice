//Object;
let s = {
    name: "Abir Hasan",
    Agee: 25,
    className:"Undergrade Student",
    roll: 5,

};

s.subject="CSE"//add one more element;

delete s.roll//delete roll element;

console.log(s);//access all the information;
console.log(s.name);//access only name,Its name is dot notation;


//Function and Object mixed which function name is method;
let s1 = {
    name: "Abir Hasan",
    Agee: 25,
    className:"Undergrade Student",
    roll: 5,
    great:function(){//here, great function is a method;
        console.log("hello");
    },

};
s1.great();
console.log(s1);
