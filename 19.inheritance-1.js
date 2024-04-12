var a = [12, 34, 67, 10, 11, 987];
function sum() {
    let sum = 0;
    for (let index = 0; index < a.length; index++) {
        sum += a[index];
    }
    console.log("Sum is "+sum);
}
Array.prototype.sum = function() {
    let sum = 0;
    for (let index = 0; index < this.length; index++) {
        sum += this[index];
    }
    return sum;
}
// Let say Array Prototype sum function memory is 4k.
// Let say b object memory is 8k.
var b = [34, 1, 9, 123, 56, 10];
// Behind the scene what will happen after the execution of the above code var b = [34, 1, 9, 123, 56, 10];
// var b = new Array();
// b.push(34);
// b.push(1);
console.log("Sum value is "+b.sum());

var c = [34, 12, 90, 12, 122];
// Let say c object memory is 12k.
console.log("Sum value is "+c.sum());

// When we access sum method by using c and b object the sum function which is in 4k memory will be executed.
// With the help of Prototype implementation.
    // 1. More memory consumption or space occupation is reduced.
    // 2. We are not repeating functionality. We are following DRY Do Not Repeat Yourself principle. 
    

var d = [123, 9, 67, 90, 11, 5555];
console.log("Sum value is "+d.sum());

