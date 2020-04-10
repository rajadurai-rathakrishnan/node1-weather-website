// console.log('Server side java script is loaded successfully')

// fetch('http://localhost:3000/weather?address=!').then((response) =>{
//     response.json().then((data)=>{
//         if (data.error) {
//             console.log (data.error)
//         } else {           
//             console.log (data.forecast)           git st
//         }                
//     })
// })

const WeatherForm = document.querySelector('form')
const search = document.querySelector('input')
const WeatherMessage1 = document.querySelector('#message-1')
const WeatherMessage2 = document.querySelector('#message-2')
const WeatherMessage3 = document.querySelector('#message-3')
const WeatherMessage4 = document.querySelector('#message-4')
const WeatherMessage5 = document.querySelector('#message-5')
const WeatherMessage6 = document.querySelector('#message-6')
const WeatherMessage7 = document.querySelector('#message-7')
const WeatherMessage8 = document.querySelector('#message-8')
const WeatherMessage9 = document.querySelector('#message-9')
const WeatherMessage10 = document.querySelector('#message-10')

WeatherForm.addEventListener('submit',(e)=> {
    e.preventDefault()
    const location = search.value
    fetch('/weather?address=' + location).then((response) =>{
    response.json().then((data)=>{
        if (data.error) {            
            WeatherMessage1.textContent = data.error
            WeatherMessage2.textContent = ''
            WeatherMessage3.textContent = ''
            WeatherMessage4.textContent = ''
            WeatherMessage5.textContent = ''
            WeatherMessage6.textContent = ''
            WeatherMessage7.textContent = ''
            WeatherMessage8.textContent = ''
            WeatherMessage9.textContent = ''
            WeatherMessage10.textContent = ''
        } else {           
            //console.log (data.forecast) 
            WeatherMessage1.textContent = 'The todays weather forecast of ' + data.place + ' is ' + data.Weather_description 
            WeatherMessage2.textContent = 'The geographical location is ' + data.PlaceLocLat +', ' + data.PlaceLocLoc
            WeatherMessage3.textContent = 'Temperature is ' + data.Weather_temp
            WeatherMessage4.textContent = 'Temperature feels like ' + data.Weather_feellike
            WeatherMessage5.textContent = 'Pressure is ' + data.Weather_pressure
            WeatherMessage6.textContent = 'Humidity is ' + data.Weather_humidity
            WeatherMessage7.textContent = 'Wind speed is ' + data.Weather_windspeed
            WeatherMessage8.textContent = 'Wind deg is ' + data.Weather_winddeg
            WeatherMessage9.textContent = ''
            WeatherMessage10.textContent = ''
        }                
    })
})
})