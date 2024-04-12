Array.prototype.sum = function() {
    let sum = 0;
    for (let index = 0; index < this.length; index++) {
        sum += this[index];
    }
    return sum;
}
var a = [10, 23, 45, 9, 56, 23];
console.log(a.sum());

Array.prototype.myConcat = function(array2) {
    let array1 = this;
    return [...array1, ...array2];
}
let array1 = [23, 1, 0, 12];
let array2 = [4, 9, 12, 34];
let concatenatedArray = array1.myConcat(array2);
concatenatedArray.sort((element1, element2) => element1 - element2);
console.log("Concatenated Array is "+concatenatedArray);

Array.prototype.myPush = function(element) {
    let array = this;
    array[array.length] = element;
    return array.length;
}
let arr = [];
arr.myPush(1);
arr.myPush(2);
arr.myPush(3);
console.log(arr);
let arr2 = [];
arr2.push(1);
arr2.push(2);
arr2.push(3);
console.log(arr2);