document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('city').value;
  if(city) {
    fetchWeather(city);
  }
});

function fetchWeather(city) {
  fetch('/api-key')
    .then(response => response.json())
    .then(data => {
      const apiKey = data.apiKey;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          displayWeather(data);
        })
        .cath(error => {
          console.error('God Knows What Happend, I could not get the data I am so sorry:', error);
          alert('Not Working, Try Again!');
        });
    });
}

function displayWeather(data) {
  if(data.cod === '404') {
    alert('YOUR CITY IS NOT REAL');
    return;
  }

  const weatherDisplay = document.getElementById('weatherDisplay');
  weatherDisplay.innerHTML =`
    <h2>${data.name}, ${data.sys.country}</h2>
    <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;
}
