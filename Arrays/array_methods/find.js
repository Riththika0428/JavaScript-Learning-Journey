let numbers = [5, 10, 15, 20];
let result = numbers.find(number => number > 10);
console.log(result);                    //15

//Finding a Number
let values = [10, 20, 30, 40];
let results = values.find(value => value === 30);
console.log(results);

//What If Nothing Is Found?
let marks = [20, 40, 60, 75];
let output = marks.find(mark => mark === 85);
console.log(output);          //undefined

//find() with Strings
let fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange"
];
let Result = fruits.find(fruit => fruit.startsWith("M"));
console.log(Result);

//find() with Objects
let users = [
    {
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Alice"
    },
    {
        id: 3,
        name: "David"
    }
];
let user = users.find(user => user.id === 2);
console.log(user);
console.log(user.name);

//Product search
let products = [
    {
        id: 101,
        name: "Laptop",
        price: 120000
    },
    {
        id: 102,
        name: "Mouse",
        price: 5000
    },
    {
        id: 103,
        name: "Keyboard",
        price: 8000
    }
];
let product = products.find(product => product.id === 102);
console.log(product);     //{ id: 102, name: 'Mouse', price: 5000 }
console.log(product.name);  //Mouse
console.log(product.price); //5000

//find() with Multiple Conditions
let students = [
    { name: "John", age: 20, marks: 80 },
    { name: "Alice", age: 21, marks: 45 },
    { name: "David", age: 22, marks: 70 }
];
let student = students.find(
    student => student.age > 20 && student.marks >= 50
);
console.log(student);

//Checking if find() Found Something
let userss = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" }
];
let User = userss.find(user => user.id === 5);
if (User) {
    console.log(user.name);
} else {
    console.log("User not found");
}