// HOF - Stands for Higher Order Functions.
// A function which accepts another function as a parameter or
// A function which returns another function
// then those function is termed as Higher Order Functions.
let arr = [2, 0, 21, 90, 123, 67, 89, 11, 74];

// Print the array which contains only odd elements.
let oddElementArray = [];
for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 !== 0) {
        oddElementArray.push(arr[index]);
    }
}

// Print the array which contains only even elements.
let evenElementArray = [];
for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 0) {
        evenElementArray.push(arr[index]);
    }
}

// Print the array which contains the element more than 25.
let elementMoreThan25 = [];
for (let index = 0; index < arr.length; index++) {
    if (arr[index] >= 25) {
        elementMoreThan25.push(arr[index]);
    }
}

console.log(oddElementArray);
console.log(evenElementArray);
console.log(elementMoreThan25);

// Repetitive steps in the above codes are as follows:
// 1. Creating array.
// 2. Traversing over the array.
// 3. Returning array.

// Unique Steps are as follows:
// 1. Logic.