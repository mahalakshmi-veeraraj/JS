console.log("before");
const cb1 = () => {
    console.log("I am cb1");
}
const cb2 = () => {
    console.log("I am cb2");
}
const cb3 = () => {
    console.log("I am cb3");
}
setTimeout(cb1,1000);
setTimeout(cb2,2000);
setTimeout(cb3,1000);