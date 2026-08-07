let fruitss = ["Apple", "Orange", "Banana"];

fruitss.forEach(function(fruit) {
    console.log(fruit);
});

fruitss.forEach((fruit, index) => {
    console.log(index, fruit);
});                                  //0 Apple  1 Orange  2 Banana

fruitss.forEach((fruit, index, array) => {
    console.log(array);
});

let cart = [
    "Laptop",
    "Mouse",
    "Keyboard"
];
cart.forEach((item) => {
    console.log("Product:", item);
});


let students = [
    "Riththi",
    "Varshi",
    "Ramshi",
    "Rithu"
];
students.forEach((student) => {
    console.log(student);
});


let users = [
    {
        name: "Ramshi",
        age: 20
    },
    {
        name: "Vaishu",
        age: 20
    },
    {
        name: "Rithu",
        age: 17
    }
];
users.forEach((user) => {
    console.log(user.name);
});


let numbers = [10, 20, 30, 40];
let sum = 0;
numbers.forEach((number) => {
    sum += number;
});
console.log(sum);