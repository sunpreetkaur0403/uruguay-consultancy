// 1
const movie = {
  title: "Dead Poets Society",
  yearReleased: 1989,
  director: "Peter Weir",
  genre: ["Drama", "Teen", "Comedy"],
};

// Using object destructuring, create a function that returns a string that says what the title and the genres of the passed object are.

// @param {title: string, yearReleased: number, director: string, genres: string[]}

// @returns 'The genres of the movie title are genre1, genre2'



const getTitleAndGenre = (obj) => { 
  const{title, genre} = obj;
  let genreList = genre.join(', ');
  return `The genres of the movie title are ${genreList}`;
};


// checking if returned the right value
console.log(getTitleAndGenre(movie));



// 2
const recipe = {
  name: "Spaghetti Bolognese",
  country: "Italy",
  isVegetarian: false,
  mealIngredients: [
      "Minced beef",
      "tomato sugo",
      "basil",
      "onion",
      "garlic",
      "parmesan",
  ],
};

// Using object destructuring, create a function that renames the key of an object. It should not modify the original object.

// @param {name: string, country: string, isVegetarian: boolean, mealIngredients: string[]}
// @returns {name; string, country: string, isVegetarian: boolean, ingredients: string[]}

const {mealIngredients:ingredients, ...remainingProperties} = recipe;
// const updatedRecipe = {ingredients, ...remainingProperties};

// console.log(updatedRecipe);
// const updatedRecipe = { mealIngredients:ingredients, ...remainingProperties };
// console.log(updatedRecipe);
const renameKey = (obj) => {
  obj ={
     ...remainingProperties,
     ingredients,
  }
  return obj;
};



console.log(renameKey(recipe));



// const renameKey = (obj, keyToRename = "", newKey = "") => {
//   const { [keyToRename]: value, ...rest } = obj; //use computed property name to pass value instead of defining new key "keyToRename"
//   const newObj = { [newKey]: value, ...rest };
//   return newObj;

//   const { mealIngredients: value, ...rest } = obj;
//   return { ingredients: value, ...rest };
// };

// console.log(renameKey(recipe));
// console.log(renameKey(recipe, "mealIngredients", "ingredients"));


// 3

const codingSchool = {
  name: "_nology",
  languages: ["JavaScript", "Java"],
  offices: [
      {
          country: "Australia",
          city: "Sydney",
      },
      {
          country: "UK",
          city: "Bristol",
      },
  ],
};

// Using destructuring, create a function that returns the city of the first office of the given company
const {offices, ...rest} = codingSchool;

// @param {name: string, languages: string[], offices: {country: string, city: string}[]}

// @returns {string}  the name of the city of the first office

const returnFirstCity = (obj) => {
  const firstOfficeCity= obj.offices[0].city;
  return firstOfficeCity};

console.log(returnFirstCity(codingSchool));

// const returnFirstCity = (obj) => {
//     const { offices } = obj;
//     return offices[0].city;
// };

// const returnFirstCity = (obj) => {
//   const { offices, ...rest } = obj;
//   const [first, ...restOfArray] = offices;
//   console.log(first, "first element of the array pf ofccies");
//   console.log(restOfArray, "rest of array");
//   const { city, ...rest2 } = first;

//   const {
//       offices: [firstOffice, ...restOfOff],
//   } = obj;

//   console.log(firstOffice, "first office");

//   return city;
// };
// const arr = [1, 2, 3];
// const [banana, second, ...rest] = arr;
// console.log(second);
// console.log(banana);
// console.log([banana, ...rest]);

// const ob = {
//   key1: "val1",
//   key2: "val2",
// };
// const { key3 } = ob;
// console.log(key3, "key 3");
// console.log(returnFirstCity(codingSchool));

// 4

const postsArray = [
  {
      id: 123,
      createdBy: "user16",
      commentNo: 5,
  },
  {
      id: 456,
      createdBy: "user20",
      commentNo: 5,
  },
  {
      id: 789,
      createdBy: "user32",
      commentNo: 5,
  },
];

// given an array of post objects create a function that returns a new array of posts, each object in the new array should have keys renamed as per the example.

// @param {{id: number, createdBy: number, commentNo: number}[]}

// @returns {{postId: number, creator: number, postComment: number}[]}


const newPostArr = (arr) => {
  return arr.map((obj) => {
      const { id: postId, createdBy, commentNo } = obj;
      // with id, I renamed the property when I destructured my objects
      // I have a variable called postId
      console.log(postId);
      // here we grabbed the createdBy property and have a variable called createdBy
      console.log(createdBy);
      // we don't want our key to be called createBy
      // we add a new key called creator and we assign the value stored in var createdBy
      return { postId, creator: createdBy, postComment: commentNo };
  });
};

const name = "Martyna";
const person = {
  firstName: name,
};
console.log(person);

console.log(newPostArr(postsArray));


// 5
const forecast = {
  yesterday: { low: 14, high: 32 },
  today: { low: 18, high: 34 },
  tomorrow: { low: 20, high: 28 },
};

// using object destructuring, create a function that returns the value of the low temperature for today

// @param { yesterday: { low: number, high: number }, today: { low: number, high: number }, tomorrow: { low: number, high: number } }

// return {number} the value of the low temperature for today
const getTodayLow = (obj) => {
  const { today } = obj;
  console.log(today, "today");
  const { low, ...todayRest } = today;

  const {
      today: { low: otherLow },
  } = obj;
  return `${low} the value of the low temperature for today`;
};

console.log(getTodayLow(forecast));