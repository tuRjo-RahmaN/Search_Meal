const loadQuotes = () =>
{
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => 
        {
            const quotes = document.getElementById('quotes')
            quotes.innerHTML = data.quote;
        })
}