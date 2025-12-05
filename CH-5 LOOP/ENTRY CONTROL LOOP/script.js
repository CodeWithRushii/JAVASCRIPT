// while loop 1
document.write("<h2>Counting from 1 to 10</h2>");
let num = 1;

while (num <= 10) {
    document.write("<h3>number is: " + num + "</h3>");
    num++; 
}

// while loop 2

document.write("<hr>");
document.write("<h2>Counting from 10 to 1</h2>");
let count = 10;
while (count >= 1) {
    document.write("<h3>count is: " + count + "</h3>");
    count--; 
}

// while loop 3

document.write("<hr>");
document.write("<h2>Even numbers between 1 to 50</h2>");
let i = 1;
while (i <= 50) {
    if (i % 2 === 0) {
        document.write("<h3>even number: " + i + "</h3>");
    }
    i++; 
}

// while loop 4

document.write("<hr>");
document.write("<h2>Odd numbers between 1 to 50</h2>");
let j = 1;
while (j <= 50) {
    if (j % 2 !== 0) {
        document.write("<h3>odd number: " + j + "</h3>");
    }
    j++; 
}

// while loop 5

document.write("<hr>");
document.write("<h2>Multiplication Table of 5</h2>");
let k = 1;
while (k <= 10) {
    let result = 5 * k;
    document.write("<h3>5 x " + k + " = " + result + "</h3>");
    k++; 
}

// while loop 6

document.write("<hr>");
document.write("<h2>Factorial of 5</h2>");
let n = 5;
let factorial = 1;
while (n >= 1) {
    factorial *= n; 
    n--; 
}

// while loop 7

document.write("<h3>Factorial of 5 is: " + factorial + "</h3>");

document.write("<hr>");
document.write("<h2>Sum of first 10 natural numbers</h2>");

let m = 1;
let sum = 0;

while (m <= 10) {
    sum += m; 
    m++; 
}

// while loop 8

document.write("<h3>Sum of first 10 natural numbers is: " + sum + "</h3>");
document.write("<hr>");
document.write("<h2>Reverse a number 12345</h2>");

let number = 12345;
let reversedNumber = 0;
while (number > 0) {
    let digit = number % 10;
    reversedNumber = reversedNumber * 10 + digit;
    number = Math.floor(number / 10);
}

// while loop 9

document.write("<h3>Reversed Number is: " + reversedNumber + "</h3>");
document.write("<hr>");
document.write("<h2>Fibonacci Series up to 10 terms</h2>");
let terms = 10;
let a = 0, b = 1;
let countTerms = 0;
while (countTerms < terms) {
    document.write("<h3>" + a + "</h3>");
    let nextTerm = a + b;
    a = b;
    b = nextTerm;
    countTerms++; 
}

// while loop 10

document.write("<hr>");
document.write("<h2>Finding prime numbers between 1 to 20</h2>");
let numToCheck = 2;
while (numToCheck <= 20) {
    let isPrime = true;
    let divisor = 2;
    while (divisor <= Math.sqrt(numToCheck)) {
        if (numToCheck % divisor === 0) {
            isPrime = false;
            break;
        }
        divisor++;
    }
    if (isPrime) {
        document.write("<h3>Prime number: " + numToCheck + "</h3>");
    }
    numToCheck++; 
}

// for loop 1

document.write("<hr>");
document.write("<h2>Using for loop to print numbers from 1 to 10</h2>");
for (let p = 1; p <= 10; p++) {
    document.write("<h3>number is: " + p + "</h3>");
}

// for loop 2

document.write("<hr>");
document.write("<h2>Using for loop to print even numbers between 1 to 50</h2>");
for (let q = 1; q <= 50; q++) {
    if (q % 2 === 0) {
        document.write("<h3>even number: " + q + "</h3>");
    }
}

// for loop 3

document.write("<hr>");
document.write("<h2>Using for loop to print odd numbers between 1 to 50</h2>");
for (let r = 1; r <= 50; r++) {
    if (r % 2 !== 0) {
        document.write("<h3>odd number: " + r + "</h3>");
    }
}

// for loop 4

document.write("<hr>");
document.write("<h2>Using for loop to print Multiplication Table of 7</h2>");
for (let s = 1; s <= 10; s++) {
    let result = 7 * s;
    document.write("<h3>7 x " + s + " = " + result + "</h3>");
}

// for loop 5

document.write("<hr>");
document.write("<h2>Using for loop to calculate Sum of first 20 natural numbers</h2>");
let totalSum = 0;
for (let t = 1; t <= 20; t++) {
    totalSum += t; 
}

// for loop 6

document.write("<h3>Sum of first 20 natural numbers is: " + totalSum + "</h3>");
document.write("<hr>");
document.write("<h2>Using for loop to find Factorial of 6</h2>");
let fact = 1;
for (let u = 6; u >= 1; u--) {
    fact *= u; 
}

// for loop 7

document.write("<h3>Factorial of 6 is: " + fact + "</h3>");

document.write("<hr>");
document.write("<h2>Using for loop to generate Fibonacci Series up to 15 terms</h2>");
let fibTerms = 15;
let x = 0, y = 1;

for (let v = 0; v < fibTerms; v++) {
    document.write("<h3>" + x + "</h3>");
    let nextFib = x + y;
    x = y;
    y = nextFib;
}

// for loop 8

document.write("<hr>");
document.write("<h2>Using for loop to find prime numbers between 1 to 30</h2>");

for (let numCheck = 2; numCheck <= 30; numCheck++) {
    let isPrimeNum = true;
    for (let div = 2; div <= Math.sqrt(numCheck); div++) {

        if (numCheck % div === 0) {
            isPrimeNum = false;
            break;
        }
    }
    if (isPrimeNum) {
        document.write("<h3>Prime number: " + numCheck + "</h3>");
    }
}

// for loop 9

document.write("<hr>");
document.write("<h2>Using for loop to reverse a number 67890</h2>");
let numToReverse = 67890;
let revNumber = 0;
for (; numToReverse > 0;) {
    let digit = numToReverse % 10;
    revNumber = revNumber * 10 + digit;
    numToReverse = Math.floor(numToReverse / 10);
}

// for loop 10

document.write("<h3>Reversed Number is: " + revNumber + "</h3>");

document.write("<hr>");
document.write("<h2>Using for loop to print multiplication tables from 1 to 5</h2>");
for (let table = 1; table <= 5; table++) {
    document.write("<h3>Multiplication Table of " + table + ":</h3>");
    for (let mult = 1; mult <= 10; mult++) {
        let res = table * mult;
        document.write("<h4>" + table + " x " + mult + " = " + res + "</h4>");
    }
    document.write("<br>");
}

document.write("<hr>");
document.write("<h2>End of Entry Control Loop Examples</h2>");



