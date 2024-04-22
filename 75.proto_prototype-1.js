function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.sayHi = function () {
    //     console.log("Hi, I am " + this.name + " and I am " + this.age + " years old");
    // }
}
Person.prototype.sayHi = function () {
    console.log("Hi, I am " + this.name + " and I am " + this.age + " years old");
}
let maha = new Person("maha", 26);
let mahima = new Person("mahima", 24);
console.log(maha);
console.log(mahima);
console.log(maha.__proto__ === Person.prototype);
console.log(maha.__proto__.__proto__ === Object.prototype);
maha.sayHi();
console.log(maha.hasOwnProperty("name"));
console.log(maha.hasOwnProperty("length"));
console.log(maha instanceof Person);
console.log(maha instanceof Object);
console.log(typeof mahima);
console.log(typeof Person);
console.log(Object.getPrototypeOf(maha) == Person.prototype);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(maha)) === Object.prototype);
