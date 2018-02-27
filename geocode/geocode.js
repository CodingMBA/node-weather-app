const request = require('request');

var geocodeAddress = (address, callback) => {

var encodedAddress = encodeURIComponent(address);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBAPZf7oEoUjm_5HMs-KUTip4zplDqgDGg`,
  json: true
}, (error, response, body) => {
  if (body.status === 'OK') {
    callback(undefined, {
      address : body.results[0].formatted_address,
      latitude : body.results[0].geometry.location.lat,
      longitude: body.results[0].geometry.location.lng
    });
  } else if (body.status === 'ZERO_RESULTS') {
    callback('Unable to find that address');
  } else {
    callback('Unable to connect to Google servers.');
  }
});
};

module.exports.geocodeAddress = geocodeAddress;