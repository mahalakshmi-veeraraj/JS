// Every Javascript function is actually a Function Object.
// Functions in Javascript can have properties and methods just like any other object.
// Function implementation way 1.
// FUNCTION - It is an independent thing.
// METHOD - If a function is defined inside of an object then that is termed as METHOD.
function func() {
    console.log("I am a function");
}
if (typeof func === 'object') {
    console.log("func is an object");
}
else {
    console.log("func is not an object");
}
if (func instanceof Object) {
    console.log("func is an instance of object");
}
else {
    console.log("func is not an instance of object");
}
// Function implementation way 2.
var func = function() {
    var a = 10; // This variable is defined inside the Local Scope.
    console.log("I am a function expression");
}
// Arrow Function implementation.
var func = () => console.log("I am a function expression implemented using Arrow Function");
console.log(func);
console.log(typeof func); // function.