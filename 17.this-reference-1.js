'use strict';
let name = "merry";
var firstName = "Tommy";
let dog = {
    firstName: "Pluto",
    sayHi: function () {
        console.log(`${this.firstName} says hi`); // In method this refers to the object in which it is part of. Pluto says hi.
        const arrow = () => {
            console.log(`${this.firstName} says hi`); // In arrow function this refers to the parent references. // Pluto says hi.
        }
        arrow();
        inner();
        function inner() {
            console.log(`${this.firstName} says hi`); // In function this points to undefined. 
            // When we access a property on undefined value will get TypeError: Cannot read properties of undefined (reading 'firstName').
        }
    }
}
dog.sayHi();
console.log(`${this.firstName} says hi`); 