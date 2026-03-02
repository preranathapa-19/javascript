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


