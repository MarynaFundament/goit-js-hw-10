// import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
// import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const searchBox = document.getElementById("search-box");
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");



searchBox.addEventListener(`input`, handleInputSubmit );

function handleInputSubmit(event) {
  event.preventDefault();
  const searchCountry = event.target.value.trim();
  
fetchCountries(searchCountry)
.then(searchCountry => {
  if (searchCountry.length > 10) {
    alert(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (searchCountry.length >= 2 && searchCountry.length <= 10) {
    resetMarkup(countryList);
    createMarkupCountryInfo(searchCountry);
    resetMarkup(countryInfo);
  } else {
    resetMarkup(countryInfo);
    createMarkupCountryInfo(searchCountry);
    resetMarkup(countryList);
  }
})
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

    countryList.insertAdjacentHTML('beforeend', markup);
}

function resetMarkup(el) {
  el.innerHTML = '';
}











  
