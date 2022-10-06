const secretkey = config.SECRET_KEY;
const locationInput = document.getElementById('location-input').value;
document.getElementById('submit-button').addEventListener('click',function () {
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${secretkey}`
fetch(apiUrl)
.then(res => res.json())
.then(data => {
    console.log(data);
})
})
// function loadWeatherData(){

// }

