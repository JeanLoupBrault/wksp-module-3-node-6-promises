// Exercise 3 - `getAddressPosition`
// ---------------------------------
// 1. Go to https://darksky.net/dev/ and read the documentation
// 2. Signup and get a free API key
// 3. Complete the code of the function.
// The `position` parameter is an object with `lat` and `lng`.
// 4. Make sure your function only returns a `Promise` for the current temperature
// (a number) and nothing else

// Given a position (latitude and longitude), returns the position
const request = require('request-promise');

function getCurrentTemperatureAtPosition(posLat, posLng) {


    const key = 'b943680fd512118c98368a646469b3b2';



    return request(`https://api.darksky.net/forecast/${key}/${posLat},${posLng}`)
        .then(data => {
            let dataObj = JSON.parse(data);

            //console.log('Data ', dataObj.currently.temperature);


            return dataObj.currently.temperature;
        }

        )
        .catch(error => console.log('error', error.message));
}

getCurrentTemperatureAtPosition('45.497118', '-73.579044').then(result => console.log(result));
module.exports = { getCurrentTemperatureAtPosition }