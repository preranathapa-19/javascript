//array methods

// let array = [2,34,5,6,77,2];
// array.push(23);  add the new value in that array 


// modify
// let arr =[1,2,3,4,5,6];
// arr.pop(5);
// arr.shift();
// arr.unshift(1);
// arr.splice(1,3);
// arr.reverse();
// let newarr = arr.slice(0,3);



// let arr = [2,45,67,22,45,56];
// let sr = arr.sort(function (a,b){
//     return a - b;  //it reutrn the arr in the ascending order
// }
// )

// let arr = [2,45,67,22,45,56];
// let sr = arr.sort(function (a,b){
//     return b-a;  //it reutrn the arr in the desc order
// }
// )


//FOREACH
// let arr = [11,62,3,4,25];

// arr.forEach(function(val){
//     console.log(val + 5);

// })

// let arr = [11,62,3,4,25];

// arr.forEach(function(val){
//     console.log(val);

// })


//Map = when u want to make the new array with the basis of old array data
// = when u see the map make the blank array 

// let arr = [11,62,3,4,25];

// let newarr=arr.map(function(val){
// return 12;
// })

//   you have to return the map for the midfied value


// let arr = [11,62,3,4,25];

// let newarr = arr.map(function(val){
//     if (val >10) return val; // it will show the undefined
// });

//filter
// let arr= [1,2,3,4,5,6,7,8];

// let newarr =arr.filter(function (val){
// if (val > 4) return true;

// });

// let arr= [1,2,3,4,5,6,7,8];

// let newarr =arr.filter(function (val){
// if (val > 6) return true;git 

// });


//reduce  = reduces the array to a single value.

// let arr= [1,2,3,4,5,6,7];

// let ans = arr.reduce(function(accumulator, val) {
//     return accumulator + val;

// }, 0);


 
//find() = first match
// let arr =[1,2,3,4,5,6];

// let va = arr.find(function(val){
//     return val === 1;
// });


//some  = at least one true 
// let arr = [23,45,64,24,,22];

// let som = arr.some(function(val){
//     return val > 45;
// });



//every =   give in true or false
// let arr = [23,45,64,24,,22];

// let eve= arr.every(function (val){
//     return val>25;
// })

//destructuring and spread operator == spread to copy or add


// let arr= [1,2,3,4,5,6];
                    // output will be the a=1, b= 2
// let [a,b] = arr;


// spread operator
// let arr = [1,2,3,4,5,6];
// let arr2 = [...arr]

// practice question of array  

// create an array with 3 fruits and print the second one 
// let fruits = ["apple", "banana","orange", "kiwi"];  ==fruits[1]

// add the "mango at the end and "pinaapple" at the beginning of the aarray;
// let fruits = ["banana","orange", "kiwi"]
// fruits.unshift("pinaapple");
// fruits.push("Mango");


// replace banana with thr kiwi in the array above 

// let fruits = ["banana","orange", "apple"];
// fruits.shift();
// fruits.unshift("kiwi");


// whats the difference between the push and unshift
// push = add the value in the last
// unshift = add the value at first

// shift = remove first
// pop = remove last

// remove the last item
// let num = [1,2,3,4,5]
// num.pop();

// remove first
// let num = [1,2,3,4,5]
// num.shift();

//Insert red and blue at index 1 in this array
// let colors = ["Green", "Yellow"];
// colors.splice(1,0,"Red", "Blue");

//extract only the middle 3 elemnets from this array
//  let items =[1,2,3,4,5,6];
// let newarr=items.slice(1,4);
// console.log(newarr);


//  items.reverse();

// sort this array alphabetically and then reverse it 

// let names = ["zara", "peru", "samip", "mira"];
// names.sort().reverse();

// use .map() to square  eacch numbers 
// let arr =[1,2,3,4];
// let newarr = arr.map(function(val) {
//     return val * val;
// });

// use .filter() to keep numbers greater than 10.
// let arr = [5,12,67,30,6,2];
// let newarr= arr.filter(function(val){
//     return val>10;
// });

// anotheer way like fat arrow function 
// let arr = [12,24,3,68,9,2,1];
// let newarr = arr.filter((val) => {
//     return val>10;
// });

//use .reduce
// let arr = [10,20,30];
// let sum= arr.reduce(function(acc , val){
//     return acc+val;

// },0);

//use .find
// let arr= [12,15,3,5,8,20];
// let newarr= arr.find(function(val){
//     return val<10;
// })

// let arr= [12,15,3,5,8,20];
// let newarr= arr.find((val) =>{
//     return val<10;
// })

// use .some 
// let arr = [12,34,64,,11,24,25];
// let newarr= arr.some((val) =>{
//     return val<35;
// })

// .ever that all the numbers are even or not
// let num =[22,13,15,67,44,85];
// let newnum= num.every((val) =>{
//     return val %2 === 0;
// });

// Destructure this array to get firtname anad lastname 
// let fullname= ["samip", "roka"];
// let[firstname, lastname] =fullname;

//merge two array using the spread operators

// let peru =["preety", "lovely"];
// let samip =["cute", "loveable"];

// let togther =[...peru,...samip];

// let coun = ["nepal", "japan"];
// coun = ["india", ...coun];
// coun = [...coun,"Korea"];


//clone this arary
// let arr = [1,2,3];
// let arr2=[...arr];
