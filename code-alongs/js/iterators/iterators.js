// 1. What are array iterators?
// built in methods/functions we can call on arrays that operate on each individual element of that array

// 2. Why should we use them?

// a lot less syntax to write, easier to read, easier to debug, less chance of making errors/creating bugs, indexes will be dealt with for us

// MAP

// What are callback functions?

// in js, a function is  a value, which means we pass it as parameter to a different function

function add(num1, num2) {
    console.log(`add function, num1 is ${num1}, num2 is ${num2}`);
    return num1 + num2;
}

const subtract = (a, b) => {
    console.log(`subtract, a is ${a}, b is ${b}`);
    return a - b;
};

function doMath(x, y, callback) {
    return callback(x, y);
}

console.log(doMath(2, 5, add));
console.log(doMath(10, 3, subtract));

// map takes a callback function as a parameter

// I have an array, I want a new array with every element incremented by 1

const numbers = [1, 2, 3, 4, 5, 6];

// I need to create a new array
const incrementedNums = [];

// I need to get the loop logic right, deal with indexes, make sure it's not an infinite loop
for (i = 0; i < numbers.length; i++) {
    incrementedNums.push(numbers[i] + 1);
}

console.log(incrementedNums);

// map is a method that returns a new array - no need to create an empty one, push to it like with a for loop

// map is an iterator - it will run on every element of my array, no need to write the logic myself

// map takes in a callback function

function addOne(num) {
    return num + 1;
}

const incrementedWIthMap = numbers.map(addOne);
console.log(incrementedWIthMap, "numbers incremented with map");

// I want a new array with numbers to the power of 2

function squareNum(num) {
    return num ** 2;
}

const numsSqure = [];
for (let i = 0; i < numbers.length; i++) {
    numsSqure.push(squareNum(numbers[i]));
}
console.log(numsSqure);

// map returns a new array of the same length - run the callback on every element

const squareNumWithMap = numbers.map(squareNum);
console.log(squareNumWithMap, "square nums array with map");

// I want a new array with double numbers
function doubleNum(num) {
    return num * 2;
}

const doubleArr = numbers.map(doubleNum);
console.log(doubleArr);

const anotherDoubleNums = numbers.map((apple) => {
    // here I need to write what I want to do with each element
    // I need to return it
    console.log(
        apple,
        "this is the first parameter of the callback, it is each element of teh array, starting at the first one"
    );
    return apple * 2;
});

console.log(anotherDoubleNums, "double numbers with map");

// we know tat with arrow functions we can skip {} and return if it's a one line function
const oneLineDoubleNums = numbers.map((num) => num * 2);
console.log(oneLineDoubleNums);

// You have an array of names all in lowercase you want a new array with all names but uppercase
const names = ["jack", "rachel", "bella", "anna"];

function upperCaseName(name) {
    return name.toUpperCase();
}
const upperCaseNames = names.map(upperCaseName);
console.log(upperCaseNames);

const lowercaseNames = ["john", "jane", "adam", "emma"];

const uppercaseNames = lowercaseNames.map((name) => name.toUpperCase());
console.log(uppercaseNames);

// You have an array of numbers, you want a new array with each number decremented by 5
const numbers2 = [10, 9, 8, 7, 6];

const newNumbers = numbers2.map((num) => num - 5);
console.log(newNumbers, numbers2, "numbers arrays");

// write our own map - DO NOT DO THIS IN REAL LIFE
const map = (arr, func) => {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        const currentItem = arr[i];
        const newVal = func(currentItem);
        newArr.push(newVal);
    }

    return newArr;
};

const numbers3 = [2, 3, 4];
const incBy5 = (num) => num + 5;

console.log(map(numbers3, incBy5));

const stringArr = ["hello", "hi", "nology"];

const mappedStringArr = stringArr.map((element, index, arr) => {
    console.log(element, "first param of my callback");
    console.log(
        index,
        "this is the current index I am at, the second param of map"
    );
    console.log(
        arr,
        "This is the entire array I am calling map on, the third param of map"
    );
});

// map returns a whole new array, it doesn't modify the original array
// ... spread syntax [...array]

// filter
// returns a new array
// returns items that meet a certain condition
// takes in a callback function
// the function we pass to filter returns a single TRUE or FALSE for each element of the array
// returns an array where the result was truthy
const numbersToFilter = [2, 3, 4, 5, 9];

function isEven(num) {
    return num % 2 === 0;
}

const filteredNumbers = numbersToFilter.filter(isEven);
console.log(filteredNumbers);

const numsGreaterThanFour = numbersToFilter.filter((num) => num > 4);
console.log(numsGreaterThanFour);

const words = ["apple", "table", "pen", "cup"];

const threeLetterWords = words.filter((word, i, wholeArr) => {
    console.log(word);
    console.log(i);
    console.log(wholeArr);
    return word.length === 3;
});
console.log(threeLetterWords);

// our own filter - DO NOT DO THIS

const myFilter = (arr, funct) => {
    const newArray = [];

    for (let item of arr) {
        if (funct(item)) {
            newArray.push(item);
        }
    }

    return newArray;
};

// myFilter to get items with more than 3 letters
console.log(myFilter(words, (word) => word.length > 3));

// some more useful methods

// FIND
// returns a single value that matches ou condition

const fruit = ["pear", "banana", "grape", "apple"];
// find a fruit that's 4 letters long
const fourLetterFruit = fruit.find((f) => f.length === 4);

console.log(fourLetterFruit, "four letter fruit");

const fiveLetterFruit = fruit.find((f) => f.length === 5);
console.log(fiveLetterFruit, "five letter fruit");

// if I wanted all 5 letter fruit, I would need filter
const all5LetterFruit = fruit.filter((f) => f.length === 5);
console.log(all5LetterFruit, "all 5 letter fruit");

// EVERY
// check if all elements in an array meet a certain condition

const veg = ["leek", "corn", "kale", "cucumber"];
const areAll4Letetrs = veg.every((item) => item.length === 4);
console.log(areAll4Letetrs);

// SOME
// checks if at least one element meets a certain condition
const atLeastOne4LettersLong = veg.some((el) => el.length === 4);

console.log(atLeastOne4LettersLong);

const longerThan12Letters = veg.some((el) => el.length > 12);
console.log(longerThan12Letters);

// forEach

// iterates through every element of an array
// it doesn't return anything

const veggies = veg.forEach((el) => {
    console.log(el);
    // even though I am returning here, for each will always return undefined
    return el;
});

console.log(veggies, "for each");