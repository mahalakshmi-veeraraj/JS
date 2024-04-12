// Example of nested closures.
let iamINGEC = 200;
function getFirstName(firstName) {
    console.log("I have got your first name");
    return function getLastName(lastName) {
        console.log("I have got your last name");
        return function greeter() {
            console.log(`Hi I am ${firstName} ${lastName}`);
            console.log("Hi GEC ", iamINGEC);
        }
    }
}

const lName = getFirstName("Mahalakshmi");
const greeter = lName("Veeraraj");
greeter();