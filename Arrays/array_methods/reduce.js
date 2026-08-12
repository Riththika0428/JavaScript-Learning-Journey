//calculate the total
let numbers = [10, 20, 30, 40];
let total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);
console.log(total);                  //100

let products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 100 }
];
let totalPrice = products.reduce((sum, product) => {
    return sum + product.price;
}, 0);
console.log(totalPrice);

let cart = [
    { name: "Laptop", price: 120000, quantity: 1 },
    { name: "Mouse", price: 5000, quantity: 2 },
    { name: "Keyboard", price: 8000, quantity: 1 }
];
let Total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
}, 0);

console.log(Total);