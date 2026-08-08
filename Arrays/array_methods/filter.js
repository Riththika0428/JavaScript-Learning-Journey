let numbers = [10, 20, 30, 40];
let result = numbers.filter(number => number > 20);
console.log(result);              //[30, 40]

let marks = [45, 55, 60, 35, 80];
let passed = marks.filter(mark => mark >= 50);
console.log(passed);

let values = [1, 2, 3, 4, 5, 6];
let evenNumbers = values.filter(value => value % 2 === 0);
console.log(evenNumbers);

let fruits = ["Apple", "Banana", "Mango", "Orange"];
let results = fruits.filter(fruit => fruit.length > 5);
console.log(results);                    //['Banana', 'Orange']

let students = [
    { name: "John", marks: 80 },
    { name: "Alice", marks: 45 },
    { name: "David", marks: 70 },
    { name: "Emma", marks: 30 }
];
let passedStudents = students.filter(student => student.marks >= 50);
console.log(passedStudents);

let products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 100 },
    { name: "Monitor", price: 300 }
];
let affordableProducts = products.filter(product => product.price <= 300);
console.log(affordableProducts);

//Combining filter() and map()
let persons = [
    { name: "John", marks: 80 },
    { name: "Alice", marks: 45 },
    { name: "David", marks: 70 }
];
let Result = students
    .filter(person => person.marks >= 50)
    .map(person => person.name);
console.log(Result);              //[ 'John', 'David' ]

//Search Feature
let items = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor"
];
let search = "Mo";
let output = items.filter(item =>
    item.startsWith(search)
);
console.log(output);