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
           // WeatherMessage10.textContent = ''
        } else {           
            //console.log (data.forecast)             

            WeatherMessage1.textContent =  data.place
            WeatherMessage2.textContent =  data.Weather_description 
            WeatherMessage3.textContent =  data.PlaceLocLat +', ' + data.PlaceLocLoc
            const sTem = data.Weather_temp - 273.15
            const n = sTem.toFixed(2)
            WeatherMessage4.textContent =  data.Weather_temp + ' K | ' + n + ' C'
            const sTemp = data.Weather_feellike - 273.15
            const n1 = sTemp.toFixed(2)
            WeatherMessage5.textContent =  data.Weather_feellike + ' K | '+ n1 + ' C'
            WeatherMessage6.textContent =  data.Weather_pressure + ' mbar'
            WeatherMessage7.textContent =  data.Weather_humidity + ' %'
            WeatherMessage8.textContent =  data.Weather_windspeed + ' m/s'
            WeatherMessage9.textContent = data.Weather_winddeg
           // WeatherMessage10.textContent = ''
        }                
    })
})
})