let numbers = [10, 20, 30, 40];
let result = numbers.every(number => number > 5);
console.log(result);                //true(Every number is greater than 5)

let marks = [60, 70, 40, 90];
let passed = marks.every(mark => mark >= 50);
console.log(passed);                //false(Just one element failing makes every() return false.)

let names = ["John", "Alice", "David"];
let Result = names.every(name => name.length >= 4);
console.log(Result);