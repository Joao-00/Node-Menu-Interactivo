const fs = require('fs');

const archivo = './db/data.json';

const guardarDB = (data) => {
//JSON.stringify(data) esto es para convertir un objeto en una version valida de string
//con esto se crea el archivo
    fs.writeFileSync(archivo,JSON.stringify(data) );
}


const leerDB = () => {
    if ( !fs.existsSync(archivo)) {
        return null;
    }

    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    const data = JSON.parse(info);

    //console.log(data);

    return data;
}


module.exports = {

    guardarDB,
    leerDB

}