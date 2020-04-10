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
const WeatherMessage = document.querySelector('#message-1')
const WeatherMessage_loc = document.querySelector('#message-2')
WeatherForm.addEventListener('submit',(e)=> {
    e.preventDefault()
    const location = search.value
    fetch('/weather?address=' + location).then((response) =>{
    response.json().then((data)=>{
        if (data.error) {            
            WeatherMessage.textContent = data.error
            WeatherMessage_loc.textContent = ''
        } else {           
            //console.log (data.forecast) 
            WeatherMessage.textContent = 'The todays weather forecast of ' + data.place + ' is ' + data.forecast 
            WeatherMessage_loc.textContent = 'The geographical location is ' + data.latitude +', ' + data.Longitude
        }                
    })
})
})