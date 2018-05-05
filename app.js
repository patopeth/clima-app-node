const argv = require('./yargs/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


let getInfo = async(direccion) => {

    try {
        let coords = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima en ${ coords.direccion} es de ${ temp }`;

    } catch (error) {
        return `No se pudo determinar el clima en ${ direccion }`
    }
}

getInfo(argv.direccion)
    .then((resp) => {
        console.log(resp);
    })
    .catch((e) => {
        console.log(e);
    })

// MI SOLUCION
// lugar.getLugarLatLng(argv.direccion)
//     .then((resp) => {

//         clima.getClima(resp.lat, resp.lng).then((resp) => {

//                 console.log(resp);
//             })
//             .catch(e => console.log(e));
//     })
//     .catch(e => console.log(e));