const BASE_URL = `https://restcountries.com/#api-endpoints-v3-name`;


export const fetchCountries = name => 
fetch (`https://restcountries.com/v3.1/name/${name}`)
.then ((response) => {
if(!response.ok){
    throw new Error (response.status)
}

return response.json();

})

// console.log(`Switzerland`)

