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
let fn1 = welcomeFn.bind(cricketer1, 45, ["Reading Books", "Music"], "Male");
let fn2 = welcomeFn.bind(cricketer2, 41, ["Exercise", "Workout"], "Male");
let fn3 = welcomeFn.bind(cricketer3, 27, ["Dancing", "Gym"], "Male");
fn1();
fn2();
fn3();