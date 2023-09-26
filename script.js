
const apikey = "486582d87961d614cb6347548a121c2e";
const weather_icon = document.querySelector(".weather-icon")
const Btn = document.querySelector("button");
const weather = document.querySelector(".weather")




async function checkWeather() {

    const city = document.querySelector("input").value;
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;

    const response = await fetch(apiurl);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        weather.style.display = "none";
    } else {
        const data = await response.json();
        console.log(data)
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weather_icon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weather_icon.src = "images/clear.png";
        } else if (data.weather[0].main == "Drizzle") {
            weather_icon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weather_icon.src = "images/mist.png";
        } else if (data.weather[0].main == "Rain") {
            weather_icon.src = "images/rain.png";
        } else if (data.weather[0].main == "Snow") {
            weather_icon.src = "images/snow.png";
        }

        weather.style.display = "block";
        document.querySelector(".error").style.display = "none";
    }



}

Btn.addEventListener('click', () => {

    checkWeather()
})

