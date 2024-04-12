// Convert the amount in USD to INR.
let bankStatement = [1000, -300, 2000, 4000, -1500];

function logic(element) {
    return element * 85;
}

function myMap(arr, logic1) {
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        newArr.push(logic1(arr[index]));
    }
    return newArr;
}

let convertedArr1 = bankStatement.map((element) => element * 85);
let convertedArr2 = myMap(bankStatement, logic);

console.log(bankStatement);
console.log(convertedArr1);
console.log(convertedArr2);