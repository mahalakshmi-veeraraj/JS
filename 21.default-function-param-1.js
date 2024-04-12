var add = function(a, b) {
    console.log("Addition result is "+(a + b));
}
var multiply = function(a, b) {
    console.log("Multiplication result is "+(a * b));
}
var subtract = function(a, b) {
    console.log("Subtraction result is "+(a - b));
}
add(4, 5);
multiply(6, 9);
subtract(10, 6);
add(4);

var addWithDefParam = function(a = 0, b = 0) {
    console.log("Addition result is "+(a + b));
}
var multiplyWithDefParam = function(a, b) {
    console.log("Multiplication result is "+(a * b));
}
var subtractWithDefParam = function(a, b) {
    console.log("Subtraction result is "+(a - b));
}
addWithDefParam(4, 5);
multiplyWithDefParam(6, 9);
subtractWithDefParam(10, 6);
addWithDefParam(4);