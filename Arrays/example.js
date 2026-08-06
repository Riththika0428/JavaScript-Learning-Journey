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