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
console.log(greet("Riththi"))