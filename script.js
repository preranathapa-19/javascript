
// Print all numbers
//  let numbers = [10,20,30,40,50];
//  console.log(numbers);

// Find total sum
// let nums =[5,20,25,30];

// let sum =0;

// for(let num of nums){
//     sum+=num         

// }
// console.log("total sum:", sum);


// Count how many even numbers are in the array.
// let arr = [2,5,8,11,14];

// let count = 0;

// for (let ar of arr){
//     if(ar%2 ===0){
//         count++;

//     }
// }
// console.log("even numbers:", count);



// 👉 Print the largest number.
// let nums = [12,45,7,89,23];

// let largest = 0;

// for(let num of nums){
//     if(num >largest){
//         largest=num;
//     }
//     }

// console.log("largest number:,", largest);

//print numbers greater than 25
// let nums =[10,30,20,40,15];

// for(let num of nums){
//     if(num>25){
//         console.log("greater number than 25:", num);
//     }
// }

// let student = {
//     name: "samipab",
//     age: 21,
//     city: "Pokhara"
// };


// console.log(student.city);
// console.log(student.name);
// console.log(student.age);

// 👉 Change price to 2500 and print it.

// let product = {
//     name: "Watch",
//     price: 2000
// };
// product.price=2500
// console.log(product.price);


//  Print all keys and values using a loop.

// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2022
// };

// for(let key in car){
//     console.log(key,car[key]);
// }


// 👉 Print all student names.

// let students = [
//     {name: "Ram", marks: 80},
//     {name: "Sita", marks: 65},
//     {name: "Hari", marks: 90}
// ];

// console.log(students[1].name);   for one key value

// for(let student of students){
//     console.log(student.name);
// }

// for (let student of students){
//     console.log(student.marks);
// }


// 👉 Find the total price of all items.

let cart = [
    {item: "Shoes", price: 2000},
    {item: "Bag", price: 1500},
    {item: "Watch", price: 3000}
];

let total = 0;

for(let carts of cart){
    total+=carts.price


}
console.log("totalprice of all items:", total);
