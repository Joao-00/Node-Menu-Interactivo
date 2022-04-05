const { v4: uuidv4 } = require('uuid');


class Tarea {

    id = '';
    desc = '';
    completadoEn = null;

    constructor( desc ) {

        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;

    }

}

// paquete uuid
// https://www.npmjs.com/package/uuid

module.exports = Tarea;