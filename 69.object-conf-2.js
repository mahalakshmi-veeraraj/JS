// giving similar permission to all the keys in the entire object.
// prevent extenstions: 

let config = {
    appName:"scaler.com",
    database:{
        host:"127.0.0.1",
        name:"mainDb",
        user:"root",
        pwd:"admin"
    }
}

// CRUD. Whenever we create an object, we can perform the basic CRUD operations.
// console.log(config.appName);
// config.tempServer="Scaler.com";
// config.appName="interviewbit.com";
// delete config.appName;
// console.log(config);

// PREVENT EXTENSIONS - prevent the extension of object. Create - Not Possible. Read, Update, Delete - Possible.
// new property cannot be added.
console.log("Object Prevent Extensions")
let nonExtendableObject = Object.preventExtensions(config); // This will not work for nested object and for that you will need to again code.
let nonExtendableObjectNested = Object.preventExtensions(config.database);
nonExtendableObject.tempServer="interviewbit.com"; // I cannot create.
nonExtendableObject.appName="https://scaler.com"; // I can update.
console.log(nonExtendableObject.appName); // I can read.
console.log(nonExtendableObject);
delete nonExtendableObject.appName; // I can delete.
console.log(nonExtendableObject);
// nonExtendableObject and config are pointing to the same object only but permissions are only updated now.

config = {
    appName:"scaler.com",
    database:{
        host:"127.0.0.1",
        name:"mainDb",
        user:"root",
        pwd:"admin"
    }
}

// Object.seal.
// Can only update.
// Cannot Create Delete.
console.log("Object Seal");
let sealObject = Object.seal(config);
let sealObjectNested = Object.seal(config.database);
sealObject.tempServer = "interviewbit.com"; // I cannot create.
sealObject.appName="https:scaler.com/topics"; // I can update.
delete sealObject.appName; // I cannot delete.
console.log(sealObject.appName); // I can read.
console.log(sealObject);

config = {
    appName:"scaler.com",
    database:{
        host:"127.0.0.1",
        name:"mainDb",
        user:"root",
        pwd:"admin"
    }
}

// Freeze.
// Can only read.
// Cannot Create, Update, Delete.
console.log("Freeze object")
let freezeObject = Object.freeze(config);
freezeObject.tempServer = "tempServer";
freezeObject.appName="https:scaler.com/tttt";
delete freezeObject.appName;
console.log(freezeObject);