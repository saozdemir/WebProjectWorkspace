import {WeatherApi} from "./api.js";

const ENTER = 13;
//* Element Seçimi
const searchInput = document.querySelector("#searchInput");
const cityNameElement = document.querySelector(".city-name");
const degreeElement = document.querySelector(".degree");
const descriptionElement = document.querySelector(".description");

searchInput.addEventListener("keypress", findWeather);

const weatherApi = new WeatherApi();

async function findWeather(e) {
    if (e.keyCode === ENTER) {
        const cityName = e.target.value.trim();
        const data = weatherApi.getWeatherInfo(cityName)
            .then(data => {
                if (data.cod === "404") {//message: city not found
                    alert("Şehir bulunamadı.")
                } else {
                    display(data);
                }
            })
            .catch(error => console.log(error));
    }
}

function display(data) {
    cityNameElement.textContent = data.name;
    degreeElement.textContent = Math.round(data.main.temp) + "°";
    descriptionElement.textContent = data.weather[0].description;

    searchInput.value = "";
}