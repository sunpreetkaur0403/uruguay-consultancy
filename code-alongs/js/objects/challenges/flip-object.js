// Swap keys with values

const translate = {
  apple: "jablko",
  pear: "gruszka",
  strawberry: "truskawka",
};

/* const newObj = {
  jablko: "apple",
  gruszka: "pear",
  truskawka: "strawberry"
} */

function flipKeysAndValues(obj) {
  const entries = Object.entries(obj);
  console.log(entries, "entries");
  const flippedEntries = entries.map((entry) => entry.reverse());
  console.log(flippedEntries, "flipped entries");
  const output = Object.fromEntries(flippedEntries);
  console.log(output, "output");
  return output;
}

const swapKeys = (obj) => {
  const keyArr = Object.keys(obj);
  const valueArr = Object.values(obj);

  return valueArr.reduce((result, value, index) => {
      result[value] = keyArr[index];
      console.log(result, "result");
      console.log(value, "value");
      return result;
  }, {});
};

const person = {
  firstName: "martyna",
};

person.lastName = "Krol";

console.log(translate);
// console.log(flipKeysAndValues(translate));
console.log(swapKeys(translate));