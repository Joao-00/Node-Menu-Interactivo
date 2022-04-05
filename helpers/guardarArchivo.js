const fs = require('fs');

const guardarDB = (data) => {

    const archivo = './db/data.json';


//JSON.stringify(data) esto es para convertir un objeto en una version valida de string
//con esto se crea el archivo
    fs.writeFileSync(archivo,JSON.stringify(data) );

}


module.exports = {

    guardarDB

}