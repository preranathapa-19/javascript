// data types practice

// let a = 10;
// let b = "10";
// let c = true;
// let d = null;
// let e;
// let f = undefined;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);

// let x = 5;
// let y = "5";

// console.log(x + y);  due to concatination in js but i n term of substract it does not work
// console.log(x - y);


// console.log(Boolean(0)); false
// console.log(Boolean(1)); true
// console.log(Boolean("")); false
// console.log(Boolean("Hello"));  true

// console.log(typeof null)  

// console.log("5" + 2);
// console.log("5" - 2);
// console.log(true + 1);
// console.log(false + 1);



//loop question practice

// Use a for loop to print numbers from 1 to 10.
// for(let i = 1; i<=10; i++){
//     console.log(i);
// }

// Use a for loop to print numbers from 10 down to 1.
// for( let i=10; i>=1; i--){
//     console.log(i);
// }

// Use a for loop and if statement to print only even numbers.

// for (let i = 1; i<=20; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

// Use a for loop to calculate the sum of numbers from 1 to 10.

// let sum=0;
// for( let i=1; i<=10; i++){
//     if(sum = sum+ i){
//         console.log(sum);
//     }
// }


// Use a for loop to calculate factorial of 5.
// let num = 5;
// let fact = 1;

// for(let i=1; i<=num; i++){
//     fact*=i;
// }
//     console.log(fact);



// this is for multiplication
// for(let i=1; i<=10; i++){
//         console.log(5*i)
    
// }

// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }

//  Question 7 – Multiplication Table (num = 7)

// for(let i=1; i<=10; i++){
//     console.log(7*i)
// }

// for(let i=1; i<=10; i++){
//     console.log(`7*${i} = ${7*i}`);
// }

// while loop
 
// let i= 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }


// let sum = 0;

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 !== 0) { // odd numbers
//         sum = sum + i;
//     }
// }

// console.log(sum);


// loop questione

// 1️⃣ Print numbers from 1 to 20

// for (let i=1; i<=20; i++){
//     console.log(i);
// }

// 2️⃣ Print numbers from 20 to 1 (reverse)
// for(let i=20; i>=1;i--){
//     console.log(i);
// }

// 3️⃣ Print only even numbers from 1 to 50

// for(let i=1; i<=50; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

// 4️⃣ Print only odd numbers from 1 to 50

// for(let i=1; i<=50; i++){
//     if(i%2 === 1){
//         console.log(i);
//     }
// }

// 5️⃣ Print the table of 7

// for(let i=1; i<=10; i++){
//     console.log(`7*${1} = ${7*i}`)
// }

// 6️⃣ Find the sum of numbers from 1 to 100

// let sum= 0;
// for(let i=1; i<=100; i++){
//     if(sum = sum + i){

// }
// }
//         console.log(sum);


    
// 7️⃣ Find the factorial of a number (user gives number)

// let num = 5;
// let factorial = 1;
// for(let i=1; i<=num; i++){
//     factorial= factorial*i;
// }
// console.log(factorial);


// for (let num = 2; num <= 20; num++) {

//   let isPrime = true;

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(num);
//   }


// for (let marks = 30; marks <= 100; marks += 10) {

//   if (marks >= 90) {
//     console.log(marks + " → Excellent");
//   } else if (marks >= 75) {
//     console.log(marks + " → Good");
//   } else if (marks >= 50) {
//     console.log(marks + " → Average");
//   } else {
//     console.log(marks + " → Fail");
//   }

// }

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }

// console.log(sum);