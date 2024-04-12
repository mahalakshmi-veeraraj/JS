// Calculate the sum of all numbers in an array using 'reduce()'
// What is bank balance?.
let bankStatement = [1000, -300, 2000, 4000, -1500];

let bankBal1 = bankStatement.reduce(function(acc, element, index) {
    return acc + element;
},0);
console.log("Bank Balance is "+bankBal1);

function callBackFn(acc, element) {
    return acc + element;
}
Array.prototype.myReduce = function(logic, initialValue) {
    let arr = this;
    let acc = initialValue;
    for (let index = 0; index < arr.length; index++) {
        acc = logic(acc, arr[index]);
    }
    return acc;
}
let bankBal2 = bankStatement.myReduce(callBackFn,0);
console.log("Bank Balance is "+bankBal2);

// Initially acc value will be 0.
// When bankStatement element is 1000.
// acc + element = 1000.
// acc = 1000.

// acc = 1000;
// When bankStatement element is -300.
// acc + element = 700.
// acc = 700.

// acc = 700.
// When bankStatement element is 2000.
// acc + element = 2700.
// acc = 2700.

// acc = 2700.
// When bankStatement element is 4000.
// acc + element = 6700.
// acc = 6700.

// acc = 6700.
// When bankStatement element is -1500.
// acc + element = 5200.
// acc = 5200.

// The array reduce in Javascript is a predefined method used to reduce an array to a single value by passing
// a callback function on each element of the array. 
// The reduce() method accepts two arguments, first argument is the callBank function and the second
// argument is the optional initial value.
// The returned single value is stored in the accumulator.
// Every time it will store the result in the accumulator.
