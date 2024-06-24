document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('city').value;
  if(city) {
    fetchWeather(city);
  }
});
