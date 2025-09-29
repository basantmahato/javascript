const searchBoxEl = document.getElementById("search-box")
const searchButtonEl = document.getElementById("search-button")
const api="0661d30203b01b344698837a772ee6af"
const url ="https://api.openweathermap.org/data/2.5/weather?q="
const weatherContainerEl = document.getElementById("weather-container")

const generateWeather = (weather)=>{

 const tempCelcius = (weather.main.temp - 273.15).toFixed(1);
    
    return`

    
            <div class="weatherdata1">
                <div class="temperature  flex"><i class="fa-solid fa-temperature-high"></i><p>Temperature:${tempCelcius}°C</p></div>
                <div class="currentWeather padding-top flex"><i class="fa-solid fa-cloud"></i><p>Current Weather:${weather.weather[0].description}</p></div>
                <div class="location padding-top flex"><i class="fa-solid fa-location-dot"></i>Location:${weather.name}</div>
            </div>
            <div class="weatherdata2">
                <div class="humidity flex"><i class="fa-solid fa-droplet"></i><p>Humidity:${weather.main.humidity}</p></div>
                <div class="windspeed flex"><i class="fa-solid fa-wind"></i><p>Wind Visibility:${weather.visibility}</p></div>
            </div>
        
    
    `
}

const fetchWeather = async ()=>{
    const location = searchBoxEl.value.trim()
    try { 
        const res = await fetch(`${url}${location}&appid=${api}`);
        const data = await res.json();
        console.log("data",data);

        if (res.ok) {
            weatherContainerEl.innerHTML = generateWeather(data);
            
        } else {
            
        }
        
    } catch (error) {
        console.log("error")
        
    }
}

searchButtonEl.addEventListener("click",fetchWeather);