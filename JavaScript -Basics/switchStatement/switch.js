// Basic Switch
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    default:
        console.log("Invalid day");
}                                      //output : Wednesday

// Using Strings
let fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("Red fruit");
        break;

    case "banana":
        console.log("Yellow fruit");
        break;

    case "orange":
        console.log("Orange fruit");
        break;

    default:
        console.log("Unknown fruit");
}                                      //Output : Red fruit


// Default Case
let color = "blue";

switch (color) {
    case "red":
        console.log("Stop");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Color not found");
}                                     //Output : Color not found


// Multiple Cases Sharing One Block
let grade = "B";

switch (grade) {
    case "A":
    case "B":
    case "C":
        console.log("Pass");
        break;

    case "D":
    case "F":
        console.log("Fail");
        break;

    default:
        console.log("Invalid Grade");
}                                            //Output : Pass


// Switch With Expressions
let a = 10;
let b = 20;

switch (a + b) {
    case 20:
        console.log("Twenty");
        break;

    case 30:
        console.log("Thirty");
        break;

    default:
        console.log("Other");
}


// Strict Comparison (===)
// switch uses strict equality (===), so both the value and the data type must match.
let value = "10";

switch (value) {
    case 10:
        console.log("Number");
        break;

    case "10":
        console.log("String");
        break;
}

// switch(true) Pattern
let marks = 85;

switch (true) {
    case marks >= 90:
        console.log("Grade A");
        break;

    case marks >= 80:
        console.log("Grade B");
        break;

    case marks >= 70:
        console.log("Grade C");
        break;

    default:
        console.log("Fail");
}