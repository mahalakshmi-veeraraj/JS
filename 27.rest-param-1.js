var a = [10, 20, 30, 56, 90];
// ARRAY DESTRUCTURTING
var [num1, num2, ...otherNums] = a;
otherNums[0] = 11111;
console.log(a);
console.log(num1);
console.log(num2);
console.log(otherNums);

