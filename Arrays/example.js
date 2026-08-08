let users = [
    { id: 1, name: "John", active: true },
    { id: 2, name: "Alice", active: false },
    { id: 3, name: "David", active: true }
];
let activeUsers = users.filter(user => user.active);
let names = activeUsers.map(user => user.name);
console.log(names);                //[ 'John', 'David' ]

// or
// let names = users
//     .filter(user => user.active)
//     .map(user => user.name);

// console.log(names);