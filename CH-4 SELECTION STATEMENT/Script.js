document.write("<h1>Select Operation<br></h1>");
let choice = +prompt("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\nEnter your choice (1-4):");

let a = +prompt("Enter first number:");
let b = +prompt("Enter second number:");

switch (choice) {
    case 1:
        document.write(`<h2>Addition of ${a} and ${b} is: ${a + b}</h2>`);
        break;
    case 2:
        document.write(`<h2>Subtraction of ${a} and ${b} is: ${a - b}</h2>`);
        break;
    case 3:
        document.write(`<h2>Multiplication of ${a} and ${b} is: ${a * b}</h2>`);
        break;
    case 4:
        if (b !== 0) {
            document.write(`<h2>Division of ${a} by ${b} is: ${a / b}</h2>`);
        } else {
            document.write("<h2> Division by zero is not allowed.</h2>");
        }
        break;
    default:
        document.write("<h2>Invalid choice! Please select a valid operation.</h2>");
}   