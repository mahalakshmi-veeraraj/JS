function deepCopy(object) {
    if (typeof object !== 'object') {
        return object;
    }
    let deepCopyObject = Array.isArray(object) ? [] : {};
    for (let prop in object) {
        if (!Array.isArray(object[prop])) {
            deepCopyObject[prop] = deepCopy(object[prop]);
        }
        else {
            deepCopyObject[prop] = [...object[prop]];
            for (let arrayProp in deepCopyObject[object]) {
                deepCopyObject[object][arrayProp] = deepCopy(object[prop][arrayProp]);    
            }
        }
    }
    return deepCopyObject;
}
var a = [1, 2, 3];
var b = deepCopy(a);
b[0] = 0;
console.log(a); // [1, 2, 3]
console.log(b); // [0, 2, 3]
var object1 = {
    x : "X",
    y : "Y",
    z : "Z"
};
var object2 = deepCopy(object1);
object2.x = "A"; 
console.log(object1); // { x: 'X', y: 'Y', z: 'Z' }
console.log(object2); // { x: 'A', y: 'Y', z: 'Z' }
var merry = {
    name : "Merry",
    birthYear : 1996,
    gender : "Female",
    languagesKnown:["English", "Tamil"]
};
var deepCopyOfMerry = deepCopy(merry);
deepCopyOfMerry.name = "Mary";
deepCopyOfMerry.languagesKnown[0] = "Telugu";
console.log(merry);
console.log(deepCopyOfMerry);