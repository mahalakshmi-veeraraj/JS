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
welcomeFn.call(cricketer1, 45, ["Reading Books", "Music"], "Male");
welcomeFn.call(cricketer2, 41, ["Exercise", "Workout"], "Male");
welcomeFn.call(cricketer3, 27, ["Dancing", "Gym"], "Male");