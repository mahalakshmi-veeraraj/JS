var b = 10;
function a() {
    c();
    function c() {
        console.log(b); // 10. Scope of 'b' here is lexical.
    }
}
a();
console.log(b);

// What is lexical scope?
// If a variable is accessed through lexical environment references then the scope of that particular variable is lexical.
// What is lexical environment?
// Lexical Environment = Local Memory + Lexical Environment of parent.
// Global Function Lexical Environment points to null.
// Lexical Environment of function 'a' is = Local Memory + Lexical Environment of Global Function.
// Lexical Environment of function 'c' is = Local Memory + Lexical Environment of function 'a'.
