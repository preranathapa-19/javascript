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
// const locations ={
//     city: "bhopal",
//     coordinates:{
//         lat: 23.4,
//         lng : 77.8
//     }
// };


// what will happen if  coordinates is missing?
//  how can you prevent errors? 

// const locations ={
//     city: "bhopal",
//     coordinates:{
//         lat: 23.4,
//         lng : 77.8
//     }
// };
// locations?.coordinates?.lat


//destructure the city and lat from the loction object above.

// const locations ={
//     city: "bhopal",
//     coordinates:{
//         lat: 23.4,
//         lng : 77.8
//     }
// };
// let {city}=locations;
// let {lat}= locations.coordinates;


// const user ={
//     "first-name": "samipab",
// }

// let {"first-name": firstname } =user;


//use fot-in to log all keys in this object:

// const course = {
//     title : "javascript",
//     duration: "4 weeks",
// };

// for(let key in course){
//     console.log(key);
// }

// use object.entries() to print all key-value pairs as:
// title: javascript
// duration: 4 weeks

// const course ={              ===very hard to understood
//     title: "javascript",
//     duration:"4 weeks"
// };
// Object.entries(course).forEach(function(val){
//     console.log(val[0]+":"+val[1]);
// });



//i used the spread operators
// const original ={a:1, b:2};
// const org2={...original};


// const obj1 ={info: {score:80}};
// const clone ={...obj1};
// clone.info.score =100;
// console.log(obj1.info.score);   //what is problem in this

//deep clone the obj1 safely.
// const obj1 ={info: {score:80}};
// let newobj= JSON.parse(JSON.stringify(obj1));
// newobj.info.score =100;

//  Rewrite this safely using optional chaining

// const person = {};
// console.log(person?.profile?.name);


//use a variable to dynamically assign a property
// const key ="role";
// let obj = {
//     name: "samipab",
//     [key]: "admin",
// };


//finally 8hrs about the js jaya harsh bhaiya and mine samipab bhaiya mero fav bhaiya