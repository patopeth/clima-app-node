const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let result = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyD0StKW9IM1PHNM9prpqscRuGdb4MnVIu0`);

    if (result.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    }

    let datos = result.data.results[0];

    let location = datos.formatted_address;
    let lat = datos.geometry.location.lat;
    let lng = datos.geometry.location.lng;

    return {
        direccion: location,
        lat: lat,
        lng: lng
    }
}

module.exports = {
    getLugarLatLng
}