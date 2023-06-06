// +, -, *, /
// working with numbers
let value;
value = 10 + 10;
console.log(value);

value = 10 * 10;
console.log(value);

value = 10 - 2;
console.log(value);

value = 10 / 2;
console.log(value);

// ** - power
console.log(2 ** 3);
// we have access to Math
console.log(Math.pow(2, 3));

// %
// remainder, modulus
console.log(9 % 2);

// we can check if a number is even or odd
// if the modulus gives us 0 -> our number is even
console.log(4 % 2);

// if modulus returns 1, it's an odd number
console.log(5 % 2);

// this will give us back the last digit
console.log(18 % 10);
console.log(201 % 10);

// assignment operators
// this is the same as doing value = value + 2;
value += 2;
console.log(value);

// this is the same as value = value - 3;
value -= 3;
console.log(value);

// value = value * 10;
value *= 10;
console.log(value);

// value = value / 5;
value /= 5;
console.log(value);

// incrementor and decrementor

// returns the alerted value
console.log(++value);
console.log(value);

// changes the value, but returns the previous value
console.log(value++);
console.log(value);

console.log(--value);
console.log(value);

console.log(value--);
console.log(value);

// working with strings
let myName = "Sunpreet";

console.log("hi, " + myName);

const fullSentence = `Hello, my name is ${myName}`;
console.log(fullSentence);

let num = 1.5;

console.log(Math.round(num));

console.log(Math.floor(num));

console.log(Math.ceil(num));

let num2 = 1.2345678;

console.log(typeof num2.toFixed(2));