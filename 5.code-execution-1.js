// Every time when you run a javascript code, there is an execution context getting created. 
// There are two types of execution context.
// 1. Global Execution Context (GEC). 
// 2. Local Execution Context.

// What is execution context? 
// Execution context is nothing but a environment constituting your variables, functions scope chain everything.
// Everytime when you run or execute a javascript code there is an exeuction context gets created and added into the call stack.
// Initially there is a gloabl execution context created which people also called as GEC. 

// There are two phases will be executed when you start run the javascript code.
// Phase 1: Memory Allocation - Memory is allocated for the functions and variables - Hositing.
// Phase 2: Code Execution.

var a = 25;
console.log(a);
foo();
function foo() {
    var a = 50;
    console.log(a);
}
console.log(a); 