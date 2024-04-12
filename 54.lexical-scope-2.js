// Global function has the access to its own memory plus the 
// lexical environment of its parent which is here null.
function outerFunction() {
    // Outer function has the access to its own memory plus the 
    // lexical environment of its parent (global function).
    const outerVar = "I am from the outer function";
    function innerFunction() { 
        // Inner function has the access to its own memory plus the 
        // lexical environment of its parent (outerfunction).
        const innerVar = "I am from the inner function";
        console.log(outerVar);
        // Here the scope of outerVar is lexical because this variable is referenced through 
        // the lexical environment of the current function parent (outerFunction).
    }
    innerFunction();
}
outerFunction();