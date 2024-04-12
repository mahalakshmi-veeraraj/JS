// If there is no nested object in the memory then we can utilize spread operator to create new object.
var a = [12, 334, 9, 0, 1];
var deepCopyOfA = [...a];
// [] - Creates new memory.
// ...a - Spread the elements into the newly created memory.
deepCopyOfA[0] = 3445;
console.log(a); // [12, 334, 9, 0, 1]
console.log(deepCopyOfA); // [3445, 334, 9, 0, 1]