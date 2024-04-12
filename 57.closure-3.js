function createCounter(y, z) {
    var a = y; // 10
    var b = z; // 5
    function count() {
        y = y + z;
        a = a + b;
        console.log(y);
        console.log(z);
        return a;
    }
    return count;
}
let c1 = createCounter(10, 5);
let c2 = createCounter(10, 5);
console.log(c1);
console.log(c2);
console.log(c1()); 
console.log(c2());
// Closure (createCounter) scope will be created under Scope section and also which will automatically 
// contains all the remembered reference variable along with its value.