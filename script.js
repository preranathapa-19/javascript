// Object

// let student = {
//     name:"samipab",     //key value structure
//     age : 21,
//     country : "nepal"
// }

//nesting and deep access
//  const user = {
//     name : "samip",
//     address:{
//         city:"pokhara",
//         pin : 8898,    //this all are nesting 1 keh bath ek
//         location:{
//             lat:23,
//             lng:77.2,
//         },
//     },
//  };

//  user.address.location.lng;  // this is is deep access
//   user.address.location.lat;


// can break this in variables
// let {lat, lng} = user.address.location;   //this sis object destructuring

   


//looping
// let obj={
//     name: "samip",
//     age : 22,
//     email: "sami@gmail.com",
// };

// for (let key in obj) {
//     console.log(key);   // we get the key of the object
// }

// for (let key in obj) {
//     console.log(obj[key]);   //it will give the value of the key
// }


// for (let key in obj) {
//     console.log(key, obj[key]);   //it will give the value of the key and the value both
// }

// let obj ={
//     name: "samip",
//     age : 22,
//     email: "sami@gmail.com",
// };


// Object.keys(obj);  = it keeps the object key into the array
// Object.entries(obj);  = it makes the array of array



// let obj ={
//     name: "samip",
//     age : 22,
//     email: "sami@gmail.com",
// };

// let obj2 = {...obj};   == spread 

// let obj2 = Object.assign({}, obj);  =Object.assign 
// let obj2 = Object.assign({price: Infinity}, obj); 



//deep clone
// let obj ={
//     name: "samip",
//     age : 22,
//     email: "sami@gmail.com",
//     address:{
//         city:"pokhara"
//     }
// };

// let obj2 = JSON.parse(JSON.stringify(obj));

// obj?.address?.city  =this will not give error if the value is there than 
// it provide the value then no error or give undefined
// this is optional chaining


//computer properties
// let role="admin";

// let obj ={
//     name: "samip",
//     age : 22,
//     email: "sami@gmail.com",
//     address:{
//         city:"pokhara"
//     },
//     [role]:"harsh",
// };



//questions
//create an object for a student with name, age, and isenrolles.

// let student={
//     name: "samipab",
//     age : 21,
//     isenrolled: true,
// };

//can an object key be a number or boolean? try this
//  const obj ={
//     true: "yes",
//     42: "answer"
//  };
//  console.log(obj[true]);
//  console.log(obj[42]);

//access the value of firstname from the object

// const user = {
//     "first-name": "samipap",
// };
// user["first-name"]


//dynamic key let key = :age, how will you access user [key]?

// let key ="age";
// const user ={
//    age:20,
// };

//from the object below, print the lalitude;
const locations ={
    city: "bhopal",
    coordinates:{
        lat: 23.4,
        lng : 77.8
    }
};