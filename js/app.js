require('dotenv').config();

document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('city').value;
  if(city) {
    fetchWeather(city);
  }
});

function fetchWeather(city) {
  const apiKey = process.env.API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

}
