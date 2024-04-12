// Write a function that checks if a given value is an instance of a given class or superclass. 
// For this problem, an object is considered an instance of a given class if that object has access to 
// that class's methods.

// There are no constriants on the data types that can be passed to the function. For example, the value or
// the class should be undefined. 

function checkIfInstanceOf(obj, classFunction) {
    if(!obj) return false;

    if(obj instanceof classFunction) {
        return true;
    }    
    else {
        if(checkIfInstanceOf(Object.getPrototypeOf(obj), classFunction)) {
            return true;
        }
    }
    return false;
}

// Object.getPrototypeOf(obj) is same as obj.__proto__