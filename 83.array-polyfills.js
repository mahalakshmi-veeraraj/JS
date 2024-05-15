// Array Polyfill Implementation. 
// Return the element at the specific index in the array.
Array.prototype.customAt = function(index) {
    let array = this;
    index = index < 0 ? (array.length + index) : index;
    if(index >= array.length) return undefined;
    return array[index];
}
// Concatenate two arrays.
Array.prototype.customConcat = function(array2) {
    let array1 = this;
    let concatenatedArray = [];
    for (let i = 0; i < array1.length; i++) {
        concatenatedArray[concatenatedArray.length] = array1[i];
    }
    for (let i = 0; i < array2.length; i++) {
        concatenatedArray[concatenatedArray.length] = array2[i];
    }
    return concatenatedArray;
}
// Filter elements from the array based on the specific condition.
Array.prototype.customFilter = function (func) {
    let array = this;
    let filteredNewArray = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            filteredNewArray.push(array[i]);
        }
    }
    return filteredNewArray;
}
// find is a method in JavaScript that is used to find the first element in an array
// that satisfies the provided callback function condition.
// If no element satisifies the provided callback function condition, it will return undefined.
Array.prototype.customFind = function(func) {
    let array = this;
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            return array[i];
        }
    }
    return undefined;
}
// findIndex is a method in JavaScript that is used to find the index of the first element in an array
// that satisfies the provided callback function condition.
// If no element satisifies the provided callback function condition, it will return -1.
Array.prototype.customFindIndex = function(func) {
    let array = this;
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
// findLast is a method in JavaScript that is used to find the last element in an array
// that satisfies the provided callback function condition.
// If no element satisifies the provided callback function condition, it will return undefined.
Array.prototype.customFindLast = function(func) {
    let array = this;
    for (let i = array.length - 1; i >= 0; i--) {
        if (func(array[i], i, array)) {
            return array[i];
        }
    }
    return undefined;
}
// findLastIndex is a method in JavaScript that is used to find the index of the last element in an array
// that satisfies the provided callback function condition.
// If no element satisifies the provided callback function condition, it will return -1.
Array.prototype.customFindLastIndex = function(func) {
    let array = this;
    for (let i = array.length - 1; i >= 0; i--) {
        if (func(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
// Iterate over the array and will not return anything.
Array.prototype.customForEach = function (func) {
    let array = this;
    for (let i = 0; i < array.length; i++) {
        func(array[i], i, array);
    }
}
// indexOf method in JavaScript is used to find the index of the element in an array from the left to right. 
// If startIndexFromTheBeginning is provided then the search starts from that particular index else 0;
Array.prototype.customIndexOf = function(element, startIndexFromTheBeginning) {
    let array = this;
    let startingIndex = startIndexFromTheBeginning ? startIndexFromTheBeginning : 0;
    for (let i = startingIndex; i < array.length; i++) {
        if (array[i] == element) return i;
    }
    return -1;
}
// lastIndexOf method in JavaScript is used to find the index of the element in an array from the right to left. 
// If startIndexFromTheEnd is provided then the search starts from that particular index else array length - 1;
Array.prototype.customLastIndexOf = function(element, startIndexFromTheEnd) {
    let array = this;
    let startingIndexFromTheEnd = startIndexFromTheEnd ? startIndexFromTheEnd : array.length - 1;
    for (let i = startingIndexFromTheEnd; i >= 0; i--) {
        if (array[i] == element) return i;
    }
    return -1;
}
// Itrerate over the array and will return the transformed array as a result.
Array.prototype.customMap = function (func) {
    let array = this;
    let transformedNewArray = [];
    for (let i = 0; i < array.length; i++) {
        transformedNewArray.push(func(array[i], i, array));
    }
    return transformedNewArray;
}
// Remove the last element from the array.
Array.prototype.customPop = function () {
    let array = this;
    if (!array) return undefined;
    const lastIndex = array.length - 1;
    const lastElement = array[lastIndex];
    array.length = lastIndex;
    return lastElement;
}
// Insert the element at the last position of the array.
Array.prototype.customPush = function (element) {
    let array = this;
    array[array.length] = element;
    return array.length; // Return the new length of the array.
}
// Iterate over the array and apply the specific logic and return the reduced single object/value.
Array.prototype.customReduce = function (func, acc) {
    let array = this;
    for (let i = 0; i < array.length; i++) {
        acc = func(array[i], acc);
    }
    return acc;
}
// Reverse the elements of the array. Reverse modifies the original array.
Array.prototype.customReverse = function () {
    let array = this;
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray[array.length - 1 - i] = array[i];
    }
    for (let i = 0; i < reversedArray.length; i++) { 
        array[i] = reversedArray[i];
    }
    return reversedArray;
}
// Insert the element at the first position of the array.
Array.prototype.customShift = function () {
    let array = this;
    if (!array) return undefined;
    const firstElement = array[0];
    for (let i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }
    array.length = array.length - 1;
    return firstElement;
}
// Slice the specific portion of the array and return the sliced array. Slice will not modifies the original array.
Array.prototype.customSlice = function (start, end) {
    let array = this;
    start = !start ? 0 : start;
    end = Math.min((!end ? array.length : end), array.length);
    if (start < 0) start = array.length + start;
    let slicedArray = [];
    for (let i = start; i >= 0 && i < end; i++) {
        slicedArray.push(array[i]);
    }
    return slicedArray;
}
// some method in JavaScript is used to check whether at least one element in an array satisfies the 
// condition defined inside the callback function.
Array.prototype.customSome = function(func) {
    let array = this;
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) return true;
    }
    return false;
}
// Remove the first element from the array and return the new length as a result.
Array.prototype.customUnshift = function (element) {
    let array = this;
    for (let i = 1; i < array.length; i++) {
        array[i] = array[i - 1]; 
    }
    array[0] = element;
    return array.length;
}
// Array Polyfill Implementation Testing.
function printElement(element) {
    console.log(element);
}
function filterOdd(element) {
    return element % 2 != 0;
}
function multiplyTwo(element) {
    return element * 2;
}
function max(element, acc) {
    if (acc > element) return acc;
    return element;
}
function groupStudentsClassWise(element, acc) {
    if (!acc[element.class])
        acc[element.class] = [];
    acc[element.class].push(element);
    return acc;
}
let array = [13, 20, 31, 401, 50];
// let filteredArray = array.myFilter(filterOdd);
// let transformedArray = array.myMap(multiplyTwo);
// filteredArray.myForEach(printElement);
// transformedArray.myForEach(printElement);
// let reducedValue = array.myReduce(max, array[0]);
// console.log("Maximum element in the array is " + reducedValue);
// let students = [
//     { name: "merry", class: 12 },
//     { name: "jack", class: 10 },
//     { name: "john", class: 12 },
//     { name: "mary", class: 11 }
// ];
// let groupedStudents = students.myReduce(groupStudentsClassWise, {});
// console.log(groupedStudents);
let slicedArray = array.slice(1, 2);
console.log(slicedArray);
console.log(array.mySlice(-2, -2));
console.log(array.mySlice(-2));
// console.log(array.reverse());
// console.log(array.myReverse());
// console.log(array.reverse());
// console.log(array.myReverse());
// console.log(array.myAt(-2));
// console.log(array.myAt(100));
// console.log(array.myAt(5));