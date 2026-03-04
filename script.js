// 1️ Print all student names
// 2️ Print students who passed (>= 70)
// 3️ Find highest marks
// 4️ Find average marks


const students = [

  {name: "Asha", marks: 80},
  {name: "Rohan", marks: 65},
  {name: "Mina", marks: 90},
  {name: "Sita", marks: 55}
];

// 1
// console.log(" All students");
// for(let student of students){
//     concole.log(student.name);
// }

// 2
// for(let student of students){
//     if(student.marks>=70){
//         console.log(student.name);
//     }
// }

//3
// let highest = students[0].marks;
// for(let student of students){
//     if(student.marks>highest){
//         highest = student.marks;
//     }
// }
// console.log("highest marks:", highest);

//4
// let total = 0;

// for(let student of students){
//     total+= student.marks;
// }

// let average = total / students.length;

// console.log("Average Marks:", average);



// Count how many students failed (< 70)

let failcount =0;
for(let student of students){
    if(student.marks<70){
    failcount++;
}
}
console.log("Student Fail:", failcount);