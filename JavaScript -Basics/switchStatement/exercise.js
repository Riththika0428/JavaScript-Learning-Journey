//Print the month name for numbers 1-12
let month = 5

switch(month){
    case 1:
       console.log("January");
       break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid Number");
}

//Display the day of the week from numbers 1-7
let week = 6 

switch(week){
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
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Number! Enter between 1 and 7");     
}

//Create a traffic light programme (red, yellow, green)
let color = "Red";

switch(color){
    case "Red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("Ready to go");
        break;
    case "Green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
}

//Build a simple calculator (+, -, *, /)
// let num1 = 20;
// let num2 = 5;
// let operator = "+";

// switch(operator){
//     case "+":
//         console.log(num1 + num2);
//         break;
//     case "-":
//         console.log(num1 - num2);
//         break;
//     case "*":
//         console.log(num1 * num2);
//         break;
//     case "/":
//         if(num2!==0){
//             console.log(num1/num2);
//         }
//         else{
//             console.log("Error:can not divide by zero");
//         }
//         break;
//     default:
//         console.log("Invalid Operator!");
// }

//Convert grades (A, B, C, D, F)into messages
let garde = "A";

switch(garde){
    case "A":
       console.log("Pass with 'A' garde");
       break;
    case "B":
       console.log("Pass with 'B' garde");
       break;
    case "C":
        console.log("Pass with 'C' grade");
        break;
    case "D":
        console.log("Pass with 'D' grade");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log("Invalid grade");
}