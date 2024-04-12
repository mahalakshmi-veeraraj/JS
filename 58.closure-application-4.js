function createCounter() {
    let count = 0;

    return function() {
        count++;
        console.log(count)
    }
}

// I can't straightly access the count variable which is inside the function createCounter.
// I can access the count variable externally through the use of Closures.
// There is no other way to access the count variable externally without Closure.
// Straight way to access the variable is restricted and we have the only way to access them through methods.
// Concept similar to Encapsulation in OOPs.

const counter1 = createCounter();
counter1();
counter1();
counter1();
const counter2 = createCounter();
counter2();

