let obj1 = {name:"pluto",breed:"labrador"};
let obj2 = {name:"pluto",breed:"labrador"};
let obj3 = obj1;
console.log(obj3 == obj1); // true
console.log(obj3 === obj1); // true 
console.log(obj2 == obj1); // false
console.log(obj2 === obj1); // false

let obj4 = Object.create(obj1);
obj4.lastName="the planet";
obj4.friends=["tommy","scooby","tuffy"];
for (let prop in obj4) {
    let isMyKey = obj4.hasOwnProperty(prop);
    if (isMyKey) {
        console.log(prop);
    }
}

let arrOfProp = Object.keys(obj4);
let arrOfVal = Object.values(obj4);
let arrOfArr = Object.entries(obj4);
console.log(arrOfProp);
console.log(arrOfVal);
console.log(arrOfArr);
arrOfProp.forEach((prop)=>console.log(prop+"  "+obj4[prop]));
arrOfArr.forEach(([key, value])=>console.log(key+" "+value));