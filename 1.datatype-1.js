// Primitive or Value Types in Javascript:
var a = "hello"; // string
a = 10; // number
var b = 'byte'; // string
var myName = 'maha'; // string
var age = 20; // number
var str = `I am ${myName} and I am ${age} years old`; // string
var isMale = false; // boolean
var y = null; // object
var z; // undefined

console.log(typeof a); // number
console.log(typeof b); // string
console.log(typeof myName); // string
console.log(typeof age); // number
console.log(typeof str); // string
console.log(typeof isMale); // boolean
console.log(typeof y); // object
console.log(typeof z); // undefined

// All the above variables are defined under Global Scope.

// What is Value Types ?
// If you copy the values of a primitive type variable into another variable only the copy of the value will be copied and not the memory reference.

let num1 = 10;
let num2 = a; // value alone copied.
num1 = 12;
console.log(num1);
console.log(num2);