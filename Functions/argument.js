//Variables as Arguments
let x = 20;
let y = 30;

function add(a, b) {
    console.log(a + b);
}
add(x, y);

//Passing a Function as an Argument
function greet(name) {
    console.log("Hello " + name);
}
function processUser(callback) {
    callback("Riththika");
}
processUser(greet);