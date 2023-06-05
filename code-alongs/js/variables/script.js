// const - stays the same, has the same value,c an't reassign the value
const myHeight = "160 cm";
console.log(myHeight);

console.log("My height is" + " " + myHeight);

console.log("You are " + myHeight + " tall");

// template string
console.log(`I am ${myHeight} tall.`);
// this gives me an error because I can't reassign a value to a const
// myHeight = "180 cm";

// console.log(myHeight);

// let - value can change, we can reassign it
let myName = "Martyna";
console.log("Hi " + myName);

myName = "Kate";
console.log("Hello, " + myName);
// prompt
// I want to get two variables from the user

// let number1 = prompt("First Number");
// console.log(number1);

// let number2 = prompt("Second number");
// console.log(number2);

// console.log(typeof number1);
// console.log(typeof number2);

// let answer;
// // We want to add two numbers
// answer = parseInt(number1) + parseInt(number2);

// // print the answer to the console
// console.log(answer);

// var (do not use)
// it is not scope safe, more will wait for for loops to talk more about var