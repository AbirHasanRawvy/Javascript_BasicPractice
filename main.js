
//Run code
console.log("Hello everyone!");

// Variable 
var name;

name = "john";

console.log(name);

//Override
name = "robin";

console.log(name);

// Constent 
 const age = 20;

 console.log(age);

//  Data type 
console.log(typeof (name)); 

console.log(typeof (age)); 

// Boolean 
const isMarried = false;

console.log(typeof(isMarried));

// NonPrimitive
// Object 
const person= {
    name: "Abir Hasan",
    age: 14,
    isMarried: false,
    father: {

        name: "Kamrul Hasan",
        age: 58,
        isMarried: true,

    }
}
console.log(person);

//Array
const myFriends = ["jhone","tusher","shajid","shimul"];

console.log(myFriends);

// another example
const mine = ["Abir Hasan", "AIUB", 25, person];//inherit;

console.log(mine);

//here is under the object array;
const friend = {
    schoolFriend:"Jhone , Tusher , Shimul , Aftab , Shajid",
    collegeFriend: "Same of school friend",
    uniFriend: "Ratul, Atik, Faisal, Fahmid, Tahfim",
    afterUni: [mine],

};

console.log(friend);

// print index Number
console.log(mine[2]);
console.log(friend.uniFriend);

// The object is non-premitive because of they use reffarence

// Same topic example;

const upcomingCourses = [
    {
        name: "MERN Courses 1",
        image: "....",
        batch: 16,
        leftSeatCount: 16,
    },
    {
        name: "MERN Courses 2",
        image: "....",
        batch: 17,
        leftSeatCount: 15,
    },
    {
        name: "MERN Courses 3",
        image: "....",
        batch: 18,
        leftSeatCount: 14,
    },
    {
        name: "MERN Courses 4",
        image: "....",
        batch: 19,
        leftSeatCount: 13,
    },
    {
        name: "MERN Courses 5",
        image: "....",
        batch: 20,
        leftSeatCount: 12,
    },
    {
        name: "MERN Courses 9",
        image: "....",
        batch: 20,
        leftSeatCount: 12,
    },

];
console.log(upcomingCourses);
// ======== Loop for the Array=============
// for (l=0; l<upcomingCourses.length; l++) {
//     console.log(upcomingCourses[l].name)
// }

// for (course of upcomingCourses) {
//     console.log(course.name);
// }

const demooCourse = {
    name: "MERN Courses 9",
    image: "....",
    batch: 20,
    leftSeatCount: 12,
};

for (property in demoCourse) {
    console.log(property + ": "+ demoCourse[property]);
};


// Conditional Operator

const ostadDashboardHasUpdate = true;
const hasStudentJoined = true;
const hasInstructor1Join = true;

if (ostadDashboardHasUpdate && hasStudentJoined && hasInstructor1Join) {
    console.log("Class Started");
}
else if (!ostadDashboardHasUpdate){
    console.log("Ostad did not update dashboard!!")
}
else if (!hasStudentJoined){
    console.log("Student did not join!!")
} else {
    console.log("Instructor did not join!!")
}

// Grading Sheet
const studentMark = 80;

switch (studentMark){
    case 80:
        console.log("A+");
        break;
    
    case 70:
        console.log("A");
        break;
       
    case 60:
        console.log("A-");
        break;
        
    default:
        console.log("Not found");
};

//check false or true

var year = 0;

if (hasStudentJoined) {
    year = 12;
}
else {
    year = 20;
}
console.log(year);

//The upper problem have a short solution

var y = hasStudentJoined ? 12 : 20;

console.log(y);

// Loop
// For Loop 
var i;
for (i = 0; i<9; i++) {
    console.log(i);
}

// While Loop
var j=1;
while (j <= 10) {
    console.log(j);

    j = j + 1;
};

//Do While Loop

var k=1;

do {
    console.log(k);
    k = k + 1;
} while(k <= 10);