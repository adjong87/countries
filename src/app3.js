// import axios from "axios";
//
// let list = document.getElementById("countryList");
//
// // 1a.
// async function fetchCountriesData() {
//     let countriesData;
//     try {
//         const countriesData = await axios.get("https://restcountries.com/v2/all")
//     } catch (e) {
//         console.error(e)
//     }
//     return countriesData;
//     console.log(countriesData)
// }
// fetchCountriesData()
// function print() {
//     fetchCountriesData().then((countriesData) => {
//         countriesData.map((country) => {
//             const countryContainer = document.createElement("div")
//             countryContainer.className = 'countryContainer'
//             const nameAndFlag = document.createElement("div")
//             nameAndFlag.className = 'nameAndFlag'
//             const countryName = document.createElement('h4');
//             countryName.className = 'countryName'
//             const countryFlag = document.createElement('img');
//             countryFlag.className = 'countryFlag'
//             const countryPopulation = document.createElement('p');
//             countryName.textContent = country.name;
//             countryFlag.src = country.flag;
//             countryPopulation.textContent = "has a population of " + country.population + " people";
//             list.appendChild(countryContainer);
//             nameAndFlag.appendChild(countryFlag);
//             nameAndFlag.appendChild(countryName);
//             countryContainer.appendChild(nameAndFlag);
//             countryContainer.appendChild(countryPopulation);
//         })
//     })
// }
//
// print()