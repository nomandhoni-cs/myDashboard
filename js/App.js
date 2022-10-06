let weatherCondition = document.getElementById("condition");
let temparature = document.getElementById("temparature");
let city = document.getElementById("location");
const secretkey = config.SECRET_KEY;
let locationInput = document.getElementById("location-input");
document.getElementById("submit-button").addEventListener("click", function () {
  city.innerText = locationInput.value;
  let statusIcon = document.getElementById("status-icon");
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&appid=${secretkey}`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      // Temparature Output
      let icon = data.weather[0].icon;
      statusIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      const celsious = (((data.main.temp - 32) * 5) / 9).toFixed(2);
      temparature.innerText = celsious;
      weatherCondition.innerText = data.weather[0].main;
      locationInput.value = "";
    });
  // .catch(alert('This city is not in the map'))
});
