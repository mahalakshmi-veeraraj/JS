function MyObject() {
    
}
MyObject.prototype.myToString = function() {

}

// Template to create objects.
function Father(name, age) {
    this.father_name = name;
    this.age = age;
}
Father.prototype.printFather = function() {
    console.log(this.father_name);
}

// Builded object by using the Father Template.
let father = new Father();
console.log(father);
console.log(Father);
console.log(father.hasOwnProperty("father_name")); // true
console.log(father.hasOwnProperty("age")); // true
console.log(father.hasOwnProperty("prototype")); // false
console.log(father.hasOwnProperty("__proto__")); // false
console.log(Father.hasOwnProperty("age")); // False
console.log(Father.hasOwnProperty("father_name")); // false
console.log(Father.hasOwnProperty("prototype")); // true
console.log(Father.hasOwnProperty("__proto__")); // false

// Father              Object 

//  ||                   ||

// prototype           prototype 
                       
//                        ||

// 1.printFather          1. hasOwnProperty
//                        2. toString
//                        3. toLocaleString

let fatherObject = new Father("Test Father");
fatherObject.printFather(); // printFather method is defined in Father prototype.
console.log(fatherObject.toString()); // toString method is defined in Object prototype.


// Father template prototype has the reference to access the Object prototype. 
// How that reference is implemented?
// How to change the Father template prototype reference to MyObject prototype?