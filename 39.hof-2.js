// HOF - Stands for Higher Order Functions.
// A function which accepts another function as a parameter or
// A function which returns another function
// then those function is termed as Higher Order Functions.
let arr = [2, 0, 21, 90, 123, 67, 89, 11, 74];

// Print the array which contains only odd elements.
function isOdd(element) {
    return element % 2 !== 0;
} 

// Print the array which contains only even elements.
function isEven(element) {
    return element % 2 === 0;
}

// Print the array which contains the element more than 25.
function isMoreThan25(element) {
    return element >= 25;
}

function traverse(arr, logic) {
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        if (logic(arr[index])) {
            newArr.push(arr[index]);
        }
    }
    return newArr;
}

console.log(traverse(arr,isOdd)); 
console.log(traverse(arr,isEven));
console.log(traverse(arr,isMoreThan25));

// Here 'traverse' is HOF because it accepts another function as a parameter.