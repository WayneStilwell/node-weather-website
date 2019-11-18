const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/cd785a7283f693c5bf41d55489a409ea/${longitude},${latitude}`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.')
        } else if (body.error) {
            callback('Unable to find location.')
        } else {
            callback(undefined, `Today's high is ${body.daily.data[0].temperatureHigh} degrees with a low of ${body.daily.data[0].temperatureLow}. ${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% of rain.`)
        }
    })
}

module.exports = forecast