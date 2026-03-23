// Number Analyzer
// Create functions:
let numbers = [2, -5, 10, 0, -3, 8];

// checkEvenOdd(num)

for(let number of numbers){
    if(number %2 === 0 ){
        console.log("Even:",number);
    }else{
        console.log("Odd Number:", number);

    }
}

// countPositiveNegative(arr)
 
let positive = 0;
let negative = 0;

for(let num of numbers){
    if(num >0){
        positive++;
    }else if(num<0){
        negative++;
    }
    }

console.log("Positive number:", positive);
console.log("Negative number:", negative);



// findLargest(arr)
 
let largest = numbers[0];

for(let num of numbers){
    if(num>largest){
        largest = num;
    }
}
console.log("Largest number:", largest);


// Find smallest number

let smallest = numbers[0];

for(let num of numbers){
    if(num<smallest){
        smallest= num;
    }
}
console.log("Smallest number:", smallest);

// Count how many even numbers

for(let num of numbers){
    if(num % 2 === 0){
        console.log("Even:", num);
    }

}
console.log("Total Even number:", numbers);

// Find sum of all numbers

let sum = 0;

for(let num of numbers){
    sum+=num;
}
console.log("Sum:", sum);

// Print numbers greater than 5

for(let num of numbers){
    if(num>5){
        console.log("number greater than 5:", num);
    }
}

// Count how many numbers are divisible by 2 and 5

let count = 0;

for(let num of numbers){
    if(num%2===0 && num%5===0){
        console.log("Numbers Divisible by 2 and 5:", num);
        count++;
    }
}
console.log("Count:", count);