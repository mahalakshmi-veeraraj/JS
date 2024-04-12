var merry = {
    name : "Merry",
    birthYear : 1996,
    gender : "Female",
    languagesKnown:["English", "Tamil"]
};
var deepCopyOfMerry = JSON.parse(JSON.stringify(merry));
deepCopyOfMerry.name = "Mary";
deepCopyOfMerry.languagesKnown[0] = "Telugu";
console.log(merry);
console.log(deepCopyOfMerry);
