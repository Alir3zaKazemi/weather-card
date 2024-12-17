"use strict";

let citiesGrid = document.getElementById("city-grid");

fetch(
	"https://api.api-ninjas.com/v1/city?min_population=20000&limit=15&X-Api-Key=ghEqDvotGRJyoHj14JQivg==LWSDrWAZ8MSdyGZT"
)
	.then((response) => response.json())
	.then((response) => {
		console.log({ response });
		city(response);
	})
	.catch((err) => alert("error"));

function city(obj) {
	for (let i = 0; i < obj.length; i++) {
		citiesGrid.insertAdjacentHTML(
			"beforeend",
			`<li class="li"><a href="/html/index.html?city=${obj[i].name}">${obj[i].name}</a></li>`
		);
	}
}
