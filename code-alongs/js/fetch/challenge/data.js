const COUNTRIES_URL = "https://restcountries.com/v3.1";

const getCountries = async(countryName) => {
  const response = await fetch(`${COUNTRIES_URL}/name/${countryName}`);
  const info = await response.json();
  console.log(info);
   const cleanedData = info.map((country) =>{
    console.log(country);

    const {common, capital, name } =country;
    const{common: commonName, official, nativeName} = name;
    const {ara} = nativeName;
     console.log(name);
     console.log(ara);
    return{
      commonName ,
      capital,
     };
   });
   return cleanedData;
}

export default getCountries;