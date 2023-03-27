// import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
// import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const searchBox = document.getElementById("search-box");
const wrapperList = document.querySelector(".country-list");
const wrapperEl = document.querySelector(".country-info");



searchBox.addEventListener(`input`, handleInputSubmit );

function handleInputSubmit(event) {
  event.preventDefault();
  const searchCountry = event.target.value.trim();
  
fetchCountries(searchCountry).then(data =>
  createMarkupCountryInfo(data))
   .catch(error => console.error(error));


}

function createMarkupCountryInfo(searchCountry) {
  const markup = searchCountry
    .map(({ name, capital, population, flags, languages }) => {
      return `
  <div class="country__flag">
    
    <p class="country__name">${name.official}</p>
  </div>
  <ul class="country__info">
      <li class="country__item"> <b>Capital</b>:
    <span class="country__span">${capital}</span>
      </li>
      <li class="country__item"> <b>Population</b>:
    <span class="country__span">${population}</span>
      </li>
      <li class="country__item"> <b>Languages</b>:
    <span class="country__span">${Object.values(languages).join(', ')}</span>
      </li>
  </ul>`;
    })
    .join('');

  wrapperEl.insertAdjacentHTML('beforeend', markup);
}











  
