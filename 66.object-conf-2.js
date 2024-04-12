const myArr = [1, 2, 3];
console.log(myArr);
myArr.name = "Scaler";
console.log(Object.keys(myArr));
console.log(delete myArr.name); // true
console.log(myArr);
console.log(myArr.length);
console.log(delete myArr.length); // false. there must be some security present on this key. 
// configuration - data descriptor - configurable set to false for length property internally.
console.log(myArr.length);

console.log(myArr.__proto__);
console.log(delete myArr.__proto__);
// myArr.__proto__="hello";
console.log(myArr.__proto__);

// how do we give permissions to our own property.
const myObject={name:"Scaler"};
const configuration={}; 
// 1. data descriptor - what kind of data can this property hold 
// 2. access descriptor - what all access permissions this property hold.

// I am going to define restriction on my name property of my object.
Object.defineProperty(myObject,"name",configuration);

// Object.defineProperty(<object name>, <property name>, <configuration object>)
// configuration object has two types in it.
// 1. data descriptor
//     a. value - Value of the property (Ex: Scaler)
//     b. writable - if property can be overriden. Default value is false. 
//     c. enumerable - if property can be enumerated. Default value is false.
//     d. configurable - if property can be deleted or if data descriptor can be converted into access descriptor.
// 2. access descriptor
//     a. 

let dog = {};
// We provided the restriction to not delete the name property in dog by setting the configurable property as false.
Object.defineProperty(dog,"name", {
    value:"Pluto",
    writable:false, // you can not change the value.
    enumerable:false, // It can not be counted.
    configurable:false // It can not be deleted if configurable set to false.
});
dog.breed = "Labrador";
console.log(Object.keys(dog));
console.log(delete dog.name); // false
console.log(delete dog.breed); // true
console.log(dog);
dog.name = "Tommy";
console.log(dog);

