// console.log
// check if my code works correct, execute some code snippets, check values of variables, etc.
console.log("It's linked correct");

// output an error-like content
// console.error("Something went wrong... :( ");

// output warnings
console.warn("Be careful");

// DATA TYPES

// Primitive data types - what are they?
// fundamental building block of a language
// can't be broken down any further
// most basic data type you have - number, string (sequences of characters)
// doesn't have any properties

// what primitive types do we have in js?
// 1. number ;
// 22;
// 23.67;
// -123;

// operations
console.log(10 + 2);
console.log(32 - 5);
console.log(2 * 8);
console.log(10 / 3);

console.log("hello" + " nology");
console.log("helloo" - "o"); // I get NaN back (not a number)
console.log("1" + 1);
console.log(typeof parseInt("1"));

// 2. BigInt
// when we want to be super precise, working with currencies
// we are working with huge values

// 3. string
// "hello";
// "hi"`nology`;

console.log(typeof "h");
console.log(typeof 234);

// 4. boolean
// true / false
console.log(typeof true);

// comparison operators - they result in booleans
console.log(10 > 5);
console.log(5 < 6);
console.log(10 >= 10);
console.log(9 <= 8);

// 5. undefined
// a lack of value, accidental
// we declared a variable but did not assign a value to it
let i;
console.log(i);
console.log(typeof undefined);

// 6. null
// a lack of value, on purpose
// be careful here !
console.log(typeof null);

// 7. symbol

console.log(typeof 15); // Prediction: number
console.log(typeof 5.5); // Prediction: number
// type conversion ent wrong, couldn't convert to a number
console.log(typeof NaN); // Prediction: number
console.log(typeof "hello"); // Prediction: string
console.log(typeof true); // Prediction: boolean
// != not equal to
// !==
console.log(1 !== "1");

// ==
// ===
console.log(2 === "2");
console.log(typeof (1 != 2)); // Prediction: boolean
console.log(typeof ("hamburger" + "s")); // Prediction: string
console.log(typeof ("hamburgers" - "s")); // Prediction: number -> "hamburgers" - "s"  NaN
console.log(typeof ("1" + "3")); // Prediction: string
console.log(typeof ("1" - "3")); // Prediction: number
console.log(typeof ("johnny" + 5)); // Prediction: string
console.log(typeof ("johnny" - 5)); // Prediction: NaN -> number
console.log(typeof (99 * "luftbaloons")); // Prediction: NaN -> number



console.log("It's linked correctly");

//
console.log(typeof 15); // Prediction: {your answer here} number
console.log(typeof 5.5); // Prediction: ...      number
console.log(typeof NaN); // Prediction:          number
console.log(typeof 'hello'); // Prediction:      string
console.log(typeof true); // Prediction:         boolean
console.log(typeof (1 != 2)); // Prediction:      boolean
console.log(typeof ('hamburger' + 's')); // Prediction:   string
console.log(typeof ('hamburgers' - 's')); // Prediction: NaN number
console.log(typeof ('1' + '3')); // Prediction:   string
console.log(typeof ('1' - '3')); // Prediction:    -2  number
console.log(typeof ('johnny' + 5)); // Prediction: string
console.log(typeof ('johnny' - 5)); // Prediction: NaN number
console.log(typeof (99 * 'luftbaloons')); // Prediction: Nan  number

//

// let number1 =prompt("First Number");
// console.log(number1);

// let number2 = prompt("Second Number");
// console.log(number2);

// let answer;
// answer = parseInt(number1) + parseInt(number2);
// console.log(answer);



let firstName = "Sunpreet";
let lastName = "Kaur";
let age = 28;
console.log("Hi, my name is "+firstName+" "+lastName+" and I am "+age+" years old.")