import './css/styles.css';
// import {
//     fetchCountries} from `./countries-api`

const DEBOUNCE_DELAY = 300;

const searchBox = document.getElementById("search-box");
console.log(searchBox)

const wrapperEl = document.querySelector(".country-info");
console.log(wrapperEl)

searchBox.addEventListener(`input`, handleInputSubmit)

function handleInputSubmit(event){
event.preventDefault();
const serchCity = event.target.value.trim()

fetchCountries

}