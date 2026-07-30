let stu = []   
console.log(stu);    //Empty array
           

//Creating Arrays
let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits);

let marks = [23, 78, 90];
console.log(marks);

let data = ["Riththi", 22, "IT"];     //Mixed Data Types
console.log(data);


//Array index
let person = ["Riththi", "Varshi", "Rithu", "Ramshi"];
console.log(person[0]);
console.log(person[1]);
console.log(person[2]);
console.log(person[3]);

//Changing an Element
person[1] = "Varshini";
console.log(person);

//Array length
console.log(person.length)

//Last element
console.log(person[person.length-1]);


//Adding Elements
//push() - Adds an item to the end.
person.push("Thashmy");
console.log(person);

//unshift() - Adds an item to the beginning.
person.unshift("Venu");
console.log(person);


//Removing Element
//pop() - Removes the last element.
person.pop();
console.log(person);

//shift() - Removes the first element.
person.shift();
console.log(person);


//Looping Through Arrays
let fruit = ["Apple", "Orange", "Banana", "Pineapple"];
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}



//includes()
console.log(fruit.includes("Banana"));
console.log(fruit.includes("Mango"));



//slice() - Returns a new array without changing the original.
let result = fruit.slice();
console.log(result);

let result1 = fruit.slice(1, 3);
console.log(result1);

console.log(fruit);


//splice() - changes the original array
let numbers = [10, 20, 30, 40];
numbers.splice(1, 2);
console.log(numbers);    //Remove elements : [10, 40]

numbers.splice(1, 0, 20, 30);
console.log(numbers);    //Add elements : [10, 20, 30, 40]


//Arrays of Objects
let students = [
    {
        name: "Riththi",
        age: 21
    },
    {
        name: "Aishu",
        age: 22
    }
];
console.log(students[0].name);   //Riththi
console.log(students[1].age);    //22


const Fruits = ["Apple", "Orange"];
Fruits.push("Banana"); // Allowed
// Fruits = ["Mango"]; // Error: Cannot reassign a const variable
