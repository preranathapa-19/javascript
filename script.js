// Shopping Cart Calculator
// Concept: Objects + Loop + Total Calculation
// Create a cart system
// ;
// 👉 You need to:
// Calculate total price 💰
// Find most expensive item 🏷️
// Print items above 2000

let cart = [
  {item: "Shoes", price: 2000, quantity: 2},
  {item: "Bag", price: 1500, quantity: 1},
  {item: "Watch", price: 3000, quantity: 1}
];


// Calculate total price 💰
let total = 0;
for (let carts of cart){
    total+= carts.price * carts.quantity;
        total++;
    
}
console.log("Total price:", total);

// Find most expensive item 🏷️
let expensive = cart[0];

for(let carts of cart){
    if(carts.price= carts.quantity > expensive.price* expensive.quantity){
        expensive= carts;
    }
}

console.log("Most Expensive:", expensive);


