//print all the element

// let numbers = [10,20,30,40,50];
// for(let num of numbers){
//     console.log(num);


// let numbers = [10,20,30,40,50];

// let sum = 0;

// for(let number of numbers){
//     sum+=number;
// }
// console.log(sum);


// 👉 Print the array in reverse order.

// let arr = [1,2,3,4,5];

// let reversed= arr.reverse();

// console.log(reversed);


// Second Largest Number

// let arr= [10,20,30,40,50];

// arr.sort((a,b) => b-a);

// console.log("second largest:", arr[0]);


// 👉 Print the smallest number.

// let nums = [45,12,78,3,25];

// let smallest = nums[0];

// for(let num of nums){
//     if(num<smallest){
//         smallest= num;
//     }
// }
// console.log("samllest number:", smallest);


// let nums= [23,45,64,24,56,61];

// let highest = nums[0];

// for(let num of nums){
//     if(num > highest){
//         highest= num;
//     }
// }

// console.log("highest number:", highest);

// let book = {
// title:"JS Basics",
// author:"John",
// price:500
// };

// for(let key in book){
// console.log(key);
// }

// for(let key in book){
// console.log(key + book[key]);
// }

// let nums = [1,2,3,4];

// let double = 0;
// for(let num of nums){
//   console.log(num*2);

// }


// let phone = {
// brand:"Samsung",
// model:"A52",
// price:30000
// };

// for(let key in phone)
// console.log(phone[key]);

// let numbers = [1,2,3,4,5];

// for(let number of numbers){
//     console.log(number * number);
// }

// let arr = [1,2,3,4,5];

// console.log(arr.length);

// let arr = [10, 30, 20, 40, 15,44,67];
 
// let greater = 25;

// for(let arrs of arr){
//     if(arrs>greater){
// console.log(arrs);

//     }
// }


// let student = {
//     name:"Hari",
//      age:22
//     };
// student.city = "pokhara";
// student.roll= 34;
// student.marks = 80;
// console.log(student);


// let students = [
// {name:"Ram", marks:80},
// {name:"Sita", marks:95},
// {name:"Hari", marks:70}
// ];

// let topper = students[0];

// for(let student of students){
//     if(student.marks<topper.marks){
//         topper = student;

//     }
// }
//     console.log(topper.name, topper.marks);


let students = [
{name:"Ram", marks:80},
{name:"Sita", marks:95},
{name:"Hari", marks:70}
];

for(let key in students){
    console.log(students[key].name, students[key].marks);

}

