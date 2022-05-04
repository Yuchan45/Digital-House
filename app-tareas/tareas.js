const fs = require('fs');
const chalk = require('chalk');

let objetoTareas = {
    archivo: './tareas/tareas.json',

    leerArchivo: function(){
        /* Lee el archivo JSON y devuelve un array con los objetos tarea que haya */
        let rawdata = fs.readFileSync(this.archivo);
        let arrayTareas = JSON.parse(rawdata);
        return arrayTareas;
    },

    mostrarTareas: function(array) {
        /* Recibe un array de objetos tarea y muestra por consola las tareas que hay en este */
        console.log(chalk.bold("\nListado de tareas\n---------------------"));
        array.forEach((element, index, array) => { // parametros (elemento actual, indice del elemento actual(OPCIONAL), rray del elemento actual(OPCIONAL))
            console.log(index+1 + ". " + chalk.bold(element.titulo) + " - " + chalk.green.italic(element.estado));
        });
        console.log("\n\n");

    },

    escribirJSON: function(array) {
        /* Recibe un array de objetos tarea, le aplica stringify y los guarda en el archivo (Sobreescribe el contenido previo del archivo)  */
        let datosConvertidos = JSON.stringify(array);
        fs.writeFileSync(this.archivo, datosConvertidos, function(error) {
            if (error) throw error;
            console.log('Tarea guardada exitosamente!');
        });
    },

    guardarTarea: function(tarea) {
        /* Recibe un objeto de tipo tarea y lo guarda en el archivo json. */
        let arrayTareas = this.leerArchivo(this.archivo);
        //console.log("OLD", this.mostrarTareas(arrayTareas));
        arrayTareas.push(tarea);
        //console.log("UPDATE!", this.mostrarTareas(arrayTareas));
        this.escribirJSON(arrayTareas);
    },

    leerPorEstado(estadoSolicitado){
    /* Recibe un estado por parametro. Devuelve un array con las tareas del archivo JSON que cumplan con dicho estado. */
        let arrayTareas = this.leerArchivo(this.archivo);
        let arrayFiltrado = arrayTareas.filter(function(tarea) {
            return tarea.estado.toLowerCase() == estadoSolicitado.toLowerCase() ;
        });
        return arrayFiltrado;
    },

    filtrarPorEstado: function(estado){
    /* Recibe un estado (string) y filtra las tareas del archivo JSON por estado y luego las muestra por consola. */
        let tareasFiltradas = this.leerPorEstado(estado);
        this.mostrarTareas(tareasFiltradas);
    },

    // menuDeAcciones: function() {
    //     /* Se encarga de ejecutar diferentes acciones sobre dicho array segun los argumentos ingresados por consola. */
    //     switch(process.argv[2]){
    //         case "listar":
    //             let arrayTareas = this.leerArchivo(this.archivo);
    //             this.mostrarTareas(arrayTareas);
    //             break;

    //         case undefined:
    //             console.log(chalk.red("*Atención - Tienes que pasar una acción.\nLas acciones disponibles son: listar\n"));
    //             break;

    //         case "crear":
    //             if (process.argv[3] == undefined) {
    //                 console.log(chalk.red("*Atención - Debes ingresar el nombre de la nueva tarea. (ej: node app.js crear 'Nueva tarea')\n"));
    //                 break;
    //             }
    //             // Ver como hacer para poder recibir todos los argumentos siguientes al 3 como 1 solo argumento.
    //             let nuevaTarea = {
    //                 titulo: process.argv[3],
    //                 estado: "Pendiente"
    //             }
    //             //console.log(nuevaTarea);
    //             this.guardarTarea(nuevaTarea);
    //             console.log(chalk.green("*Se ha creado la tarea '" + nuevaTarea.titulo + "' exitosamente!\n"));
    //             break;

    //         case "filtrar":
    //             if (process.argv[3] == undefined) {
    //                 console.log(chalk.red("*Atención - Debes ingresar el estado por el que deseas filtrar. (ej: node app.js filtrar 'Pendiente')\n"));
    //                 break;
    //             }
    //             let estado = process.argv[3];
    //             this.filtrarPorEstado(estado);
    //             break;

    //         default:
    //             console.log(chalk.red("*No entiendo qué quieres hacer.\nLas acciones disponibles son: listar\n"));
    //     } 
    // }

}

module.exports = objetoTareas;