/*
* Api Key: 46c520cd2cbc61147cb1f5418d681dcf
* Api : https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
* q: city
* units: metric
* lang: tr
* */
class WeatherApi {
    constructor() {
        this.baseURL = "https://api.openweathermap.org/data/2.5/weather";
        this.apiKey = "46c520cd2cbc61147cb1f5418d681dcf";
    }

    async getWeatherInfo(cityName) {
        const response = await fetch(`${this.baseURL}?q=${cityName}&appid=${this.apiKey}&units=metric&lang=tr`);
        const data = await response.json();
        return data;


        /** Diğer Yöntem ile
         return new Promise(resolve, reject)=>{
         fetch(`${this.baseURL}?q=${cityName}&appid=${this.apiKey}&units=metric&lang=tr`)
         .then(response => response.json())
         .then(data => resolve(data))
         .catch(error => reject(data))
         }
         */
    }
}

export {WeatherApi};