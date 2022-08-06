//! Hosting and TDZ 

//?variables 
// console.log(me);
// // console.log(job);
// // console.log(year);


// var me = 'jons';
// // var job = 'teacher'
// // let job = 'teacher'
// const year = 1991
//  //?functions



//  console.log(addDecl(2,3));
//  console.log(addEXpr(2,3));
//  console.log(addArrow(2,3));

//  function addDecl(a,b){
//     return a+b ;
//  };

//  const addEXpr = function(a,b){
//     return a+b ;
//  };

//  const addArrow = (a,b) => a + b ;
 //!example 

//  console.log(undefined);

//  if(!num) deleteShopingCart();


// //  var num = 10 
// const num = 10;
//  function deleteShopingCart(){
//     console.log('All product deleted!');
//  }


// var x = 1 ;
// let  y = 2 ;
// const z = 3 ; 

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

//? THIS 

// console.log(this);

//Behind the Scenes 

// let age = 30 ;
// let oldAge = age; 
// age = 31 ;
// console.log(age);
// console.log(oldAge);


// const me = {
//     name: 'Jonas',
//     age: 30,

// };

// const friend = me ;
// friend.age = 27 ;
// console.log('Friend:', friend);
// console.log('Me', me);

//Primitive type 
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName , oldLastName);

//  Reference types
const jassica = {
    firstName: 'jessica',
    lastName: 'williams',
    age: 27,
};

const marriedJessica = jassica;

marriedJessica.lastName = 'Davis';

// console.log('Before marriage:', jassica);
// console.log('After marriage:', marriedJessica);

//Copying Objects 

const jassica2 = {
    firstName: 'jessica',
    lastName: 'williams',
    age: 27,
    family:['Alice','Bob'],
};
//!this a true way to call another object from another 
const jassicaCopy = Object.assign({}, jassica2);
jassicaCopy.lastName = 'Davis';
console.log("B", jassica2);
console.log("A", jassicaCopy);

jassicaCopy.family.push('Mary');
jassicaCopy.family.push('John');

console.log("B", jassica2);
console.log("A", jassicaCopy);

