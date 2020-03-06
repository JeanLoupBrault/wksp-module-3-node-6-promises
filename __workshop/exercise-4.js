// Exercise 4 - `getCurrentTemperature`
// -----------------------------------
// While it's useful to get the current temperature for a specific lat/lng,
// most often we want to provide the name of a place instead.
// 
// You already created a function that can do address ==> position,
// and one that can do position ==> temperature. For this exercise,
// re-use these two functions to create one that goes directly from address ==> temperature.
// 
// You can copy/paste your code from the previous exercises,
// or require them at the top of this file.
// Remember to _export_ them from their file, if you plan on _requiring_ them.



// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
const { getAddressPosition } = require('./exercise-2')
const { getCurrentTemperature } = require('./exercise-3')


function getCurrentTemperatureAtPosition(address) {
    return getAddressPosition(address)
        .then(data => {
            console.log(data)
            const promiseResult = getCurrentTemperature(data.lat, data.lng)
            return promiseResult
        })
}
getCurrentTemperatureAtPosition('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8').then(data => console.log(data))