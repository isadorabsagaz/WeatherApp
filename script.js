
const apiKey = "4698bb5e445bf535785b60e063e53d3d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status === 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    
    var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " ºC";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    const weather = data.weather[0].main; 
    
    switch (weather){
        case "Clouds": weatherIcon.src = "images/clouds.png"; break; 
        case "Clear": weatherIcon.src = "images/clear.png"; break; 
        case "Rain": weatherIcon.src = "images/rain.png"; break; 
        case "Drizzle": weatherIcon.src = "images/drizzle.png"; break; 
        case "Mist": weatherIcon.src = "images/mist.png"; break;
    }
    
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})
