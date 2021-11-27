const form = document.querySelector('.forms')
const weather = document.querySelector('.weatherTemp')
const min = document.querySelector('.minTemp')
const max = document.querySelector('.maxTemp')
const input = document.querySelector('.inputCity')
const search = document.querySelector('.search')
const type_of = document.querySelector('.typeof')

const names = document.querySelector('.cityNames')



form.addEventListener('submit', getWeatherData)

function getWeatherData(e){
    e.preventDefault()
  
  const cityName = input.value
    

    const url = 'https://api.openweathermap.org/data/2.5/'
    const api_key = '7ef75b60aef276467be1f935c83653c1'

    



    
    fetch(`${url}weather?q=${cityName}&units=metric&appid=${api_key}`).then((weather) => {
    return weather.json()
    }).then(getWeather)
    






    function getWeather(data){
    
        let weatherTemps = Math.round(data.main.temp)
        weather.innerHTML = `<i class="fas fa-cloud"> | ${weatherTemps}°</i>`
        let minTemp = Math.round(data.main.temp_min)
        let maxTemp = Math.round(data.main.temp_max)
        names.textContent = data.name
        min.innerHTML = `<i >Низкая температура  | ${minTemp}°</i>`
        max.innerHTML = `<i >
        Высокая температура | ${maxTemp}°</i>`
        type_of.innerHTML = `<i >${data.weather[0].description}</i>`
        console.log(data)
        input.value = ""
    }
    
}

