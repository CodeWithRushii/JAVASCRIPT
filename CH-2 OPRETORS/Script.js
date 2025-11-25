// Helper to add a result line (label and highlighted value)
const outputBox = document.getElementById('outputBox');
function show(label, value) {
    const line = document.createElement('div');
    line.className = 'output-line';
    const lbl = document.createElement('div');
    lbl.className = 'label';
    lbl.textContent = label;
    const val = document.createElement('div');
    val.className = 'value';
    val.textContent = value;
    line.appendChild(lbl);
    line.appendChild(val);
    outputBox.appendChild(line);
}

console.log("JavaScript Operators Demonstration");

// Arithmetic Operators
let a = 10;
let b = 5;

show('Addition', a + b); // 15
show('Subtraction', a - b);
show('Multiplication', a * b);
show('Division', a / b);
show('Modulus', a % b);
show('Exponentiation', a ** b);

// Assignment Operators
let c = 20;
c += 5; // c = c + 5
show('c after += 5', c);
c -= 3;
show('c after -= 3', c);
c *= 2;
show('c after *= 2', c);
c /= 4;
show('c after /= 4', c);
c %= 6;
show('c after %= 6', c);
c **= 2;
show('c after **= 2', c);

// Comparison Operators
let x = 10;
let y = 20;
show('x == y', x == y);
show('x != y', x != y);
show('x === y', x === y);
show('x !== y', x !== y);
show('x > y', x > y);
show('x < y', x < y);
show('x >= y', x >= y);
show('x <= y', x <= y);

// Logical Operators
let p = true;
let q = false;
show('p && q', p && q);
show('p || q', p || q);
show('!p', !p);

// Increment and Decrement Operators
let m = 5;
show('m before increment', m);
m++;
show('m after increment', m);
m--;
show('m after decrement', m);

// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
show('Can vote', canVote);

// Also log to console for debugging
console.log({ a, b, c, x, y, p, q, m, age, canVote });