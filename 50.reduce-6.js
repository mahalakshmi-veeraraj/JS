// Count the occurences of element in an array using 'reduce()'.
let arr = [1, 23, 1, 1, 0, 1, 41, 56, 23, 9, 0, 4];
let answerObject = {};
for (let element of arr) {
    if (answerObject[element] === undefined) {
        answerObject[element] = 1;
    }
    else {
        answerObject[element] += 1;
    }
}
console.log(answerObject);

let answerObject2 = arr.reduce((acc, element) => {
    if (acc[element] === undefined) {
        acc[element] = 1;
    }
    else {
        acc[element] += 1;
    }
    return acc;
},{});
console.log(answerObject2);

function callBackFn (acc, element) {
    if (acc[element] === undefined) {
        acc[element] = 1;
    }
    else {
        acc[element] += 1;
    }
    return acc;
}
Array.prototype.myReduce = function(logic, initialValue) {
    let array = this;
    let acc = initialValue;
    for (let element of array) {
        acc = logic(acc, element);
    }
    return acc;
}
let answerObject3 = arr.myReduce(callBackFn, {});
console.log(answerObject3);