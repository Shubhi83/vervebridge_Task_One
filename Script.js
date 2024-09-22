const searchBox = document.querySelector(".search-input");
const searchBtn = document.querySelector(".searchBtn");
const weatherIcon = document.querySelector(".weather-icon");

const apiKey = "159d6f0eea35d89e33a4c50a7b7351c8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        console.log(data);

        // Update the DOM with the fetched data
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // Update the weather icon based on the weather condition
        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "C:/Users/shubhi sahu/OneDrive/Desktop/N/images/clouds.png";
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "C:/Users/shubhi sahu/OneDrive/Desktop/N/images/clear.png";
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "C:/Users/shubhi sahu/OneDrive/Desktop/N/images/rain.png";
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "C:/Users/shubhi sahu/OneDrive/Desktop/N/images/drizzle.png";
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "C:/Users/shubhi sahu/OneDrive/Desktop/N/images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}
     searchBtn.addEventListener("click", () => {
     checkWeather(searchBox.value);
});

 
 