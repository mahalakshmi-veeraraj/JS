Array.prototype.myReduce = function(logic, initialValue) {
    let array = this;
    let acc = initialValue;
    for (let element of array) {
        acc = logic(acc, element);
    }
    return acc;
}
let arr = [23, 1, 0, 1];
console.log(arr);
let answer = arr.myReduce((acc, element) => acc + element,0);
console.log(answer);