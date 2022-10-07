<script>
  let temp = 0;
  let alt = 0
  let src = null
const getWeather = () => {
  // API docs:  https://openweathermap.org/current#one
  let cityName = 'Goiânia' // Your city name
  let unit = 'metric' // Units of the data
  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=38eb46c466d07fbb7b72aea0e547dd34`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let floatTemp = data['main']['temp']
      temp = Math.round(floatTemp)
      alt = data['weather'][0]['description']
      let icon = data['weather'][0]['icon']
      src = `http://openweathermap.org/img/wn/${icon}@2x.png`
    })
}
getWeather()
</script>
<div>
  <h1>{temp}°C</h1>
  <img src="{src}" alt="{alt} ">
</div>

<style>
  h1{
    margin: 0;
    font-family: Roboto;
  }
  div{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img{
    width: 3rem;
    height: 3rem;
  }
</style>