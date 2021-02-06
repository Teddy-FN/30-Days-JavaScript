// Fetch API using Promise and async,await 

// API 
const country = 'https://restcountries.eu/rest/v2/all'
const catsApi = 'https://api.thecatapi.com/v1/breeds'

fetch(country)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error))


