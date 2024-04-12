let cricketer1 = {
    fName: "MS",
    lName: "Dhoni"
};
let cricketer2 = {
    fName: "Virat",
    lName: "Kozhi"
};
let cricketer3 = {
    fName: "Shane",
    lName: "Warne"
};
function welcomeFn(age, hobby, gender) {
    console.log("Welcome " + this.fName + " " + this.lName);
    console.log(age);
    console.log(hobby);
    console.log(gender);
}
Function.prototype.myBind = function(object, age, hobby, gender) {
    let welcomeFn = this;
    return function() {
        object.fn = welcomeFn;
        object.fn(age, hobby, gender);
        delete object.fn;
    }
}
let fn1 = welcomeFn. myBind(cricketer1, 45, ["Reading Books", "Music"], "Male");
let fn2 = welcomeFn.myBind(cricketer2, 41, ["Exercise", "Workout"], "Male");
let fn3 = welcomeFn.myBind(cricketer3, 27, ["Dancing", "Gym"], "Male");
fn1();
fn2();
fn3();