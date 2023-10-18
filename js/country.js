const loadCountries = () =>
{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => 
        {
            const countryContainer = document.getElementById('country-container');
                        
            data.forEach(country => 
                {
                    const countryDiv = document.createElement('div');
                    countryDiv.classList.add('country');
                    countryDiv.innerHTML = 
                    `
                    <h4>Country: [${country.name.common}]</h4>
                    <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
                    <button onclick="countryDetails('${country.cca2}')" class='details-btn' >Details</button>
                    `
                    countryContainer.appendChild(countryDiv);
                })
            
        })
}


function countryDetails(cca2)
{
    fetch(`https://restcountries.com/v3.1/alpha/${cca2}`)
    .then(response => response.json())
    .then(data => 

        {
            const countryDetails = document.getElementById('country-details');
            countryDetails.innerHTML = '';

            const countryDetailsDiv = document.createElement('div');
            countryDetailsDiv.classList.add('country-details-container')
            countryDetailsDiv.innerHTML =
            `
            <h1>Country Details: </h1>
            <img src="${data[0].flags.png}">
            <h3>Name: ${data[0].name.common}</h3>
            <p>Capital: ${data[0].capital}</p>
            <p>Region: ${data[0].region}</p>
            <p>Population: ${data[0].population}</p>
            `
            
            countryDetails.appendChild(countryDetailsDiv);
        })
}

loadCountries();

function display()
{
console.log('kjhh');
}