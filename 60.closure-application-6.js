// Very good application of closure is to create private variable.
function createEventStack() {
    return {
        items : [],
        push : function(item) {
            if (item % 2 == 0) {
                this.items.push(item);
                console.log("Is pushed");
            }
            else {
                console.log("Please input event value");
            }
        },
        pop: function(item) {
            return this.items.pop();
        }
    }
}
const stack = createEventStack();
stack.push(10);
console.log(stack.items);
stack.items = [23, 99]; // Wanted to prevent this behaviour. Restrict the limit to access the variable.
console.log(stack.items);

function createEventStack2() {
    let items = []; // This is a private variable, no one can alter this. Everyone has to use push 
    // method to add things into this stack.
    return {
        push : function(item) {
            if (item % 2 == 0) {
                items.push(item);
                console.log("Is pushed");
            }
            else {
                console.log("Please input event value");
            }
        },
        pop: function(item) {
            return items.pop();
        }
    }
}
const stack2 = createEventStack2();
stack2.push(10);
console.log(stack2.items); // undefined.
stack2.items = [23, 99]; // Wanted to prevent this behaviour. Restrict the limit to access the variable.
console.log(stack2.items); // [23, 90]

