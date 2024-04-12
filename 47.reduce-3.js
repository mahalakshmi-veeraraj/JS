// Finding the maximum element in an array.
let arr = [10, 23, 89, 9999, 123, 78655];
let max1 = 0;
for (let index = 0; index < arr.length; index++) {
    max1 = Math.max(max1, arr[index]);
}
console.log("Maximum Element is "+max1);
let max2 = arr.reduce((acc, element) => {
    if (acc > element) {
        return acc;
    }
    else {
        return element;
    }
},arr[0]);
console.log("Maximum Element is "+max2);

function callBackFn(acc, element) {
    if (acc > element) {
        return acc;
    }
    else {
        return element;
    }
}
Array.prototype.myReduce = function(logic, initialValue) {
    let array = this;
    let acc = initialValue;
    for (let element of array) {
        acc = logic(acc, element);
    }
    return acc;
}
let max3 = arr.myReduce(callBackFn, arr[0]);
console.log("Maximum Element is "+max3);