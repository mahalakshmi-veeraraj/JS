// How to create objects?
var object1 = {};
var object2 = new Object();
object1.name = "maha";
object1.age = 26;
object2.name = "maha";
object2.age = 20; // Properties.
object1.fun = function() { // Method.
    console.log("Hello World");
}
console.log(object1);
console.log(object2);
// Accessing elements from an array.
console.log(object1.name);
console.log(object2.name);
// Traversing elements from an array.
for (let key in object1) {
    console.log(key + " "+object1[key]);
}
