// console.log()
console.log("Hello World!");

//variables
let name = "Varshi"
let age = 22;
console.log(name);
console.log(age);

const PI = 3.14159; //can not change

//Data Types
let myName = "Riththi"; //string
let myAge = 22;        //number
let isStudent = true;  //boolean
let x;                 //undefined
let data = null;       //null

let student = {
    name: "Riththi",    //object
    age: 22
};

let colors = ["Red","Blue","Green"]; //array

//typeof Operator
console.log(typeof myName);   //string
console.log(typeof myAge);    //number
console.log(typeof isStudent); //boolean
console.log(typeof x);        //undefined
console.log(typeof data);    //object
console.log(typeof student); //object
console.log(typeof colors);  //object

//Relational operators
console.log(5>6); //false

let num = 7>6;
console.log(num); //true

let num1 = 6<=6;
console.log(num1); //true

let value1 = "3";
let value2 = 3;
console.log(value1==value2);  //true  [beacuse it check the value only not the data type]
console.log(value1===value2); //false [because it check the value and data type]


//Logical operators

// In AND operator if both conditions are true we get true otherwise false
// In OR operator even if one is condition is true we get true otherwise false
// In NOT operator the result will be reversed, if the condition is true we get falsevand if the condition is false we get true

let a = 8;
let b = 9;
let c = 10;

console.log(a<b && b<c); //true
console.log(a>b && a<c); //false
console.log(a>c || b<c); //true
console.log(!(a>c));       //true









