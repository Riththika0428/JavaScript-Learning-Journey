let student = {
    name: "Riththi",
    age: 22,

    address: {
        city: "Jaffna",
        country: "Sri Lanka"
    }
};
console.log(student);
console.log(student.address.city);      //Jaffna
//Adding Properties to a Nested Object
student.address.town = "Chavakachcheri";
console.log(student.address.town);
console.log(student);

//Nested Objects + Methods
let person = {
    name: "Ravi",
    address: {
        city: "Jaffna",
        showCity() {
            console.log(this.city);
        }
    }
};
person.address.showCity();

//Nested Objects + Arrays
let studentDetail = {
    name: "Rithu",

    subjects: ["JavaScript", "Python", "Database"]
};
console.log(studentDetail.subjects[0]);

//Arrays of Object
let students = [
    {
        name: "Ravi",
        age: 21
    },
    {
        name: "Kamal",
        age: 22
    },
    {
        name: "Nimal",
        age: 20
    }
];

