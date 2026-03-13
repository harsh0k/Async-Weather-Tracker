const apiKey = "7156ef14e2f443c4dd32890f481d3388";

async function getWeather(){

let city = document.getElementById("cityInput").value;

if(city === ""){
alert("Enter city name");
return;
}

try{

let response = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
);

let data = await response.json();

if(data.cod === "404"){
document.getElementById("weatherResult").innerHTML = "City not found";
return;
}

displayWeather(data);
addHistory(city);

}catch(error){

document.getElementById("weatherResult").innerHTML = "Error fetching weather";

}

}

function displayWeather(data){

let result = `
<b>City:</b> ${data.name} <br>
<b>Temperature:</b> ${data.main.temp} °C <br>
<b>Humidity:</b> ${data.main.humidity}% <br>
<b>Weather:</b> ${data.weather[0].description}
`;

document.getElementById("weatherResult").innerHTML = result;

}

function addHistory(city){

let li = document.createElement("li");
li.textContent = city;

document.getElementById("historyList").appendChild(li);

}