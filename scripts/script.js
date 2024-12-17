"use strict";

let city = document.getElementById("city-name");
let temp = document.getElementById("tempreture-num");
let weatherCondition = document.getElementById("weather-status");

fetch(
	`https://api.openweathermap.org/data/2.5/weather?q=tehran&units=metric&appid=0a76258bd2fbafc7cf09dd8c480abe2b`
)
	.then((response) => response.json())
	.then((response) => {
		displayData(response)
	})
	.catch((err) => alert("error"));

function displayData(obj) {
	city.innerText = `${obj.name}`;
  temp.textContent = `${Math.trunc(obj.main.temp)}`
  weatherCondition.textContent = `${obj.weather[0].main}`
}
