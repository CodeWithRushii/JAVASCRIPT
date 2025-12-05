//do-while loop 1
document.write("<h2>Counting from 1 to 10 using do-while loop</h2>");
let num = 1;
do {
    document.write("<h3>number is: " + num + "</h3>");
    num++; 
} while (num <= 10);

//do-while loop 2

document.write("<hr>");
document.write("<h2>Counting from 10 to 1 using do-while loop</h2>");
let count = 10;
do {
    document.write("<h3>count is: " + count + "</h3>");
    count--; 
} while (count >= 1);

//do-while loop 3

document.write("<hr>");
document.write("<h2>Even numbers between 1 to 20 using do-while loop</h2>");
let i = 1;
do {
    if (i % 2 === 0) {
        document.write("<h3>even number: " + i + "</h3>");
    }
    i++; 
} while (i <= 20);

//do-while loop 4

document.write("<hr>");
document.write("<h2>Odd numbers between 1 to 20 using do-while loop</h2>");
let j = 1;
do {
    if (j % 2 !== 0) {
        document.write("<h3>odd number: " + j + "</h3>");
    }
    j++; 
} while (j <= 20);

//do-while loop 5

document.write("<hr>");
document.write("<h2>Multiplication Table of 5 using do-while loop</h2>");
let k = 1;
do {
    let result = 5 * k;
    document.write("<h3>5 x " + k + " = " + result + "</h3>");
    k++; 
} while (k <= 10);

//do-while loop 6

document.write("<hr>");
document.write("<h2>Multiplication Table of 5 using do-while loop</h2>");
let n = 5;
let factorial = 1;
do {
    factorial *= n; 
    n--; 
} while (n >= 1);

//do-while loop 7

document.write("<h3>Factorial of 5 is: " + factorial + "</h3>");

document.write("<hr>");
document.write("<h2>Sum of first 10 natural numbers</h2>");
let m = 1;
let sum = 0;
do {
    sum += m;
    m++; 
} while (m <= 10);

//do-while loop 8

document.write("<h3>Sum of first 10 natural numbers is: " + sum + "</h3>");

document.write("<hr>");
document.write("<h2>Reverse a number 12345</h2>");
let number = 12345;
let reversedNumber = 0;
do {
    let digit = number % 10;
    reversedNumber = reversedNumber * 10 + digit;
    number = Math.floor(number / 10);
} while (number > 0);

document.write("<h3>Reversed Number is: " + reversedNumber + "</h3>");
document.write("<hr>");
