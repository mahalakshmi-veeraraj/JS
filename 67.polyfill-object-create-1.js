// You are tasked with creating a polyfill for the Object.create method in javascript.
// The Object.create method is a built-in function in javascript that allows you to create a new object 
// with a specified prototype object.
// Your goal is to create a function called myObjectCreate that emulates the functionality of Object.create.
// The myObjectCreate function should accept a single argument, proto, which represents the prototype 
// object for the new object to be created.
// However there are few requirements and constraints for your implementation:
//     1. If the proto argument is null, undefined, or not an object, your function should throw an error.
//        This is to ensure that the proto argument is a valid object to be used as the prototype. 
//     2. Your implementation should create a new object that inherits from the proto object. This means that 
//        any properties or methods defined on the proto object should be accessible by the newly created object.
//     3. The newly created objects should not have any own properties initially. Any properties or methods 
//        accessed on the new object that are not defined directly on the object should be looked up in the 
//        prototype chain. 
const personPrototype = {
    greet: function() {
      console.log("Hello, my name is " + this.name + ".");
    }
};
const person = myObjectCreate(personPrototype);
function myObjectCreate(proto) {
    if (!proto || typeof proto !== 'object') {
        throw new Error("Please input a valid object");
    }
    let deepProtoCopy = {};
    for (let prop in proto) {
        deepProtoCopy[prop] = proto[prop];
    }
    return deepProtoCopy;
}
console.log(personPrototype);
console.log(person);
console.log(personPrototype == person);