const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const request = require('request')
const getGeoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const port = process.env.PORT || 3000
// Define path for Express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewTemplate = path.join(__dirname,'../template_views/views')
const viewPArtials = path.join(__dirname,'../template_views/partials')
// Define the handlebars and the view location
app.set('view engine', 'hbs')
app.set('views',viewTemplate)
hbs.registerPartials(viewPArtials)
// Define the express path location
app.use(express.static(publicDirectoryPath))
//app.set('title','Weather')
app.get('',(req,res)=>{
     res.render('index',{
         title:'Weather',
         name:'Raja'
     })
})
// //app.com
// app.get('',(req,res)=>{
//     res.send('<h1>Weather Report</h1>')
// })
//app.com/help
app.get('/help',(req,res)=>{
    res.render('help',{
        helpmessage: 'This the help page of weather application',
        title:'Help',
        name:'Raja'
    })
})
//app.com/about
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
        name:'Raja'
    })
})
//app.com/Weather
app.get('/weather',(req,res)=>{
    if (!req.query.address){ 
        return res.send( {
            error: 'provide a valid address'
        })
    }
    const requiredlocation = req.query.address
    getGeoCode(requiredlocation,(error,{latitude,longitude,location} ={})=>{
        if (error){
            return res.send({error : error  })
        } 
        forecast(latitude, longitude, (error, forecastdata) => {
            if(error){
                return res.send({error : error })
            }   
            //console.log('Weather forcast - ', forecastdata)    
            //console.log('location - ', location) 
            res.send({
                latitude : latitude,
                Longitude: longitude,
                place: location,
                address: req.query.address,
                forecast:forecastdata
            })
        })                      
    })
})

app.get('/help/*',(reg,res)=>
     res.render('404',{
        errormessage:'Not a valid help article',
        title:'404',
        name:'Raja'
    })
)

app.get('*',(reg,res)=>
    res.render('404',{
        errormessage:'Page not found',
        title:'404',
        name:'Raja'
    })
)
app.listen(port,()=>{
    console.log ('The server is running on port ' + port) + ' ...'
})