//practice question
// Create an array of fruits and print each fruit using a loop.

// const fruis = ["apple","banana","kiwi","grapes"];
// console.log(fruis);


//sum
// const numbers = [10, 20, 30, 40];
// let sum = 0;
// for(let number of numbers){
//     sum+=number;
// }

// console.log("total:", sum);

// Find the largest number in the array.
// const nums = [5, 12, 8, 20, 3];

// let largest=nums[0];

// for(let num of nums){
//     if(num>largest){
//         largest= num;
//     }
// }
// console.log("largest number:", largest)

// Count how many even numbers are in the array.
const numbers = [1,2,3,4,5,6,7,8];

let Count = 0;
for(let num of numbers){
    if(num % 2 === 0){
        Count++;
    }
}
console.log("even number:", Count);