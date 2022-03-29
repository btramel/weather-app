let units = '°F';
let input = 'minneapolis';
let apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=9bc24147cf5f3ff0e65062a6d7676996`

document.querySelector('.update').addEventListener('click', (e) => {
    e.preventDefault()
    input = document.getElementById('searchLocation').value
    apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=9bc24147cf5f3ff0e65062a6d7676996`
    document.querySelector('#userForm').reset()
    hitAPI(apiCall)
})

async function hitAPI(apiCall) {
    const response = await fetch(apiCall, {mode: 'cors'});
    const weatherData = await response.json();

    const fLocation = weatherData.name 
    const fTemp = weatherData.main.temp 
    const fFeels = weatherData.main.feels_like 
    const fHigh = weatherData.main.temp_max 
    const fMin = weatherData.main.temp_min 
    const fConditions = weatherData.weather[0].main 
    const fWind = weatherData.wind.speed 

    if ( fConditions.toLowerCase() === 'clouds' ) { document.body.style.backgroundImage = 'url(imgs/clouds.jpg)' }
    else if ( fConditions.toLowerCase() === 'clear' ) { document.body.style.backgroundImage = 'url(imgs/clear.jpg)' }
    else if ( fConditions.toLowerCase() === 'rain' ) { document.body.style.backgroundImage = 'url(imgs/rain.jpg)' }
    else if ( fConditions.toLowerCase() === 'snow' ) { document.body.style.backgroundImage = 'url(imgs/snow.jpg)' }
    else if ( fConditions.toLowerCase() === 'dust' ) { document.body.style.backgroundImage = 'url(imgs/dust.jpg)' }
    else if ( fConditions.toLowerCase() === 'haze' ) { document.body.style.backgroundImage = 'url(imgs/haze.jpg)' }
    
    render(fLocation, fTemp, fConditions, fFeels, fHigh, fMin, fWind) 
}

function render(fLocation, fTemp, fConditions, fFeels, fHigh, fMin, fWind) {
    // display information
    const location = document.querySelector('.location')
    const temp = document.querySelector('.temp')
    const conditions = document.querySelector('.conditions')
    const feelsLike = document.querySelector('.feels-like')
    const highTemp = document.querySelector('.high-temp')
    const minTemp = document.querySelector('.min-temp')
    const wind = document.querySelector('.wind')
    
    location.innerText = fLocation
    temp.innerText = `${Math.round(fTemp)}${units}` 
    conditions.innerText = fConditions
    feelsLike.innerText = `Feels like: ${Math.round(fFeels)}${units}`
    highTemp.innerText = `High: ${Math.round(fHigh)}${units}`
    minTemp.innerText = `Low: ${Math.round(fMin)}${units}`
    wind.innerText = `Wind: ${Math.round(fWind)}mph`
}

// celsius / fahrenheit toggle?

hitAPI(apiCall)