const apiKey = "811cbf0ef7b922340327873fa0caafd8";
let city = "khoni";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;

const button = document.getElementById("button");
button.addEventListener("click", () => {
    let NameOfCity = window.prompt("Enter city name");
    if (NameOfCity) {
        city = NameOfCity;
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${NameOfCity}&APPID=${apiKey}`;
        console.log(`City changed to ${NameOfCity}`);
        weatherdata();
    }
});

function weatherdata() {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const cityName = document.getElementById("cityname");
            cityName.textContent = data.name;

            const temperature = document.getElementById("temperature");
            temperature.textContent = data.main.temp;

            const description = document.getElementById("description");
            description.textContent = data.weather[0].description;

            const visibility = document.getElementById("visibility");
            visibility.textContent = data.visibility;

            const humidity = document.getElementById("humidity");
            humidity.textContent = data.main.humidity;

            const feelslike = document.getElementById("feelslike");
            feelslike.textContent = data.main.feels_like;

            const wind = document.getElementById("wind");
            wind.textContent = data.wind.speed;
        })
        .catch((error) => console.error(error));
}
weatherdata();

const today = new Date();
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const weekdayName = weekdays[today.getDay()];
const dateString = `${weekdayName}, ${today.toLocaleDateString()}`;

const resultElement = document.getElementById("date");
resultElement.textContent = dateString;
