//Parameters are variables declared inside the parentheses () of a function definition. They act as placeholders that receive values (called arguments) when the function is called.
function greet(person){
    console.log("Hello" + ' ' + person);
}
greet("Riththi");
greet("Varshi");
greet("Rithu");

//Single Parameter
function square(num){
    console.log(num*num);
}
square(5);
square(10)

//Multiple parameter
function intro(name, age, course){
   console.log(name);
   console.log(age);
   console.log(course);
}
intro("Riththika", 22, "BIT");