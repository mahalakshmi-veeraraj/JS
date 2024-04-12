var Person = function(name, birthYear, gender){
    this.name = name;
    this.birthYear = birthYear;
    this.gender = gender;
    // this.calculateAge = function() {
    //     let age = new Date().getFullYear() - this.birthYear;
    //     console.log(`Age of ${this.name} is ${age}`);
    // }
}
Person.prototype.calculateAge = function() {
    let age = new Date().getFullYear() - this.birthYear;
    console.log(`Age of ${this.name} is ${age}`);
}
var jerry = new Person("Jerry", 1996, "Male");
var merry = new Person("Merry", 1999, "Female");
var john = new Person("John", 1989, "Male");
jerry.calculateAge();
merry.calculateAge();
john.calculateAge();