function displayTemperature(response) {
  console.log(response.data.main.temp);
}

let apiKey = "c2664ee5d87203ac5037da5b7330b87c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
