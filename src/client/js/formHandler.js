// API Key for OpenWeatherMap API

const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';

const country = ',US&units=imperial'

const apiKey = '&APPID=e131d5ea093dbc7fc2da1a0496c042c8';


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    /*Get API Data*/
    const getDate = async (baseURL, zip, country, apiKey)
    fetch(baseURL + zip + country + apiKey);
    try {
        const data = await res.json();
        return data;
    } catch (err) {
        console.log('error '
            err);
    }
}

getDate(baseURL, zip, country, apiKey)
    .then(function (data) {
        postData('/add', {
            date: newDate,
        })
    })
    .then(function (res) {
        document.getElementById('results').innerHTML = res.date;
    })


export {
    handleSubmit
}