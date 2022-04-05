const Tarea = require("./tarea");

/*
    _listado:
        { 'uuid-123712-123123-2: { id:12, desc: asd, completadoEn: 92231} },
*/
class Tareas {

    _listado = {};

    //para listar las tareas
    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea)
        });

        return listado;
    }

    constructor(){
        this._listado = {};
    }

    

    cargarTareasFromArray(tareas = []){
     
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });     

    }


    crearTarea( desc = ''){

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }

    listadoCompleto() {

        console.log();
        this.listadoArr.forEach( (tarea, i) => {

            const idx = `${i + 1}`.green ;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                                ? 'Completada'.green
                                : 'Pendiente'.red;

            console.log(`${idx} ${desc} :: ${estado}`);                    

        });

    }

    listarPendientesCompletadas(completadas = true){

        console.log();
        let contador = 0;
        this.listadoArr.forEach( tarea => {


            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                                ? 'Completada'.green
                                : 'Pendiente'.red;
            if (completadas) {
                if (completadoEn) {
                    contador += 1;
                    //contador + string = string
                    console.log(`${(contador + '.').green} ${desc} :: ${completadoEn}`); 
                }
            } else {
                if (!completadoEn) {
                    contador += 1;
                    console.log(`${(contador + '.').green} ${desc} :: ${estado}`); 
                }
            }
                               

        });

    }

}

module.exports = Tareas;