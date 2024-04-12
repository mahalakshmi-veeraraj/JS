var array = [1, 2, 3, [4, 5], [6, 7, [8, 9, 10]]];
console.log(array.flat(Infinity));
Array.prototype.flat = function (n) {
    //n is how many levels you want to flatten out.
}
console.log(flattenAnArray(array));
function flattenAnArray(object) {
    let flattenedArray = [];
    for (let prop in object) {
        if (!Array.isArray(object[prop])) {
            flattenedArray.push(object[prop]);
        }
        else {
            let smallerArray = flattenAnArray(object[prop]);
            flattenedArray.push(...smallerArray);
        }
    }
    return flattenedArray;
}