var a = 10;
function foo() {
    var b = 20;
    console.log(a);
    console.log(b);
}
foo();
console.log(b); // Reference Error: B is not defined.
console.log(a);


// Const and let are more strict than var they don't let you access them before initialization.
// Use const - if you want the variable value should not change.
// Use let - if value can be dynamic.
// Do not use var.
console.log(x);
let x = 100; // Reference Error: Cannot access 'x' before inititalization.

console.log(y);
const y = 102; // Reference Error: Cannot access 'y' before inititalization.

function hello() {
    let h = 10;
    console.log(h);
}
hello();

// a is resided under Global. 
// x and y are resided under Script.
// All 'a', 'x', 'y' are hoisted during the memory phase but the value assignment is different.
// 'a' is assigned as undefined and 'x', 'y' are assigned as <value unavailable>

// After executing the hello function Local function execution context will be created.
// 'h' variable will be under Local.