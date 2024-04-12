console.log(a); // undefined.
var a = 10;
console.log(a); // 10 Implicitly a represents this.a.
console.log(this.a); // 10.
console.log(window.a); // if you run on browser will get a value as 10.
console.log(this === window);