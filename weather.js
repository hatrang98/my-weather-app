function getCity(event) {
  event.preventDefault();
  let input = document.querySelector("#enterCity");
  let city = input.value;
  console.log(city);
  let apiKey = "634e0f286e83523b2a964bf9f5ac1617";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=`;
  function showTemperature1(response) {
    console.log(response.data);
    console.log(response.data.main.temp);
    let temperature = Math.round(response.data.main.temp);
    let showCity = document.querySelector("#location");
    let showTemp = document.querySelector("#temp");
    showCity.innerHTML = city;
    showTemp.innerHTML = `${temperature} degree`;
  }
  axios.get(`${apiUrl}${apiKey}`).then(showTemperature1);
}
let form = document.querySelector("form");
form.addEventListener("submit", getCity);
function alertTemp() {
  function currentPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    console.log(lat);
    console.log(lon);
    let apiKey = "634e0f286e83523b2a964bf9f5ac1617";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=`;
    function showTemperature2(response) {
      console.log(response.data);
      let temperature2 = Math.round(response.data.main.temp);
      let nameCity = response.data.name;
      alert(`It is currently ${temperature2} degree in ${nameCity}`);
    }
    axios.get(`${apiUrl}${apiKey}`).then(showTemperature2);
  }

  navigator.geolocation.getCurrentPosition(currentPosition);
}
let button = document.querySelector("button");
button.addEventListener("click", alertTemp);
