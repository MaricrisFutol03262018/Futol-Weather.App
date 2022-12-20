const request = require('request')

const geoLocation = (cityName, callback) => {
    const units ='metric';
    const apiKey = '30d7a7527a7ba0d2f2795f1d609168a5';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=`+ encodeURIComponent(cityName)+`&appid=${apiKey}&units=${units}`;

    
    request({ url, json:true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined) 
        } else if (body.name === false) {
            callback('Try another search!', undefined) 
        } else {
            callback(undefined, {
                latitude : body.coord.lat,
                longitude : body.coord.lon,
                location : body.name
            })
        }
    })
}

module.exports=geoLocation