/*
if (condition) {
    // code to be executed if condition is true
}

//if...else statement
if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is false
}   

// if else leader statement
if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else {
    // code to be executed if both condition1 and condition2 are false
}

// nested if statement
if (condition1) {
    if (condition2) {
        // code to be executed if both condition1 and condition2 are true
    }else {
        // code to be executed if condition1 is true and condition2 is false
    }
}
else {
    // code to be executed if condition1 is false
}
*/

let age = +prompt("Enter your age:");

if (age < 0) {
    console.log("Invalid age");
} else if (age > 100) {
    console.log("Age exceeds normal human lifespan");
}
else if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}

// Nested if example
let num = +prompt("Enter a number:");

if (num >= 0) {
    if (num === 0) {
        console.log("The number is zero.");
    } else {
        console.log("The number is positive.");
    }
} else {
    console.log("The number is negative.");
}