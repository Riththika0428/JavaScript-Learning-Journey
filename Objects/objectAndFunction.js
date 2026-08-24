let student = {
    name: "Riththi",
    age: 21
};

function displayStudent(student) {
    console.log(student.name);
    console.log(student.age);
}

displayStudent(student);

let Student = {
    name: "Riththi",
    marks: 85
};

function checkResult(Student) {
    if (Student.marks >= 50) {
        console.log(Student.name + " passed");
    } else {
        console.log(Student.name + " failed");
    }
}

checkResult(Student);

//Functions Can Modify Objects
let user = {
    name: "Varshi",
    age: 20
};

function increaseAge(user) {
    user.age = user.age + 1;
}

increaseAge(user);
console.log(user.age);

//Object Methods
let person = {
    name: "Rithu",

    greet: function() {
        console.log("Hello!");
    }
};
person.greet();

//Methods Can Use Object Properties
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

//Function Returning an Object
function createStudent(name, age) {
    return {
        name: name,
        age: age
    };
}

let student1 = createStudent("Ravi", 21);
let student2 = createStudent("Kamal", 22);

console.log(student1);
console.log(student2);

//Objects + Functions + Arrays
let students = [
    {
        name: "Ravi",
        marks: 85
    },
    {
        name: "Kamal",
        marks: 72
    },
    {
        name: "Nimal",
        marks: 45
    }
];
function checkResult(student) {
    if (student.marks >= 50) {
        console.log(student.name + " passed");
    } else {
        console.log(student.name + " failed");
    }
};
for (let student of students) {
    checkResult(student);
}