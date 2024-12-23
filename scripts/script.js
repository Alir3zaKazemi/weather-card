"use strict";

let city = document.getElementById("city-name");
let temp = document.getElementById("tempreture-num");
let weatherCondition = document.getElementById("weather-status");
let todayStats = document.getElementById("today-status");
let todayMin = document.getElementById("today-min");
let todayMax = document.getElementById("today-max");
const queryString = window.location.search;
const parameters = new URLSearchParams(queryString);
const targetCity = parameters.get("city");

fetch(
	`https://api.openweathermap.org/data/2.5/weather?q=${targetCity}&units=metric&appid=0a76258bd2fbafc7cf09dd8c480abe2b`
)
	.then((response) => response.json())
	.then((response) => {
		displayData(response);
	})
	.catch((err) => alert("error"));

function displayData(obj) {
	city.innerText = `${obj.name}`;
	temp.textContent = `${Math.round(obj.main.temp)}`;
	weatherCondition.textContent = `${obj.weather[0].main}`;
	todayStats.textContent = `${obj.weather[0].main}`;
	todayMin.textContent = `${Math.round(obj.main.temp_min)}`;
	todayMax.textContent = `${Math.round(obj.main.temp_max)}`;
}

// const main = async () => {
// 	try {
// 		const res = await fetch(
// 			`https://api.openweathermap.org/data/2.5/weather?q=${targetCity}&units=metric&appid=0a76258bd2fbafc7cf09dd8c480abe2b`
// 		);
// 		const parsedRes = await res.json();
// 		console.log({ parsedRes });
// 		displayData(parsedRes);
// 	} catch (err) {
// 		alert("error");
// 	}
// };

// main();
