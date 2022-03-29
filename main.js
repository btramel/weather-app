let units = '°F';
let input = 'honolulu';

document.querySelector('.update').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.location').innerText = 'Loading...'
    input = document.getElementById('searchLocation').value
    document.querySelector('#userForm').reset()
    hitAPI(input)
})

async function hitAPI() {
    try {    
        const response = await Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=9bc24147cf5f3ff0e65062a6d7676996`, {mode: 'cors'}),
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=9bc24147cf5f3ff0e65062a6d7676996`, {mode: 'cors'})
        ]);
        const weatherData = await Promise.all(response.map(r => r.json()))

        console.log(weatherData[0])
        const fLocation = weatherData[0].name 
        const fTemp = weatherData[0].main.temp 

        // fahrenheit values
        const fFeels = weatherData[0].main.feels_like 
        const fHigh = weatherData[0].main.temp_max 
        const fMin = weatherData[0].main.temp_min 
        const fConditions = weatherData[0].weather[0].main 
        const fWind = weatherData[0].wind.speed 

        // celsius values
        const fTempCelsius = weatherData[1].main.temp 
        const fFeelsCelsius = weatherData[1].main.feels_like 
        const fHighCelsius = weatherData[1].main.temp_max 
        const fMinCelsius = weatherData[1].main.temp_min 

        document.querySelector('.toggle').addEventListener('click', () => {
            render(fLocation, fTemp, fConditions, fFeels, fHigh, fMin, fWind, fTempCelsius, fFeelsCelsius, fHighCelsius, fMinCelsius)
        })

        if ( fConditions.toLowerCase() === 'clouds' ) { document.body.style.backgroundImage = 'url(imgs/clouds.jpg)' }
        else if ( fConditions.toLowerCase() === 'clear' ) { document.body.style.backgroundImage = 'url(imgs/clear.jpg)' }
        else if ( fConditions.toLowerCase() === 'rain' ) { document.body.style.backgroundImage = 'url(imgs/rain.jpg)' }
        else if ( fConditions.toLowerCase() === 'snow' ) { document.body.style.backgroundImage = 'url(imgs/snow.jpg)' }
        else if ( fConditions.toLowerCase() === 'dust' ) { document.body.style.backgroundImage = 'url(imgs/dust.jpg)' }
        else if ( fConditions.toLowerCase() === 'haze' || fConditions.toLowerCase() === 'fog' || fConditions.toLowerCase() === 'mist') { document.body.style.backgroundImage = 'url(imgs/haze.jpg)' }
        
        render(fLocation, fTemp, fConditions, fFeels, fHigh, fMin, fWind, fTempCelsius, fFeelsCelsius, fHighCelsius, fMinCelsius) 
    } catch (error) {
        console.error(error);
        document.body.style.backgroundImage = 'url(imgs/space.jpg)'
        document.querySelector('.location').innerText = 'Try again!'
        document.querySelector('.temp').innerText = ' '
        document.querySelector('.conditions').innerText = 'Did you spell the location correctly?'

    }
}

function render(fLocation, fTemp, fConditions, fFeels, fHigh, fMin, fWind, fTempCelsius, fFeelsCelsius, fHighCelsius, fMinCelsius) {
    // display information
    const location = document.querySelector('.location')
    const temp = document.querySelector('.temp')
    const conditions = document.querySelector('.conditions')
    const feelsLike = document.querySelector('.feels-like')
    const highTemp = document.querySelector('.high-temp')
    const minTemp = document.querySelector('.min-temp')
    const wind = document.querySelector('.wind')
    
    location.innerText = fLocation
    conditions.innerText = fConditions
    wind.innerText = `Wind: ${Math.round(fWind)}mph`
    
    if (document.querySelector('[data-checkbox]').checked) {
        units = '°C';
        temp.innerText = `${Math.round(fTempCelsius)}${units}` 
        feelsLike.innerText = `Feels like: ${Math.round(fFeelsCelsius)}${units}`
        highTemp.innerText = `High: ${Math.round(fHighCelsius)}${units}`
        minTemp.innerText = `Low: ${Math.round(fMinCelsius)}${units}`
    } else {
        units = '°F'
        temp.innerText = `${Math.round(fTemp)}${units}` 
        feelsLike.innerText = `Feels like: ${Math.round(fFeels)}${units}`
        highTemp.innerText = `High: ${Math.round(fHigh)}${units}`
        minTemp.innerText = `Low: ${Math.round(fMin)}${units}`
    }
}

hitAPI()