let student = {
    name: "Riththika",     //string
    age: 22,               //number
    course: "Information Technology",    
    isStudent: true,       //boolean
    marks: [80, 50, 78]    //array
};

//Accessing Object Properties
//Method 1 — Dot notation
let person = {
    name: "Riththi",
    age: 22
};
console.log(person.name);   //Riththi
console.log(person.age);    //22
//Bracket notation
console.log(person["name"]);

//Adding New Properties
person.course = "BIT";
    //OR
person["city"] = "Chavakachcheri";
console.log(person);

//Updating Properties
person.course = "IT";
console.log(person.course)

//Deleting Properties
delete person.age;
console.log(person);

//EXercise example
let car = {
    brand: "Toyota",
    year: 2024,
    price: 97372000
};
console.log(car.brand);
console.log(car.price);