const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
require('colors');


const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) { //cargar tareas
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        //imprimir menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
            break;

            case '2':
                tareas.listadoCompleto();
            break;

            case '3':
                tareas.listarPendientesCompletadas(true);
            break;

            case '4':
                tareas.listarPendientesCompletadas(false);
            break;

            case '5':
                
            break;

            case '6':
                
            break;
        }

       guardarDB(tareas.listadoArr);


        await pausa();

    } while (opt !== '0');

}

// Inquirer.js  para menus interactivos
// https://www.npmjs.com/package/inquirer

main();