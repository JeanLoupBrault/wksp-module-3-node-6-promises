// Exercise 2 - `getAddressPosition`
// ---------------------------------
// 1. Complete the code of this function to return a `Promise` for a lat/lng object
// 2. Use the [OpenCage Data API](https://opencagedata.com/) to do this
//     - Sign up for an account (free) and follow the various guides to get started.
//     - [NodeJs tutorial](https://opencagedata.com/tutorials/geocode-in-nodejs)
//     - missing from the above is the need for the `key` in the request object.
//     - disregard the `.env` guidelines for now.
// 3. Once you have it working, pass it a few address to see what the responses look like.
// 4. Make sure to only return an object with lat/lng and not the whole response

const opencage = require('opencage-api-client');

function getAddressPosition(address) {
    const requestObj = {
        //    key: '1315122032774d06b34c570f3bd70f7b',
        //    q: address
        key: '711ad987ba3e4437b9485cb746a48923',
        q: address
    };

    return opencage.geocode(requestObj)
        .then(data => {
            if (data.status.code == 200) {
                //console.log('Data status (200): ', data.status);
                if (data.results.length > 0) {
                    const place = data.results[0];
                    //console.log('Place geometry', place.geometry);
                    //console.log('Place formatted address', place.formatted);
                    return place.geometry;
                }
            } else {
                //     // other possible response codes:
                //     // https://opencagedata.com/api#codes
                if (data.status.code == 402) {
                    console.log('Data status (402): ', data.status);
                }
                //console.log('error', data.status.message);
            }
        })
        .catch(error => console.log('error', error.message));
}

//getAddressPosition('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8').then(result => console.log(result));
module.exports = { getAddressPosition }