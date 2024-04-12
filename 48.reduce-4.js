// Calculate the average value of the array.
let arr = [10, 23, 89, 9999, 123, 78655];
let sum = 0;
for (let element of arr) {
    sum += element;
}
let avg1 = sum / arr.length;
console.log("Average value is "+avg1);

sum = arr.reduce((acc, element, index, arr) => {
    return acc + element;
},0);
let avg2 = sum / arr.length;
console.log("Average value is "+avg2);

function callBackFn(acc, element) {
    return acc + element;
}
Array.prototype.myReduce = function(logic, initialValue) {
    let array = this;
    let acc = initialValue;
    for (let element of array) {
        acc = logic(acc, element);
    } 
    return acc;
}
let avg3 = arr.myReduce(callBackFn, 0) / arr.length;
console.log("Average value is "+avg3);