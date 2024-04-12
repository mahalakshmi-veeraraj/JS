// Reference Types - Objects, Arrays, Functions.
// In java, Array length has to be fixed and we can group similar type of element into an Array.
// In Javascript, Array length is dynamic and we can group different type of element into an Array. 

// Create an array.
var a = [];
var b = new Array();
console.log(typeof b); // object.
console.log(typeof a); // object.
// Empty an array.
a.length = 0;
a = [];
// Accessing elements in an array.
a.push(10);
console.log(a[0]);
// Inserting an element into an array at last.
a.push(2);
a.push(101);
a.push(34);
// Inserting an element into an array at first.
a.unshift(5);
a.unshift(8);
a.unshift(99);
// Deleting an element at last.
a.pop();
// Deleting an element ar first.
a.shift();
// Iterating elements in an array.
console.log("Traversing elements of an array using for loop");
for (let index = 0; index < a.length; index++) {
    console.log(a[index]);
}
console.log("Traversing elements of an array using while loop");
let index = 0;
while (index < a.length) {
    console.log(a[index++]);
}
console.log("Traversing elements of an array using for...in loop");
for (let prop in a) {
    console.log(prop +" "+a[prop]);
}
console.log("Traversing elements of an array using for...of loop");
for (let element of a) {
    console.log(element);
}
console.log("Traversing elements of an array using forEach loop");
a.forEach((element, index) => console.log(element + " is at " + index));
console.log("Traversing elements of an array using map");
a.map((element) => console.log(element));
// Slice from elements at index 2.
var slicedArray = a.slice(2);
console.log("Sliced elements are as follows");
for(let index = 0; index < slicedArray.length; index++) {
    console.log(slicedArray[index]);
}
let courses = [0,'hld', 'lld', 'dsa', 6, true, null];
console.log(courses[3]);
console.log(courses[2]);
console.log(courses[5]);
console.log(courses.length);
let array1 = [1, 2, 3, 4, 5, 'lld'];
console.log("Array1 length is "+array1.length);