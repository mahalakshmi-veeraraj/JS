// There is no nested objects inside the main object hence we can utilize spread operator to make a new 
// deep copy of object.
var merry = {
    name : "Merry",
    birthYear : 1996,
    gender : "Female"
};
var deepCopyOfMerry = {...merry};
var shallowCopyOfMerry = merry;
deepCopyOfMerry.name = "Mary";
shallowCopyOfMerry.birthYear = 1999;
console.log(merry);
console.log(deepCopyOfMerry);
console.log(shallowCopyOfMerry);