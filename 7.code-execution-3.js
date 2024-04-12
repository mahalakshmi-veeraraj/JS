let a = 10;
console.log("Line Number 2", a); // 10.
function fun() {
    console.log("Line Number 4", a); // Reference Error: Cannot access 'a' before initialization.
    let a = 20;
    a++;
    console.log("Line Number 7", a);
    if (a) {
        let a = 30;
        a++;
        console.log("Line Number 12", a);
    }
    console.log("Line Number 14", a);
}
fun();
console.log("Line Number 16", a);
