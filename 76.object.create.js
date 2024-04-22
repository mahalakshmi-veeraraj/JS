// The Object.create() static method creates a new object, using an existing object as the prototype
// of the newly created object.
let object = {
    name1:'maha',
    age:23
}
let obj = Object.create(object);
console.log(obj.name1);
console.log(obj.age);
console.log(obj);
// Object.setPrototypeOf(obj,object.__proto__);
// console.log(obj.name1);
// console.log(obj.age);