function add(a) {
    return function(b) {
        if (b) return add(a + b);
        return a;
    }
}
let answer = add(2)(3)(4)(5)(6)();
console.log("Infinite Currying Add Result is "+answer);