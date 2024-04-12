var firstName = "Tommy";
let dog = {
    firstName: "Pluto",
    sayHi: function () {
        console.log(`${this.firstName} says hi`); // In method this refers to the object in which it is part of. Pluto says hi.
        inner();
        function inner() {
            console.log(`${this.firstName} says hi`); // In function this refers to the global window. Tommy says hi.
        }
        const arrow = () => {
            console.log(`${this.firstName} says hi`); // In arrow function this refers to the parent references. // Pluto says hi.
        }
    }
}
dog.sayHi();
console.log(`${this.firstName} says hi`); // In function this refers to the global window object. Tommy says hi.