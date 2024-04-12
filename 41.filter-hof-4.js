// Give me the bank statement which contains all the earnings.
let bankStatement = [1000, -300, 2000, 4000, -1500];

function logic (element) {
    return element > 0;
}

function myFilter(arr, logic1) {
    let filteredArray = [];
    for (let index = 0; index < arr.length; index++) {
        if (logic1(arr[index])) {
            filteredArray.push(arr[index]);
        }
    }
    return filteredArray;
}


let filteredArr1 = bankStatement.filter((element) => element > 0);
let filteredArr2 = myFilter(bankStatement, logic);
console.log(filteredArr1);
console.log(filteredArr2);