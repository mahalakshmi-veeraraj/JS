Array.prototype.sum = function () { // Assume memory refering is 4k.
    let arr = this;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let array1 = [1, 2, 3, 4, 5]; // Assume memory refering is 8k.
// Behind the scene what will happen when the above code execute
// let array1 = new Array();
// array1.push(1);
// array1.push(2);
// array1.push(3);
// array1.push(4);
// array1.push(5);
let array2 = [10, 20, 30, 40, 59]; // Assume memory refering is 12k.
console.log(array1.sum());
console.log(array2.sum());

// array1 object extends Array class.
// Array function contains sum method in it.
// array1 object refering to the 4k memory only when we execute array1.sum.

// Similarly for array2 object as well.
// What benefits it brings to us? 
// 1. Avoid the writing the repeatative lines of code. Making sure to follow DRY (Do Not Repeat Yourself) priniciple.
// 2. Efficient usage of memory. 