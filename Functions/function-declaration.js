function functionName(){
    //code to execute
}

function greet(){
    console.log("Hello! Riththi, Welcome to JavaScript");
}
greet();

//Multiple Statements
function introduction(){
   console.log("Name: Riththika Baskaran");
   console.log("Course: BIT");
   console.log("Learning: JavaScript");
}
introduction();

//Calling a Function Multiple times
function welcome(){
    console.log("Welcome to JavaScript");
}
welcome();
welcome();
welcome();
//Instead of writing the same console.log() three times, write the function once and call it whenever needed.


//Function Declaration without Parameters
function showMessage(){
    console.log("Now Learning JavaScript");
}
showMessage();


//Function Declaration with Parameters
function greeting(name){
    console.log("Hello" + ' ' + name);
}
greeting("Riththi");


//Function Declaration with Return
function add(a,b){
    return a+b;
}
let result = add(10, 20);
console.log(result);


//Hoistiong
hello();
function hello(){
    console.log("Hello World!");
}

//Create a function named sayHello() that prints "Hello world"
function sayHello(){
    console.log("Hello World");
}
sayHello();


//Create a function named printName() that prints your name
function printName(){
    console.log("My name is Riththika Baskaran");
}
printName();