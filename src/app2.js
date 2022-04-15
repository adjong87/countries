import axios from 'axios'
let list = document.getElementById("countryList");

async function fetchCountry() {
    try {
        const fetch = await axios.get('https://restcountries.com/v2/all');
        const countries = [...fetch.data]
        countries.sort((a, b) => b - a);
        const countries2 =  countries.map((country) => {
            const countryContainer = document.createElement("div")
            countryContainer.className='countryContainer'
            const nameAndFlag = document.createElement("div")
            nameAndFlag.className='nameAndFlag'
            const countryName = document.createElement('h4');
            countryName.className='countryName'
            const countryFlag = document.createElement('img');
            countryFlag.className='countryFlag'
            const countryPopulation = document.createElement('p');
            countryName.textContent = country.name;
            countryFlag.src = country.flag;
            countryPopulation.textContent = "has a population of " + country.population + " people";
            list.appendChild(countryContainer);
            nameAndFlag.appendChild(countryFlag);
            nameAndFlag.appendChild(countryName);
            countryContainer.appendChild(nameAndFlag);
            countryContainer.appendChild(countryPopulation);
        })
    } catch (e) {
        console.error(e);
    }
}
const data = fetchCountry()
console.log(data)

