
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
  
  fetchCountries(searchCountry)
  .then(data => console.log(data))
  .catch(error => console.error(error));
}

function createMarkupCountryInfo(searchCountry){
const markup = searchCountry.map(({name,capital,population,languages,flags}) => {
  return `
  <div> 
 
  <p> ${name.official}</p>
  </div> 
  
  <div> 
  <p> Capital: ${capital}</p>
  <p> Population: ${population}</p>
  <p> Languages: ${Object.values(languages).join(', ')}</p>
  </div>

  
  `
})

wrapperEl.innerHTML = markup.join("");
}





// import { fetchCountries } from './fetchCountries.js';

// const DEBOUNCE_DELAY = 300;

// const refs = {
//   input: document.getElementById('search-box'),
//   countryList: document.querySelector('.country-list'),
//   countryInfo: document.querySelector('.country-info'),
// };

// refs.input.addEventListener('input', onSearchCountry);

// function onSearchCountry(e) {
//   e.preventDefault();

//   const inputValue = e.target.value.trim();
//   if (!inputValue) {
//     resetMarkup(refs.countryList);
//     resetMarkup(refs.countryInfo);
//     return;
//   }

//   fetchCountries(inputValue)
//     .then(dataCountry => {
//       if (dataCountry.length > 10) {
//         alert(
//           'Too many matches found. Please enter a more specific name.'
//         );
//       } else if (dataCountry.length >= 2 && dataCountry.length <= 10) {
//         resetMarkup(refs.countryList);
//         createMarkupCountryList(dataCountry);
//         resetMarkup(refs.countryInfo);
//       } else {
//         resetMarkup(refs.countryInfo);
//         createMarkupCountryInfo(dataCountry);
//         resetMarkup(refs.countryList);
//       }
//     })
//     .catch(() => {
//       resetMarkup(refs.countryList);
//       resetMarkup(refs.countryInfo);
//       alert('Oops, there is no country with that name');
//     });
// }

// function createMarkupCountryList(dataCountry) {
//   const markup = dataCountry
//     .map(({ name, flags }) => {
//       return `<li class="country-list__item">
//         <img class="country-list__img" src="${flags.svg}" alt="flag" />
//         <p class="country-list__text">${name.official}</p>
//       </li>`;
//     })
//     .join('');
//   return refs.countryList.insertAdjacentHTML('beforeend', markup);
// }

// function createMarkupCountryInfo(dataCountry) {
//   const markup = dataCountry
//     .map(({ name, capital, population, flags, languages }) => {
//       return `
//   <div class="country__flag">
//     <img class="country__img" src="${flags.svg}" alt="flag">
//     <p class="country__name">${name.official}</p>
//   </div>
//   <ul class="country__info">
//       <li class="country__item"> <b>Capital</b>:
//     <span class="country__span">${capital}</span>
//       </li>
//       <li class="country__item"> <b>Population</b>:
//     <span class="country__span">${population}</span>
//       </li>
//       <li class="country__item"> <b>Languages</b>:
//     <span class="country__span">${Object.values(languages).join(', ')}</span>
//       </li>
//   </ul>`;
//     })
//     .join('');

//   return refs.countryInfo.insertAdjacentHTML('beforeend', markup);
// }

// function resetMarkup(el) {
//   el.innerHTML = '';
// }




