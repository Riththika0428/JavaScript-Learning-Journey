let numbers = [10, 20, 30, 40];
let index = numbers.findIndex(number => number === 30);
console.log(index);                        //2

//What Happens If Nothing Is Found?
let Numbers = [10, 20, 30];
let Index = Numbers.findIndex(number => number === 100);
console.log(Index);                      //-1 (NO Match)

//Finding an Index with Objects
let students = [
    { id: 1, name: "John", marks: 80 },
    { id: 2, name: "Alice", marks: 75 },
    { id: 3, name: "David", marks: 90 }
];
let indexx = students.findIndex(student => student.id === 2);
console.log(indexx);

//Using findIndex() to Remove an Object
let persons = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "David" }
];
let findindex = persons.findIndex(person => person.id === 2);
persons.splice(index, 1);
console.log(persons);

//findIndex() with Strings
let fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange"
];
let Indexx = fruits.findIndex(
    fruit => fruit.startsWith("M")
);
console.log(Indexx);