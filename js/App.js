const secretkey = config.SECRET_KEY;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=sonargaon&appid=${secretkey}&units=metric`;
let weatherCondition = document.getElementById("condition");
let temparature = document.getElementById("temparature");
let city = document.getElementById("location");
let statusIcon = document.getElementById("status-icon");

fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => {
    const specificLocation = data.name;
    city.innerText = specificLocation;
    console.log(data.name);
    const celsious = data.main.temp.toFixed(2);
    temparature.innerText = celsious;
    let icon = data.weather[0].icon;
    statusIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherCondition.innerText = data.weather[0].main;
  });
