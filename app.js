const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
require('colors');


const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    do {
        //imprimir menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
            break;

            case '2':
                console.log(tareas.listadoArr);
            break;

            case '3':
                
            break;

            case '4':
                
            break;

            case '5':
                
            break;

            case '6':
                
            break;
        }


        await pausa();

    } while (opt !== '0');

}

// Inquirer.js  para menus interactivos
// https://www.npmjs.com/package/inquirer

main();