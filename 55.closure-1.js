// What is Closure?
// Function along with its lexical scope forms a closure.
// What is Lexical Scope?
// The scope of the variable or object is arrived through its lexical environment.
// What is Lexical Environment?
// Lexical environment is equal to its own local memory plus the lexical environment of its parent.

// What is Closure?
// Function along with the lexical scope references.

// Advantages of Closure?
// 1. Helps to achive data hiding / data encapsulation.
// 2. Variables in closure can help you maintain a state that you can use later.


// Disadvantages of Closure?
// 1. The variables declared inside a closure are not garbage collected.
// 2. Too many closures can slow down your application. 

var num = 10;
function b() {
    console.log(num);
}
function fn() {
    var num = 20;
    b(); // Function along with its lexical scope forms a closure.
    console.log(num);
}
fn();





// Output:
// 10
// 20