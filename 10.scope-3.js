var a = 10;
console.log(a); // 10.
function fn() {
    // Carefully find the value by drawing memory diagram to get the correct answer at a first shot.
    console.log(a); // undefined.
    var a = 20;
    a++;
    if (a) {
        var a = 30;
        a++;
        console.log(a); // 31
    }
    console.log(a); // 31
}
fn();