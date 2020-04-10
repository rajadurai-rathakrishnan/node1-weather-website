const request = require('request')
const forecast = function (lati,long,callback)
{
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+ lati +'&lon=' + long + '&appid=a27e4dc52eb9d54aae0556228e2850ad'
    request({url,json:true},(error,{body})=>{
       if (error) {
         console.log ('unable to connect the weather service !')
         callback('unable to connect the weather service !',undefined)
       } else if (body.message){
         callback(body.message,undefined)
       } else {
        callback(undefined,body.weather[0].description)
       }
    })
}
module.exports = forecast