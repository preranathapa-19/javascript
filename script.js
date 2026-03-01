// Return "Adult" or "Minor"
// function checkage(age){
//     if (age>=18){
//         return"Adult";
//     } else{
//         return "Minor";
//     }
// }
// console.log(checkage(32));
// console.log(checkage(12));
// console.log(checkage(52));
// console.log(checkage(2));

// Return first character of string
// function getfirstchar(str){
//     return str[0];
// }
// console.log(getfirstchar("samipabRokaMagar"));
// console.log(getfirstchar("RokaMagar"));
// console.log(getfirstchar("Magar"));
// console.log(getfirstchar("okaMagar"));


// Return last character of string.
// function getlastchar(str){
//     return str[str.length -1];
// }

// console.log(getlastchar("Po"));
// console.log(getlastchar("ergdk"));
// console.log(getlastchar("okh"));
// console.log(getlastchar("Pokhar"));

// Return square of number
// function square(num){
//     return num * num;
// }
// console.log(square(5));
// console.log(square(2));
// console.log(square(6));
// console.log(square(9));

// Return true if first number is greater

// function greater(a,b){
//     return a>b;
// }
// console.log(greater(23,45));
// console.log(greater(23,15));
// console.log(greater(23,25));
// console.log(greater(23,13));
;
// Create a function isDivisibleBy5 that:
// Returns true if number is divisible by 
// Otherwise returns false

// function divisible(num){
//     return num % 5 === 0;
        
//     }
// console.log(divisible(43));
// console.log(divisible(75));
// console.log(divisible(45));

// Question:
// Create a function convertToSeconds that converts minutes to seconds.

// Example:
// convertToSeconds(5) → 300

// function convertToSeconds(minutes){
//     return minutes * 60;
// }

// console.log(convertToSeconds(4));
// console.log(convertToSeconds(2));

// Create a function isEmptyString that:
// // Returns true if string is empty ("")
// // Otherwise returns false

// function isEmptyString(str){
//     return str ==="";
// }
// console.log(isEmptyString(""));
// console.log(isEmptyString("samipab are you seeing this who is this"));



// Create a function getMiddleChar that returns the middle character
// function getMiddleChar(str){
//     let middleIndex = Math.floor(str.length / 2);
//     return str[middleIndex];
// }
// console.log(getMiddleChar("samipab"));
// console.log(getMiddleChar("samip"));
// console.log(getMiddleChar("Nepal"));

// Create a function calculateSI that calculates simple interest.

// function calculateSI(principle, Rate , Time){
//     return (principle * Rate * Time)/100;
// }

// console.log(calculateSI(3400,5,6));


// Whenever we need to repeat some logic many times inside a reusable block
// we use the loop and the function


// function calculateTotal(prices){
//     let total = 0;

// for (let i=0; i<prices.length; i++){
//     total +=prices[i];
// }
// return total;
// }

// let cart =[233,300,200];
// console.log(calculateTotal(cart));



// Create function getAverage that:
// Takes array of marks
// Returns average

// function getAverage(marks){
//     let sum =0;

//     for(let i =0; i<marks.length; i++){
//         sum +=marks[i];
//     }
//     return sum;
// }
// let score =[90,80,60];
// console.log(getAverage(score));


// Create function countEvenNumbers:



// function countEvenNumbers(numbers) {
//   let count = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countEvenNumbers([1,2,3,4,5,6])); // 3

// Create function to count odd numbers in array.

// function oddnumber(array){
//     let score = 0;
//     for(let i=0; i<array.length; i++){
//         if(array[i]%2 !==1){
//             score++;
//         }
//     }
//     return score;
// }

// console.log(oddnumber([23,21,4,45,6,1,65,33,22,44,522]));