// Exercise 5 - `getDistanceFromIss`
// ---------------------------------
// Again here you should re-use two previously created functions, plus the `getDistance` function provided to you in `workshop.js`.
//
// One of the functions does address ==> position and the other simply does nothing ==> position.
// The `getDistance` function needs the two positions to compute the final value.

// Euclidian distance between two points
//function getDistance(pos1, pos2) {
//    return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
//}
const { getIssPosition } = require('./exercise-1')
const { getAddressPosition } = require('./exercise-2')

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition
function getDistanceFromIss(address) {
    const promise1 = getAddressPosition(address)
        .then(data => {
            console.log(data)
            const promise2 = getIssPosition(data.lat, data.lng)

            function getDistance(pos1, pos2) {
                return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2))
            }
            Promise.all([promise1, promise2]).then(result => {
                getDistance(result[0], result[1])
            })
        })
}
getDistanceFromIss('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8')
//.then(data => console.log(data))
