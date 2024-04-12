let dog = {
    fName: "Tommy",
    breed: "Labrador",
    address: {
        street: "Vasant Vihar",
        city: "New Delhi"
    }
};
console.log(dog);
console.log(flattenAnObject(dog));
function flattenAnObject(object) {
    let flattenedObject = {};
    for (let prop in object) {
        if (typeof object[prop] !== 'object') {
            flattenedObject[prop] = object[prop];
        }
        else {
            let smallerObject = flattenAnObject(object[prop]);
            for (let subProp in smallerObject) {
                flattenedObject[prop +'.'+subProp] = smallerObject[subProp];
            }
        }
    }
    return flattenedObject;
}