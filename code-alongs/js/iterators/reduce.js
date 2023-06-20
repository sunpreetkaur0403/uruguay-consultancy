// REDUCE

// we can use it if we wanto reduce an array to a single value 

// const numbers = [1, 2, 3, 4, 5]

// let sum = 0;
// for (let i = 0; i < numbers.length; i++){
//   sum += numbers[i];
// }
// console.log(sum);


// const reduceSum = numbers.reduce((total, current) => );

//

// const lowerCaseLetters = ["n", "o", "l", "o", "g", "y"];
// const upperCaseStr = lowerCaseLetters.reduce((acc, curr) =>
// {
//   console.log({acc, curr});
//   return acc + curr. toUpperCase();
// }, "")

// console.log(upperCaseStr);

// const numbersToDouble = [4, 5, 8];

// const doubleWithReduce = numbersToDouble.reduce((acc, curr) => {
//   console.log({acc, curr});
//   const doubledItem = curr * 2;
//   acc.push(doubledItem);
//   return acc;
// }, []);


// given an array of character codes, convert the codes to letters and reduce it to a single string

const arrOfCodes = [114, 101, 100, 117, 99, 101];

const stringFromNumbers = arrOfCodes.reduce((acc, curr) => {
  let char =  String.fromCharCode(curr);
  return acc + char;
}, "");
console.log(stringFromNumbers);


// given an array of letters, reduce them to get the sum of character codes
const lettArr = ["c", "h", "e", "e", "s", "e"];
const sumOfCharCodes = lettArr.reduce((acc, curr) => {
  let charCode =  curr.charCodeAt(0);
  return acc + charCode;
}, 0);
console.log(sumOfCharCodes);



// use reduce to filter an array to only get numbers greater than 10

const numsArr = [1, 345, 545, 2, 5, 7, 907];

const numsGrTh10 = numsArr.reduce((acc, curr) => {
  if (curr > 10) {
      acc.push(curr);
  }
  return acc;
}, []);

console.log(numsGrTh10, "Numbers greater than 10");

// use reduce to create an array of numbers (use numsArr) to the power of 2

const numArr = [2, 4, 6, 8];

const powerOfTwo = numArr.reduce((acc, curr) => {
  acc.push(curr ** 2);
  return acc;
}, []);

console.log(powerOfTwo);