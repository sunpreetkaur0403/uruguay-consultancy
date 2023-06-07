// 1. What are loops?
// Sometimes we want to run the same code multiple times, instead fo writing it manually, I create a loop

// for loop

// This is not only time consuming, but error prone, if I want to console.log numbers from 1 to 100, I would need to add 95 more lines of code -> not easy to make changes
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// 2. Why do we need them?
// so it's quicker to do something multiple times, easier to implement changes, less prone to errors

// FOR LOOP
for (let i = 1; i < 6; i++) {
    // here I will put the code I want to run
    console.log(i, "from for loop");
}

// let i = 1;
// initial value

// i < 6
// condition -> loop will run until condition is no longer true

// i++
// incrementing i so loop doesn't run forever

// first iteration

// i = 1;
// console.log(1)
// after the log i got updated i++ -> 2
// i is still less than 6

// second iteration
// console.log(2)
// i gets updated -> 3
// i is still less than 6

// third iteration
// i = 3
// console.log(3)
// updating i -> 4
// i is still less than 6

// fourth iteration
// i = 4
// console.log(4)
// updating i  -> 5
// i is still less than 6

// fifth iteration
// i = 5
// console.log(5)
// updating i -> 6
// is 6 less than 6? -> NO SO my loop stops running (condition is FALSE)

// while loop
// I can use it the same way I would use a for loop
let i = 1;

while (i < 6) {
    // this is the code that will run
    // until the condition is no longer true
    console.log(i, "from while loop");
    i++;
}

// I can use it when I don't know how many iterations I will need

// lets generate a random number
// I want that number to be 5
// Math.random

let num = Math.ceil(Math.random() * 10);
console.log(num);

while (num !== 5) {
    console.log(`The random number is ${num}`);
    num = Math.ceil(Math.random() * 10);
}

console.log(num);