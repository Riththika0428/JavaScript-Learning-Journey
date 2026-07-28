//Remove the function keyword
//Add => after the parantheses
const greet = () =>{
    console.log("Hello");
};
greet();


//Arrow Function with One Parameter
const hello = (name) => {
    console.log("Hello " + name);
};
hello("Riththika");    //if there is only one parameter () parantheses are optional.


//Multiple Parameters
const add = (a, b) => {
    console.log(a + b);
};
add(10, 20);


//No Parameters
const welcome = () => {
    console.log("Welcome!");
};
welcome();


//Arrow Function with return
const multiply = (a, b) => {
    return a * b;
};
let result = multiply(5, 6);
console.log(result);


//Implicit Return
const addVal = (a, b) => a + b;
console.log(addVal(20, 30));


//Explicit Return
const square = (num) => {
    return num * num;
};


//Returning an Object
const createUser = () => ({
    name: "Riththika",
    age: 22
});
console.log(createUser());


//Arrow Functions with Array Methods
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
    console.log(number);
});