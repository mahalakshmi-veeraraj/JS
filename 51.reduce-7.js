// You are given an array of objects representing students and their grades. Each object contains
// properties 'name' and 'grade'. Your task is to group the students by their grades and return an object
// where the keys are unique grades and the values are array of student names who achieved the grade;
const students = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },
    { name: 'Charlie', grade: 'A' },
    { name: 'David', grade: 'C' },
    { name: 'Eve', grade: 'B' },
    { name: 'Frank', grade: 'A' }
];
let answerObject = {};
for (let element of students) {
    if (answerObject[element.grade] === undefined) {
        answerObject[element.grade] = [element.name];
    }
    else {
        answerObject[element.grade].push(element.name);
    }
}
console.log(answerObject);
let answerObject2 = students.reduce((acc, element) => {
    if (acc[element.grade] === undefined) {
        acc[element.grade] = [element.name];
    }
    else {
        acc[element.grade].push(element.name);
    }
    return acc;
},{});
console.log(answerObject2);

function callBackFn(acc, element) {
    if (acc[element.grade] === undefined) {
        acc[element.grade] = [element.name];
    }
    else {
        acc[element.grade].push(element.name);
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
let answerObject3 = students.myReduce(callBackFn, {});
console.log(answerObject3);