var z = 10;
function foo() {
    let b = 100;
    {
        var a = 10;
        let c = 1000;
        console.log(a); // 10. 
        console.log(b); // 100.
        console.log(c); // 1000.
    }
    console.log(a); // 10.
    console.log(b); // 100
    console.log(c); // Reference Error: c is not defined.
}
foo();