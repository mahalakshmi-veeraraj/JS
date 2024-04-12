// Function currying - Application of closure.
function fn(arg) {
    let counter = 1;
    return function inner(arg) {
        counter++;
        if (arg == 0) {
            return counter;
        }
        return inner;
    }
}
let result2 = fn(0);
console.log(result2());
let result = fn()()()()()()(0);
console.log(result);
let arr = [1, 2];
arr.__proto__ = 1;
console.log(arr);
console.log(arr.__proto__ == Array.prototype);
let arr1 = [1, 3, 6];
console.log(arr1.__proto__ == Array.prototype);
Array.prototype.myReduce = function(){

}
arr1.__proto__.myRecuce1 = function() {

}
console.log(arr);
