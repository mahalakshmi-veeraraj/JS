// Here object contains nested objects so complete deep copy of object will not be created if we use spread operator here.
// To achive complete deepCopy of object we will need to use one of the following ways.
    // 1. Use JSON.parse(JSON.stringify(object)); Not recommened if the object is not a simpler kind then this method will take time to complete its work.
    // 2. Use Lodash third party library to get the complete deep copy of any object.
    // 3. Implement your own deepCopy implementation function.
var merry = {
    name : "Merry",
    birthYear : 1996,
    gender : "Female",
    languagesKnown:["English", "Tamil"]
};
var deepCopyOfMerry = {...merry};
deepCopyOfMerry.name = "Mary";
deepCopyOfMerry.languagesKnown[0] = "Telugu";
console.log(merry);
console.log(deepCopyOfMerry);
