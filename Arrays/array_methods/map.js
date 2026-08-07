//Double Each Number
let numbers = [1, 2, 3, 4];

let doubled = numbers.map((number) => {
    return number * 2;
});
console.log(doubled);
console.log(numbers);      //Original array


//Add 10 to Every Number
let marks = [60, 70, 80];

let newMarks = marks.map((mark) => {
    return mark + 10;
});
console.log(newMarks);


//Convert to Uppercase
let fruits = ["apple", "banana", "orange"];

let upper = fruits.map((fruit) => {
    return fruit.toUpperCase();
});
console.log(upper);


//Using Objects
let students = [
    {
        name: "Varshi",
        age: 20
    },
    {
        name: "Rithu",
        age: 17
    },
    {
        name: "Riththi",
        age: 22
    }
];
let names = students.map((student) => {
    return student.name;
});
console.log(names);


//Creating a New Object
let users = [
    {
        name: "John",
        age: 20
    },
    {
        name: "Alice",
        age: 25
    }
];

let updatedUsers = users.map((user) => {
    return {
        name: user.name,
        age: user.age,
        isAdult: user.age >= 18
    };
});
console.log(updatedUsers);


//Get the Index
let fruitss = ["Apple", "Orange", "Banana"];

let result = fruitss.map((fruit, index) => {
    return `${index + 1}. ${fruit}`;
});
console.log(result);


//Suppose an online store has these products
let products = [
    {
        name: "Laptop",
        price: 1000
    },
    {
        name: "Mouse",
        price: 50
    },
    {
        name: "Keyboard",
        price: 100
    }
];
let productNames = products.map(product => product.name);
console.log(productNames);


//In React, map() is commonly used to display lists.
const fruitsss = ["Apple", "Banana", "Orange"];

fruitsss.map((fruit) => {
    return <li>{fruit}</li>;
});