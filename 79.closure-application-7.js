function memoize(func) {
    const cache = {};
    return function(arg) {
        if (arg in cache) {
            return cache[arg];
        }
        else {
            let result = func(arg);
            cache[arg] = result;
            return result;
        }
    }
}
function expensiveCalculation(n) {
    return n * 2;
}
const memoizedCalculation = memoize(expensiveCalculation);
console.log(memoizedCalculation(5));
console.log(memoizedCalculation(5)); // Memoized results will come here.

// The memoize function is a higher order function that takes a function func and returns a closure. 
// This closure caches the results of func based on its arguments. 
// If the same argument provided again, the closure retrieves the result from the cache instead of recomputing it.

// This can greatly improve performance for expensive calculations that are repeatedly called with the same inputs. 