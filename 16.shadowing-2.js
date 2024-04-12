// Illegal Shadowing.
let a = 10;
{
    var a = 100;
    console.log(a); // 100.
}
console.log(a); // 10. Ambiguity accessing the variable hence this is termed as illegal shadowing.
