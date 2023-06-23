import { createCard } from "./dom-utils.js";
import getCountries from "./data.js";

document.querySelector("form").addEventListener("submit", async(e) =>{
  e.preventDefault();
  document.querySelector("section").innerHTML = "";
  const input = document.querySelector("#countryName");
  const countriesData = await getCountries(input.value);
  console.log(countriesData);

  countriesData.forEach((country) => {
    return createCard(
      document.querySelector("section"),
      country.commonName,
      country.capital);
    
  });
  input.value = "";
});