// Hoisting.
// Hoisting refers to the process where by the interpreter appears to move the declaration of variables, functions, classes,
// and imports to the top of their scope prior to the execution of the code.
createCourse('lld');
createCourse('dsa'); 

console.log(a); // undefined.
var a = 25;
console.log(a); // 25.

console.log(b); // Reference Error: Cannot access 'b' before initialization. Here 'b' is available but it exists in a temporal dead zone area.
// When we access the variable which is in the temporal dead zone then we will get the above reference error.
let b = 10; // Variable b came out from the temporal dead zone after the initialization execution.
console.log(b);

function createCourse(coursename) {
    console.log("Creating "+coursename);
}

// Beauty of Hoisting:
// I can able to access the variable even before the declaration. 
// I can able to call the function even before the function declaration and definition. 

// Temporal Dead Zone - TDZ.
// A variable declared with let, const, class is said to be in a temporal dead zone (TDZ) from the start of the block until the code
// execution reaches the place where the variable is declared & initialized.