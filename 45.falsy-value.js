// A falsy value is something which evaluates to FALSE. 
// There are only six falsy values in javascript: undefined, null, NaN, 0, "", false.
 
let x;
console.log(x ? true : false);

let y = null;
console.log(y ? true : false);

let z = undefined + 1;
console.log(z ? true : false);

let w = 0;
let u = 1;
console.log(w ? true : false);
console.log(u ? true : false);

let v = "";
let s = "a";
console.log(v ? true : false);
console.log(s ? true : false);

