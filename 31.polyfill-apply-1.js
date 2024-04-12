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
function welcomeFn(...param) { 
    console.log("Welcome "+this.fName+" "+this.lName);
    console.log(param[0]);
    console.log(param[1]);
    console.log(param[2]);
}
Function.prototype.myApply = function(object, param) {
    let welcomeFn = this;
    object.fn = welcomeFn;
    object.fn(...param);
    delete object.fn;
}
welcomeFn.myApply(cricketer1, [45, ["Reading Books", "Music"], "Male"]);
welcomeFn.myApply(cricketer2, [41, ["Exercise", "Workout"], "Male"]);
welcomeFn.myApply(cricketer3, [27, ["Dancing", "Gym"], "Male"]);