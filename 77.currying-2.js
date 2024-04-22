// Currying is a technique in functional programming where a function that takes multiple arguments is
// transformed into a sequence of functions, each taking a single argument. 
function add(a, b, c) {
    return a + b + c;
}
let answer = add(4, 5, 6);
console.log("Add result is "+answer);
function curryingAdd(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
answer = curryingAdd(4)(5)(6);
console.log("Currying Add result is "+answer);
