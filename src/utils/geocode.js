const request = require('request')
const getGeoCode = (address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicmFqYW1hcGJveCIsImEiOiJjazhsaWEzbGEwZDI5M2dvMngwOW13MnV1In0.Iq6rU3-KK_cKU0JuR5DJug'
    request({url,json: true},(error,{body})=>{
        if (error) {
            callback('unable to connect the weather service !',undefined)
        } else if(body.features.length == 0){
            callback('No matching place found',undefined)
        } else {
            callback(undefined, {
                latitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                location:body.features[0].place_name
            }) 
        }
    })
}
module.exports = getGeoCode