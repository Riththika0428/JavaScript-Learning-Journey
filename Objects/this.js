//this Can Access Multiple Properties
let student = {
    name: "Ravi",
    age: 22,
    course: "IT",

    showDetails() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
    }
};

student.showDetails();

//this Can Modify Properties
let person = {
    name: "Ravi",
    age: 22,

    birthday() {
        this.age++;
    }
};

person.birthday();
console.log(person.age);

//this With Multiple Objects
let person1 = {
    name: "Ravi",

    greet() {
        console.log("Hello " + this.name);
    }
};

let person2 = {
    name: "Kamal",

    greet() {
        console.log("Hello " + this.name);
    }
};

person1.greet();
person2.greet();