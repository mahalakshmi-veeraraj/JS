// Print the Bank Statement.
let bankStatement = [1000, -300, 2000, 4000, -1500];

function logic(element) {
    console.log(element);
}

function myForEach(arr, logic1) {
    for (let index = 0; index < arr.length; index++) {
        logic1(arr[index]);
    }
}

bankStatement.forEach((element) => console.log(element));
myForEach(bankStatement, logic);
