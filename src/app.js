import axios from 'axios'
let list = document.getElementById("countryid");

async function fetchCountry() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        printIt1(result)
    } catch (e) {
        console.error(e);
    }
}

function printIt1(result) {
    const country = [...result.data]
    console.log("test + " + country)
    list.innerHTML =
        `<li>${result.data[0].name} </br>
         Has a population of ${result.data[0].population} people 
        <span class="${regionNameAndColour(result.data[0].region)}"> ${result.data[country].name}</span>
        </li>`
}

function regionNameAndColour(region) {
    switch (region) {
        case 'Africa':
            return "blue";
            break;
        case 'Americas':
            return "green";
            break;
        case 'Asia':
            return "red";
            break;
        case 'Europe':
            return "yellow";
            break;
        case 'Oceana':
            return "purple";
            break;
        default:
            return "white";
    }
}