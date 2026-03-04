//practice question from the array and the object

// Create an array of 5 numbers. Print the sum of all numbers

// const numbers =[23,44,52,43,22];
// let sum = 0;
// for(let number of numbers){
//     sum +=number;
// }
// console.log(sum);


//create an object

// const student ={
//     name:"samipab",
//     roll: 1,
//     marks: 44

// };
// console.log(student.marks);

//create an array of students

// const students=[
//  {name: "samipab", marks: 80},
//  {name: "peru", marks: 60},
//  {name: "prerana", marks: 90}
// ];

// for(let student of students){
// if(student.marks >70){
//     console.log(student.name);
// }
// }

// Find the highest marks from the above array.
// const students=[
//  {name: "samipab", marks: 80},
//  {name: "peru", marks: 60},
//  {name: "prerana", marks: 90}
// ];

// let highest= students[0].marks;

// for(let i= 0; i<students.length; i++){
//     if(students[i].marks>highest){
//         highest = students[i].marks;
//     }
// }

// console.log(highest);


// const students=[
//  {name: "samipab", marks: 80},
//  {name: "peru", marks: 60},
//  {name: "prerana", marks: 90}
// ];

// let highest = 0;

// for(let high of students){
//     if(high.marks>highest){
//        highest = high.marks;
//     }
// }
// console.log("highest marks:", highest);



// const cart=[
//  {item: "Shoes", price: 2000},
//  {item: "Bag", price: 1500},
//  {item: "Watch", price: 3000}
// ];

// let sum = 0;

// for (let item of cart){
//     sum+=cart.price;
// }
// console.log(sum);

// Count how many products cost more than 2000.
// const cart = [
//     {item: "Shoes", price: 2000},
//     {item: "Bag", price: 1500},
//     {item: "Watch", price: 3000}
// ];
// let count = 0;

//  for(let product of cart){
//     if(product.price>2000){
//         count++;
//     }
//  }
//  console.log(count);


// Find Average Marks
// const students = [
//   {name: "Asha", marks: 80},
//   {name: "Rohan", marks: 70},
//   {name: "Mina", marks: 90}
// ];

// let total = 0;

// for(let student of students){
//     total+=student.marks;

// }

// let average = total / students.length;

// console.log("Average MArks:", average);


// Find Average Marks  passing marks = 75
// const students = [
//   {name: "Asha", marks: 80},
//   {name: "Rohan", marks: 70},
//   {name: "Mina", marks: 90}
// ];
// let count = 0;

// for (let student of students){
//     if(student.marks>75);
//     count++;
// }
// console.log(count);


// 🟢 QUESTION 3 – Find Cheapest Product
// const products = [
//   {item: "Shoes", price: 2000},
//   {item: "Bag", price: 1500},
//   {item: "Watch", price: 3000}
// ];

// let cheapest =products[0];

// for (let product of products){
//     if(product.price<cheapest.price){
//         cheapest=product;
//     }
// }

// console.log("Cheapest price:", cheapest.item);

//price range between 1500 n 2500
const products = [
  {item: "Shoes", price: 2000},
  {item: "Bag", price: 1500},
  {item: "Watch", price: 3000}
];

let cheapest =products[0];

for (let product of products){
 
   if(product.price>1500 && product.price<2500){
console.log(product.item);

   }

}