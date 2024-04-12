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
    console.log("Welcome "+this.fName+" "+this.lName);
    console.log(age);
    console.log(hobby);
    console.log(gender);
}
Function.prototype.myCall = function(object, age, hobby, gender) {
    let welcomeFn = this;
    object.fn = welcomeFn;
    object.fn(age, hobby, gender);
    delete object.fn;
}
welcomeFn.myCall(cricketer1, 45, ["Reading Books", "Music"], "Male");
welcomeFn.myCall(cricketer2, 41, ["Exercise", "Workout"], "Male");
welcomeFn.myCall(cricketer3, 27, ["Dancing", "Gym"], "Male");