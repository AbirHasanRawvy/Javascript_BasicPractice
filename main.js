
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
        name: "MERN Courses",
        image: "....",
        batch: 17,
        leftSeatCount: 16,
    },
    {
        name: "MERN Courses",
        image: "....",
        batch: 17,
        leftSeatCount: 16,
    },
    {
        name: "MERN Courses",
        image: "....",
        batch: 17,
        leftSeatCount: 16,
    },

];
console.log(upcomingCourses);

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
}