let numbers = [10, 20, 30, 40];
let result = numbers.some(number => number > 25);
console.log(result);                     //true

let fruits = ["Apple", "Banana", "Mango"];
let hasMango = fruits.some(fruit => fruit === "Mango");
let hasOrange = fruits.some(fruit => fruit === "Orange");
console.log(hasMango);                  //true
console.log(hasOrange);                 //false

//some() with Objects
let students = [
    { name: "John", marks: 45 },
    { name: "Alice", marks: 65 },
    { name: "David", marks: 80 }
];
let hasHighScorer = students.some(
    student => student.marks > 75
);
console.log(hasHighScorer);                 //true(Because David scored 80.)

let users = [
    { name: "John", role: "user" },
    { name: "Alice", role: "user" },
    { name: "David", role: "admin" }
];
let hasAdmin = users.some(user => user.role === "admin");
console.log(hasAdmin);

let usernames = [
    "john",
    "alice",
    "david",
    "emma"
];
let newUsername = "alice";
//Check if it already exist
let alreadyExists = usernames.some(
    username => username === newUsername
);
console.log(alreadyExists);      //true
if (alreadyExists) {
    console.log("Username already exists");
} else {
    console.log("Username is available");           //Username already exists
}