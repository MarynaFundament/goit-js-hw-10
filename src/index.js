import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;

const searchBox = document.getElementById("search-box");
const wrapperEl = document.querySelector(".country-info");

searchBox.addEventListener(`input`, handleInputSubmit);

function handleInputSubmit(event) {
  event.preventDefault();
  const searchCity = event.target.value.trim();
  
  fetchCountries(searchCity).then(data => console.log(data)).catch(error => console.error(error));
}