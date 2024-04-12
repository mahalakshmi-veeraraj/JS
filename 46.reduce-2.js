// Flatten an array of arrays using 'reduce()'
let array = [[1, 2], [3, 4], [5, 6, [0]], [7, [8, 9, 10, [11, 12, 13]]]];
let flattenedArray = array.flat(Infinity);
console.log("Flattened Array is "+flattenedArray);

function callBackFn(acc, element) {
    return acc.concat(element);
}
Array.prototype.myReduce = function(logic, initialValue) {
    let array = this;
    let acc = initialValue;
    for (let index = 0; index < array.length; index++) {
        acc = logic(acc, array[index]);
    }
    return acc;
}
let flattenedArray2 = array.myReduce(callBackFn, []);
console.log("Flattened Array is "+flattenedArray2);
