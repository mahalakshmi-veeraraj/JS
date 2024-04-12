// 'apply()' method in Javascript is designed to spread the elements of an array as individual arguments
// to a function, rather than passing the array as a single argument. This behavior is by design and 
// has historical reasons.
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
    // ...param - ...literally mean "gathering the remaining parameters into an array".
    // apply() method does not pass the array as a single argument. Instead, it spreads the elements 
    // of the array as individual arguments to the function.
    // Therefore, if you want to collect all these arguments into an array within the function, you need 
    // to use the rest parameter '(...param)'. This allows you to collect all remaining arguments into an array,
    // regardless of their number, making it a convenient way to handle variable number of arguments 
    // passed to a function.
    console.log("Welcome " + this.fName + " " + this.lName);
    console.log(param);
    console.log(param[0]);
    console.log(param[1]);
    console.log(param[2]);
}
welcomeFn.apply(cricketer1, [45, ["Reading Books", "Music"], "Male"]);
welcomeFn.apply(cricketer2, [41, ["Exercise", "Workout"], "Male"]);
welcomeFn.apply(cricketer3, [27, ["Dancing", "Gym"], "Male"]);