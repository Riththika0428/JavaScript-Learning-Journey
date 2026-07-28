const greet = function(){
     console.log("Hello JavaScript!!");
};
greet();


const welcome = function(){
    console.log("Welcome Riththi");
};
welcome();


//Named Function Expression
const hello = function sayHello(){
    console.log("Hello Riththi");
};
hello();


//Function expression with parameters
const greetPerson = function(name){
    console.log("Hello" + ' ' + name);
}
greetPerson("Riththika");


//Function Expression with Multiple Parameters
const add = function(a,b){
    console.log(a+b);
};
add(10,20);


//Function Expression with Return
const multiply = function(x,y){
    return x*y;
};
let result = multiply(4,3);
console.log(result);


//Storing Different Functions
const square = function(num) {
    return num * num;
};
const cube = function(num) {
    return num * num * num;
};
console.log(square(4));
console.log(cube(4));