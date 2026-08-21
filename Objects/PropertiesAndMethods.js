let student = {
    name : "Riththi",
    age : 22
};               //name and age are properties and Riththi and 22 are their values.

//Properties Can Have Different Data Types
let details = {
    name: "Varshi",
    age: 21,
    isStudent: true,
    marks: [80, 75, 90]
};
console.log(details);

//Changing a Property
details.age = 20;
console.log(details.age);

//Adding Properties
details.city = "Chavakachcheri";
console.log(details);

//Method - A property can contain a function.
let person = {
    name: "Rithu",

    greet: function() {
        console.log("Hello!");
    }
};
console.log(person);
//Calling an Object Method
person.greet();
console.log(person.greet);

//Modern Method Syntax
let persons = {
    greet() {
        console.log("Hello!");
    }
};

//Methods Can Work With Properties
let id = {
    name: "Ramshi",
    greet() {
        console.log("Hello " + this.name);
    }
};
id.greet();       //Hello Ramshi

//Example - create a bank account:
let account = {
    owner: "Ravi",
    balance: 5000,

    deposit(amount) {
        this.balance += amount;
    },

    showBalance() {
        console.log("Balance:", this.balance);
    }
};
account.showBalance();