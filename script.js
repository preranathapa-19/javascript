// Bank Account System
// This project simulates a simple bank account using only basic
//  JavaScript (arrays, loops, conditionals, and variables)

// Positive = deposit 
// Negative = withdrawal

let transactions = [5000, -2000, 3000, -1000, -500, 2000];

// 1. Find:
// Total balance

let total = 0;

for(let tran of transactions){
    total+=tran;
    // transactions= total;
}

console.log("Total balance:", total);

// Total deposit amount

let deposit = 0;

for(let tran of transactions){
    if(tran>0){
        deposit += tran;
    }
}

console.log("Total Deposit number:", deposit);

// Total withdrawal amount

let withdrawal = 0;

for(let trans of transactions){
    if(trans<0){
        withdrawal +=trans;

    }
}
console.log("Total withdrawal amount", withdrawal);

// 2. Count:
// Number of deposits
// Number of withdrawals


let depositCount = 0;
let withdrawalCount = 0;

for(let trans of transactions){
    if(trans>0){
        depositCount++;
    }else if (trans<0){
        withdrawalCount++;
    }
}
console.log("Total number of deposits:", depositCount);
console.log("Total number of withdrawal:", withdrawalCount);

// 3. Advanced Logic:
// Find largest deposit
// Find largest withdrawal (smallest negative)

let largestdeposit = 0;
let largestwithdrawal = 0;

for(let trans of transactions){
    if(trans>0 && trans> largestdeposit){
        largestdeposit = trans;
    }

    if(trans < 0 && (largestwithdrawal === 0 || trans> largestwithdrawal)){
        largestwithdrawal = trans;
    }
}

console.log("largest  withdrawal:", largestdeposit);
console.log("Largest withdrawal (closest to 0):", largestwithdrawal);


// 4. Bonus Real-Life Feature:
// 👉 Check:
// If balance < 0 → print "Account Overdraft ⚠️"
// Else → print "Account Safe ✅"


// let balance = 0;

// for(let trans of transactions){
//     // balance += trans;
// }
//     if(balance<0){
//         console.log("Account overdraft");
//     } else {
//         console.log("Account Safe");
//     }
// // console.log("Balance:", balance);


// Add:

// Find average transaction

let balance = 0;
let count = 0;

for(let trans of transactions){
    balance += trans;
    count++;
}

let average = balance/count;

console.log("Average Transaction:", average);


// Print transactions above 2000

let above = 0;

for(let trans of transactions){
    if(trans>2000){
        console.log("Transaction above 2000:", trans);
    }
}

