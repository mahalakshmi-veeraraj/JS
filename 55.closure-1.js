// What is Closure?
// Function along with its lexical scope forms a closure.
// What is Lexical Scope?
// The scope of the variable or object is arrived through its lexical environment.
// What is Lexical Environment?
// Lexical environment is equal to its own local memory plus the lexical environment of its parent.
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