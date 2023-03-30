
export const fetchCountries = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,languages,flags.svg;`


  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(`Fetch error: ${error}`);
    });
};


// const URL = 'https://restcountries.com/v3.1/name';

// export function fetchCountries(name) {
//   return fetch(
//     `${URL}/${name}?fields=name,capital,population,flags,languages`
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error('Data fail!');
//     }
//     return response.json();
//   });
// }


