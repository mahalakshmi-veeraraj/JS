// Find the longest word in an array of string using 'reduce()'.
let arr = ["maha", "lakshmi", "mahima", "mahalakshmi", "mahalakshmi veeraraj"];
let longestWord = "";
for (let element of arr) {
    if (element.length > longestWord.length) {
        longestWord = element;
    }
}
console.log("Longest word is "+longestWord);

let longestWord2 = arr.reduce((acc, element) => {
    if (acc.length > element.length) {
        return acc;
    }
    else {
        return element;
    }
},"");
console.log("Longest word is "+longestWord2);

function callBackFn (acc, element) {
    if (acc.length > element.length) {
        return acc;
    }
    else {
        return element;
    }
}
Array.prototype.myReduce = function(logic, initialValue) {
    let array = this;
    let acc = initialValue;
    for (let element of array) {
        acc = logic(acc, element);
    }
    return acc;
}
let longestWord3 = arr.myReduce(callBackFn, "");
console.log("Longest word is "+longestWord3);

