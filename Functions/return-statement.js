function add(a,b){
    return a+b
}
let result = add(20, 15);
console.log(result);


//Without return
function sum(a,b){
    console.log(a+b);                       //30
}
let total = sum(100,200);
console.log(total);                         //undefined


//Return a Number
function square(num) {
    return num * num;
}
console.log(square(6));


//Return a String
function greet(name){
    return "Hello" + ' ' + name;
}
console.log(greet("Riththi"));


//Return a Boolean
function isAdult(age){
    return age>=18;
}
console.log(isAdult(22));
console.log(isAdult(17));


//Return an Array
function colors() {
    return ["Red", "Green", "Blue"];
}
console.log(colors());


//Return an Object
function student() {
    return {
        name: "Riththika",
        age: 22
    };
}
console.log(student());


//Returning Expressions
function area(length, width) {
    return length * width;
}
console.log(area(8, 4));


//Returning Variables
function add(a, b) {
    let sum = a + b;

    return sum;
}
console.log(add(20, 15));


//Returning Function Results
function square(num) {
    return num * num;
}
function cube(num) {
    return square(num) * num;
}
console.log(cube(3));


//Multiple return statement
function check(num) {

    if (num > 0) {
        return "Positive";
    }
    return "Zero or Negative";
}
console.log(check(10));
console.log(check(-5));



//Returning Based on Conditions
function passOrFail(mark) {

    if (mark >= 50) {
        return "Pass";
    }
    return "Fail";
}
console.log(passOrFail(75));
console.log(passOrFail(35));



//Using Returned Values in Calculations
function add(a, b) {
    return a + b;
}
let totals = add(20, 30);
console.log(total * 2);
