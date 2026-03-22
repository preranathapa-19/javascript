// 1. Student Result System
//  Concept: Arrays + Objects + Loop + Condition
//  Create a system to:
// Store students (name + marks)
// You need to:
// Print topper name
// Count how many passed (>=50)
// Count how many failed
// Find average marks

let students =[
  {name: "Ram", marks: 80},
  {name: "Simip", marks: 45},
  {name: "Harn", marks: 20},
  {name: "Gilli", marks: 90},
  {name: "Gitam", marks: 30},
  {name: "peru", marks: 92},
  {name: "samipab", marks: 99}
];

// Find:
// topper 🏆
// average marks 📊
// number of passed/failed students

// let topper = students[0];

// for(let top of students){
//     if(top.marks>topper.marks){
//         topper = top;
//     }
// }
//     console.log("topper:", topper.name);


let total = 0;

for(let avg of students){
  total += avg.marks;
}

let average = total / students.length;
console.log("Average Marks:", average);

let passCount = 0;
let failCount =0;

for(let student of students){
    if(student.marks>=40){
        console.log(student.name, "pass");
        passCount++;

        }else{
            console.log(student.name, "fail")
                failCount++;
            
        }
}


//print the topper name

let topper = students[0];

for(let student of students){
    if(student.marks>topper.marks){
        topper = student;
    }
}
console.log("Topper is:", topper.name);


// Count how many passed (>=50)

let passCounts = 0;

for (let student of students){
    if(student.marks>=50){
        console.log("pass");
        passCounts++;
    }
}

console.log("Total passes:", passCounts);

// Count how many fail (<50)

let failcounts = 0;

for(let student of students){
    if(student.marks<50){
        console.log(student.name, "fail");
        failcounts++;
    }
}

console.log("Total fail:", failcounts);