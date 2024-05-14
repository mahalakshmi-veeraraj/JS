Array.prototype.myForEach = function (func) {
    let array = this;
    for (let i = 0; i < array.length; i++) {
        func(array[i]);
    }
}
Array.prototype.myFilter = function (func) {
    let array = this;
    let filteredNewArray = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            filteredNewArray.push(array[i]);
        }
    }
    return filteredNewArray;
}
Array.prototype.myMap = function (func) {
    let array = this;
    let transformedNewArray = [];
    for (let i = 0; i < array.length; i++) {
        transformedNewArray.push(func(array[i]));
    }
    return transformedNewArray;
}
Array.prototype.myReduce = function (func, acc) {
    let array = this;
    for (let i = 0; i < array.length; i++) {
        acc = func(array[i], acc);
    }
    return acc;
}
Array.prototype.mySlice = function (start, end) {
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
Array.prototype.myReverse = function () {
    let array = this;
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray[array.length - 1 - i] = array[i];
    }
    for (let i = 0; i < reversedArray.length; i++) { // Reverse modifies the original array.
        array[i] = reversedArray[i];
    }
    return reversedArray;
}
Array.prototype.myPush = function (element) {
    let array = this;
    array[array.length] = element;
    return array.length; // Return the new length of the array.
}
Array.prototype.myUnshift = function (element) {
    let array = this;
    for (let i = 1; i < array.length; i++) {
        array[i] = array[i - 1]; // Return the new length of the array.
    }
    array[0] = element;
    return array.length;
}
Array.prototype.myPop = function () {
    let array = this;
    if (!array) return undefined;
    const lastIndex = array.length - 1;
    const lastElement = array[lastIndex];
    array.length = lastIndex;
    return lastElement;
}
Array.prototype.myShift = function () {
    let array = this;
    if (!array) return undefined;
    const firstElement = array[0];
    for (let i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }
    array.length = array.length - 1;
    return firstElement;
}

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
