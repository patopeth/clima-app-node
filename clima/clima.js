const axios = require('axios');

const getClima = async(lat, lng) => {

    let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=90918c8d00f0c71e148da98fb1288cee`);

    let temp = result.data.main.temp;

    return temp;

}


module.exports = {
    getClima

}