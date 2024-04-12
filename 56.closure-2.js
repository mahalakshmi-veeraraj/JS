function x() {
    debugger;
    var a = 7;
    function y() {
        console.log(a);
    }
    a++;
    return y;
}
var a = 1111;
var z = x(); // Function along with its lexical scope forms a closure.
// var z = x() // Implicitly returned thing is closure a function along with its lexical scope.
// Closure scope remember lexical scope references along with the function definition inside of it.
// Even though function x is destroyed the lexical scope references are still stored inside the closure scope. 
// Hence when we execute this function we are able to access the y function lexical scope reference variables.
z();  // Closure(x) scope will be newly created and added under Scope section.
// When I execute z() function Closure (x) will be created which will contains the lexical scope 
// references of function y. Closure(x) is also contains the its own scope reference variables like Local, Global scopes.

