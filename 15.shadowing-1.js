// Shadowing.
// Two variable same name but different scope. If these conditions are met then we can say it as shadowing.
// Legal Shadowing.
var a = 10;
{
    let a = 100;
    console.log(a); // 100.
}
console.log(a); // 10.
